let audioEnabled = false;

export function enableAudioOnce(speak) {
  if (!audioEnabled) {
    audioEnabled = true;
    speak("Audio navigation enabled.");
  }
}

export function isAudioEnabled() {
  return audioEnabled;
}
