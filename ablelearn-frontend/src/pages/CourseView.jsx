import { useState, useEffect } from "react";
import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";
import { apiRequest } from "../utils/api";
import "../styles/courses.css";

export default function CourseView() {
  const [mode, setMode] = useState("normal");
  const [backendMode, setBackendMode] = useState("normal");
  const [speechRate, setSpeechRate] = useState(1);

  // 🧪 DEMO COUNTERS (FOR JUDGES)
  const [slowCount, setSlowCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);

  // 🧠 DEMO COGNITIVE MODE (frontend-only)
  const demoCognitiveActive = slowCount >= 2 && repeatCount >= 1;

  // 🔊 Narration functions
  const narrateOriginal = () => {
    speak(
      "Photosynthesis is the process by which green plants use sunlight to make food from carbon dioxide and water.",
      speechRate
    );
  };

  const narrateStepByStep = () => {
    speak(
      "Step one. Sunlight reaches the leaves. Step two. Roots absorb water. Step three. Leaves produce food.",
      speechRate
    );
  };

  const narrateSummary = () => {
    speak("Plants make food using sunlight.", speechRate);
  };

  // 🎧 GLOBAL KEY LISTENER (1 / 2 / 3 / + / -)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isAudioEnabled()) return;

      switch (e.key) {
        case "1":
          narrateOriginal();
          break;
        case "2":
          narrateStepByStep();
          break;
        case "3":
          narrateSummary();
          break;
        case "+":
          setSpeechRate((r) => {
            const newRate = Math.min(r + 0.2, 2);
            speak("Speed increased", newRate);
            return newRate;
          });
          break;
        case "-":
          setSpeechRate((r) => {
            const newRate = Math.max(r - 0.2, 0.6);
            speak("Speed decreased", newRate);
            return newRate;
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [speechRate]);

  // 🐢 Slow
  const handleSlow = async () => {
    setMode("slow");
    setSlowCount((c) => c + 1);

    const res = await apiRequest("/interaction", "POST", {
      action: "slow",
    });

    if (res?.inferred_mode) {
      setBackendMode(res.inferred_mode);
    }

    narrateStepByStep();
  };

  // 🔁 Repeat
  const handleRepeat = async () => {
    setRepeatCount((c) => c + 1);

    await apiRequest("/interaction", "POST", { action: "repeat" });

    narrateStepByStep();
  };

  // 🧠 Speak when DEMO cognitive activates
  useEffect(() => {
    if (demoCognitiveActive) {
      speak(
        "Cognitive mode activated. Content simplified. Congratulations, you have completed photosynthesis.",
        speechRate
      );
    }
  }, [demoCognitiveActive]);

  const cognitiveActive = backendMode === "cognitive" || demoCognitiveActive;

  return (
    <main className="course-view">
      {/* 🐢 TOP RIGHT INDICATOR */}
      {cognitiveActive && (
        <div className="cognitive-indicator">
          🐢 Cognitive Mode
        </div>
      )}

      <h2
        tabIndex="0"
        onFocus={() =>
          isAudioEnabled() &&
          speak(
            "Photosynthesis course. Press 1 for full explanation. Press 2 for step by step. Press 3 for summary.",
            speechRate
          )
        }
      >
        Photosynthesis
      </h2>

      {/* IMAGE SWITCH */}
      <img
        src={
          cognitiveActive
            ? "/images/photosynthesis-cognitive.jpg"
            : mode === "slow"
            ? "/images/photosynthesis-simple.jpeg"
            : "/images/photosynthesis-flow.jpeg"
        }
        alt="Photosynthesis diagram"
        className="course-image"
      />

      {/* BADGES */}
      {cognitiveActive && (
        <div className="adaptive-badge">
        
        </div>
      )}

      {demoCognitiveActive && (
        <div className="completion-message">
          🎉 Congratulations!  
          <br />
          You have completed the Photosynthesis topic.
        </div>
      )}

      {/* CONTROLS */}
      <div className="course-controls">
        <button onClick={handleSlow}>🐢 Slow</button>
        <button onClick={handleRepeat}>🔁 Repeat</button>
      </div>

      
    </main>
  );
}
