import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";

export default function Sidebar({ setPage }) {
  const nav = (page, label) => (
    <button
      tabIndex="0"
      onFocus={() => isAudioEnabled() && speak(label)}
      onClick={() => setPage(page)}
    >
      {label}
    </button>
  );

  return (
    <aside className="sidebar">
      {nav("dashboard", "Dashboard")}
      {nav("courses", "Courses")}
      {nav("profile", "Profile")}
      {nav("settings", "Settings")}
    </aside>
  );
}
