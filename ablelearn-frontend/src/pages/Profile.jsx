import Layout from "../layout/Layout";
import { speak } from "../utils/speech";
import { isAudioEnabled } from "../utils/audioState";

export default function Profile({ setPage, streak }) {
  return (
    <Layout setPage={setPage} streak={streak}>
      <h2
        tabIndex="0"
        onFocus={() => isAudioEnabled() && speak("Profile")}
      >
        Profile
      </h2>

      <p>Email: student@test.com</p>
      <p>Learning Mode: Adaptive</p>
    </Layout>
  );
}
