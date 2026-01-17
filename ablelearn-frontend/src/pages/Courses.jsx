import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";
import "../styles/courses.css";

export default function Courses({ setPage }) {
  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">AbleLearn</h2>

        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button className="active">Courses</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("settings")}>Settings</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <h1
          tabIndex="0"
          onFocus={() => isAudioEnabled() && speak("Courses page")}
        >
          Courses
        </h1>

        <div
          className="course-card"
          tabIndex="0"
          onFocus={() =>
            isAudioEnabled() &&
            speak(
              "Course 1. Photosynthesis. Biology. Duration 15 minutes. Press enter to open."
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") setPage("course");
          }}
          onClick={() => setPage("course")}
        >
          <div className="course-icon">🌱</div>

          <div className="course-info">
            <h3>Photosynthesis</h3>
            <p>Biology • 15 minutes</p>
          </div>

          <div className="course-arrow">➡️</div>
        </div>
      </main>
    </div>
  );
}
