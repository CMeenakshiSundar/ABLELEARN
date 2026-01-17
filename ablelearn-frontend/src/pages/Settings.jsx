import Layout from "../layout/Layout";
import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";

export default function Settings({ setPage, streak }) {
  return (
    <Layout setPage={setPage} streak={streak}>
      <h2
        tabIndex="0"
        onFocus={() => isAudioEnabled() && speak("Settings")}
      >
        Settings
      </h2>

      <p>Audio navigation enabled</p>
      <p>Adaptive learning active</p>
    </Layout>
  );
}
