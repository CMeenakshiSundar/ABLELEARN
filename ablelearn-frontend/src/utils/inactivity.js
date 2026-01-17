import { enableAudioOnce } from "./audioState";

let timer = null;
const TIMEOUT = 20000; // 20 seconds

export function startInactivityTimer(speak) {
  clearTimeout(timer);

  timer = setTimeout(() => {
    enableAudioOnce(speak);
  }, TIMEOUT);
}

export function resetInactivityTimer(speak) {
  clearTimeout(timer);
  startInactivityTimer(speak);
}
