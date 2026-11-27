// Web Audio and Web Speech utilities for study feedback

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Gentle pleasant chime on correct answer
export function playSuccessChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  } catch {
    // Audio context may be restricted by browser policy
  }
}

// Subtle low tone on mistake
export function playMistakeChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.linearRampToValueAtTime(200, now + 0.2);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  } catch {
    // Audio context may be restricted
  }
}

// Persistent active utterances set to prevent V8 Garbage Collection in Chromium
const activeUtterances = new Set<SpeechSynthesisUtterance>();
let cachedJaVoice: SpeechSynthesisVoice | null = null;
let engineWarmedUp = false;

// Proactively query and cache the Japanese voice
function loadJapaneseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  try {
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const ja =
        voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP') ||
        voices.find(v => v.lang.toLowerCase().startsWith('ja') || v.lang.toLowerCase().includes('jp'));
      if (ja) {
        cachedJaVoice = ja;
        return ja;
      }
    }
  } catch {
    // ignore
  }
  return cachedJaVoice;
}

// Register voice loader immediately on script evaluation
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadJapaneseVoice();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      loadJapaneseVoice();
    };
  }
}

// Pre-warm the native mobile/Android TTS background engine
export function warmUpSpeechEngine() {
  if (typeof window === 'undefined' || !window.speechSynthesis || engineWarmedUp) return;
  engineWarmedUp = true;

  try {
    const synth = window.speechSynthesis;
    if (synth.paused) {
      synth.resume();
    }
    loadJapaneseVoice();

    // Silent minimal utterance to wake up native Android TTS background service
    const silent = new SpeechSynthesisUtterance('');
    silent.volume = 0;
    silent.rate = 2.0;
    activeUtterances.add(silent);
    silent.onend = () => activeUtterances.delete(silent);
    silent.onerror = () => activeUtterances.delete(silent);
    synth.speak(silent);
  } catch {
    // ignore
  }
}

// Automatically listen for first user interaction (touch, click, keydown) to warm up
if (typeof window !== 'undefined') {
  const onFirstInteraction = () => {
    warmUpSpeechEngine();
    window.removeEventListener('click', onFirstInteraction);
    window.removeEventListener('touchstart', onFirstInteraction);
    window.removeEventListener('keydown', onFirstInteraction);
  };
  window.addEventListener('click', onFirstInteraction, { passive: true, once: true });
  window.addEventListener('touchstart', onFirstInteraction, { passive: true, once: true });
  window.addEventListener('keydown', onFirstInteraction, { passive: true, once: true });
}

// Robust Japanese speech synthesis for the kana
export function speakKana(char: string) {
  try {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const synth = window.speechSynthesis;

    // 1. Unpause if stuck in paused state on mobile
    if (synth.paused) {
      synth.resume();
    }

    // 2. Query/refresh voice if not yet cached
    const jaVoice = loadJapaneseVoice();

    const doSpeak = () => {
      try {
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.95;
        utterance.volume = 1.0;

        if (jaVoice) {
          utterance.voice = jaVoice;
        }

        // Prevent V8 garbage collection while queued/playing
        activeUtterances.add(utterance);
        utterance.onend = () => {
          activeUtterances.delete(utterance);
        };
        utterance.onerror = () => {
          activeUtterances.delete(utterance);
        };

        synth.speak(utterance);

        // Mobile Chromium quirk: force unpause if browser queued it as paused
        if (synth.paused) {
          synth.resume();
        }
      } catch {
        // speech error fallback
      }
    };

    // 3. Avoid synchronous cancel-vs-speak race in Chromium
    if (synth.speaking || synth.pending) {
      synth.cancel();
      // Allow 25ms buffer for native cancel to settle before queuing new utterance
      setTimeout(doSpeak, 25);
    } else {
      doSpeak();
    }
  } catch {
    // Speech synthesis error fallback
  }
}
