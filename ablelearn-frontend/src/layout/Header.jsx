import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";

export default function Header({ streak }) {
  return (
    <header className="header">
      <h1>AbleLearn</h1>

      <div className="header-actions">
        <span
          tabIndex="0"
          onFocus={() =>
            isAudioEnabled() &&
            speak(`Learning streak ${streak} days`)
          }
        >
          🔥 {streak}
        </span>

        <span tabIndex="0" onFocus={() => isAudioEnabled() && speak("User profile")}>
          👤
        </span>

        <button
          tabIndex="0"
          onFocus={() => isAudioEnabled() && speak("Logout")}
          onClick={() => window.location.reload()}
        >
          ⎋
        </button>
      </div>
    </header>
  );
}
