import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";
import "../styles/dashboard.css";

export default function Layout({ children, setPage, streak }) {
  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">AbleLearn</h2>

        <button
          className="nav"
          onClick={() => setPage("dashboard")}
          onFocus={() => isAudioEnabled() && speak("Dashboard")}
        >
          Dashboard
        </button>

        <button
          className="nav"
          onClick={() => setPage("courses")}
          onFocus={() => isAudioEnabled() && speak("Courses")}
        >
          Courses
        </button>

        <button
          className="nav"
          onClick={() => setPage("profile")}
          onFocus={() => isAudioEnabled() && speak("Profile")}
        >
          Profile
        </button>

        <button
          className="nav"
          onClick={() => setPage("settings")}
          onFocus={() => isAudioEnabled() && speak("Settings")}
        >
          Settings
        </button>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* HEADER */}
        <header className="dashboard-header">
          <div>
            <h1>AbleLearn</h1>
            <p className="subtitle">
              Adaptive learning enabled • Listening for learning friction
            </p>
          </div>

          <div className="header-actions">
            {streak && (
              <div className="streak">🔥 {streak} day streak</div>
            )}
            <div className="avatar">JD</div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}
