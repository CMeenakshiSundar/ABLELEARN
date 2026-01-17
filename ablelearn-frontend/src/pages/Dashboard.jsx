import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";
import "../styles/dashboard.css";

export default function Dashboard({ setPage }) {
  return (
    <div className="app-shell">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1 className="logo">AbleLearn</h1>

        <nav>
          <button
            className="active"
            onFocus={() => isAudioEnabled() && speak("Dashboard")}
          >
            Dashboard
          </button>

          <button
            onClick={() => setPage("courses")}
            onFocus={() => isAudioEnabled() && speak("Courses")}
          >
            Courses
          </button>

          <button
            onClick={() => setPage("profile")}
            onFocus={() => isAudioEnabled() && speak("Profile")}
          >
            Profile
          </button>

          <button
            onClick={() => setPage("settings")}
            onFocus={() => isAudioEnabled() && speak("Settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <section className="main">
        {/* HEADER */}
        <header className="topbar">
          <div>
            <h2>Welcome back, Jordan!</h2>
            <p>Adaptive learning enabled • Listening for learning friction</p>
          </div>

          <div className="topbar-right">
            <div className="streak">🔥 5 day streak</div>
            <div className="avatar">JD</div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="dashboard-content">
          <div className="card">
            <h3>Learning Mode</h3>
            <p>Adaptive (AI-driven)</p>
            <p>Adjusts content automatically</p>
          </div>

          <div className="card">
            <h3>Current Course</h3>
            <p>🌱 Photosynthesis</p>
            <p>Biology • 15 minutes</p>
          </div>

          <div className="card">
            <h3>Engagement</h3>
            <p>⚠️ 2 slowdowns detected</p>
            <p>Adaptive support ready</p>
          </div>

          <div className="card wide">
            <h3>Weekly Progress</h3>
            <div className="progress-row">
              <span className="bar filled" />
              <span className="bar filled" />
              <span className="bar filled" />
              <span className="bar filled" />
              <span className="bar filled" />
              <span className="bar" />
            <span className="bar filled" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
