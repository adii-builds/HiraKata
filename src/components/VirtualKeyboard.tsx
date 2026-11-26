import React from 'react';
import { Delete, CornerDownLeft, ArrowRight, FastForward } from 'lucide-react';

interface VirtualKeyboardProps {
  onChar: (char: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onSubmit: () => void;
  onSkip: () => void;
  feedbackState: 'idle' | 'correct' | 'mistake';
  isBlitzMode?: boolean;
  script?: 'hiragana' | 'katakana';
}

const ROW_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const ROW_2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const ROW_3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onChar,
  onBackspace,
  onClear,
  onSubmit,
  onSkip,
  feedbackState,
  isBlitzMode = false,
  script = 'hiragana',
}) => {
  const isMistake = feedbackState === 'mistake';

  // Subtle haptic tick on Android mobile devices
  const triggerHaptic = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {
        // ignore if not supported
      }
    }
  };

  const handleKey = (action: () => void) => {
    triggerHaptic();
    action();
  };

  return (
    <div
      className={`study-virtual-keyboard script-${script} ${isBlitzMode ? 'mode-blitz' : ''} ${
        isMistake ? 'is-mistake-state' : ''
      }`}
      aria-label="Kana on-screen keyboard"
    >
      {/* Row 1: Q - P (10 keys) */}
      <div className="vk-row">
        {ROW_1.map(char => (
          <button
            key={char}
            type="button"
            tabIndex={-1}
            onMouseDown={e => e.preventDefault()}
            onClick={() => handleKey(() => onChar(char))}
            className="vk-key"
            aria-label={char.toUpperCase()}
          >
            {char.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Row 2: A - L (9 keys, centered) */}
      <div className="vk-row vk-row-2">
        <div className="vk-indent-spacer" />
        {ROW_2.map(char => (
          <button
            key={char}
            type="button"
            tabIndex={-1}
            onMouseDown={e => e.preventDefault()}
            onClick={() => handleKey(() => onChar(char))}
            className="vk-key"
            aria-label={char.toUpperCase()}
          >
            {char.toUpperCase()}
          </button>
        ))}
        <div className="vk-indent-spacer" />
      </div>

      {/* Row 3: Skip / Reveal, Z - M, Backspace */}
      <div className="vk-row">
        <button
          type="button"
          tabIndex={-1}
          onMouseDown={e => e.preventDefault()}
          onClick={() => handleKey(onSkip)}
          className="vk-key vk-key-special vk-key-skip"
          title={isBlitzMode ? 'Skip card' : isMistake ? 'Continue' : 'Reveal answer (Skip)'}
          aria-label={isBlitzMode ? 'Skip card' : isMistake ? 'Continue' : 'Reveal answer'}
        >
          {isBlitzMode ? (
            <>
              <FastForward size={13} />
              <span>Skip</span>
            </>
          ) : isMistake ? (
            <>
              <span>Next</span>
              <ArrowRight size={13} />
            </>
          ) : (
            <>
              <FastForward size={13} />
              <span>Skip</span>
            </>
          )}
        </button>

        {ROW_3.map(char => (
          <button
            key={char}
            type="button"
            tabIndex={-1}
            onMouseDown={e => e.preventDefault()}
            onClick={() => handleKey(() => onChar(char))}
            className="vk-key"
            aria-label={char.toUpperCase()}
          >
            {char.toUpperCase()}
          </button>
        ))}

        <button
          type="button"
          tabIndex={-1}
          onMouseDown={e => e.preventDefault()}
          onClick={() => handleKey(onBackspace)}
          className="vk-key vk-key-special vk-key-backspace"
          title="Backspace"
          aria-label="Backspace"
        >
          <Delete size={17} />
        </button>
      </div>

      {/* Row 4: Clear, Space / Continue, Submit */}
      <div className="vk-row vk-row-bottom">
        <button
          type="button"
          tabIndex={-1}
          onMouseDown={e => e.preventDefault()}
          onClick={() => handleKey(onClear)}
          className="vk-key vk-key-special vk-key-clear"
          title="Clear input"
          aria-label="Clear input"
        >
          <span>Clear</span>
        </button>

        <button
          type="button"
          tabIndex={-1}
          onMouseDown={e => e.preventDefault()}
          onClick={() => handleKey(isMistake ? onSubmit : () => onChar(' '))}
          className={`vk-key vk-key-space ${isMistake ? 'vk-continue-active' : ''}`}
          aria-label={isMistake ? 'Continue to next card' : 'Space'}
        >
          {isMistake ? (
            <span className="vk-continue-text">
              Continue <ArrowRight size={14} className="inline-icon" />
            </span>
          ) : (
            <span className="vk-space-text">Space</span>
          )}
        </button>

        <button
          type="button"
          tabIndex={-1}
          onMouseDown={e => e.preventDefault()}
          onClick={() => handleKey(onSubmit)}
          className={`vk-key vk-key-submit ${isMistake ? 'vk-submit-continue' : ''}`}
          title={isMistake ? 'Continue' : 'Submit answer'}
          aria-label={isMistake ? 'Continue' : 'Submit answer'}
        >
          {isMistake ? (
            <>
              <span>Next</span>
              <ArrowRight size={14} />
            </>
          ) : (
            <>
              <span>Enter</span>
              <CornerDownLeft size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
