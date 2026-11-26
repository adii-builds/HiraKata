import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KanaItem, hiraganaSingleColumns, katakanaSingleColumns } from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';
import { playSuccessChime, playMistakeChime, speakKana } from '../utils/sound';
import confetti from 'canvas-confetti';
import {
  Volume2,
  RotateCcw,
  Sparkles,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sliders,

} from 'lucide-react';

interface StudyViewProps {
  onGoToTab: (tab: 'hiragana' | 'katakana') => void;
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const StudyView: React.FC<StudyViewProps> = ({ onGoToTab }) => {
  const {
    selectedItems,
    counts,
    fontPreference,
    setFontPreference,
    autoAdvance,
    setAutoAdvance,
    toggleColumn,
  } = useKanaStore();

  // Queue of remaining cards to study in this session
  const [deck, setDeck] = useState<KanaItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  // Feedback states
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'mistake'>('idle');
  const [mistakeAnswer, setMistakeAnswer] = useState<string | null>(null);

  // Statistics
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showSettingsDrawer, setShowSettingsDrawer] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize or restart study session
  const startSession = useCallback(() => {
    if (selectedItems.length === 0) {
      setDeck([]);
      setIsCompleted(false);
      return;
    }

    const shuffled = shuffleArray(selectedItems);
    setDeck(shuffled);
    setCurrentIndex(0);
    setInputValue('');
    setFeedbackState('idle');
    setMistakeAnswer(null);
    setCorrectCount(0);
    setMistakeCount(0);
    setStreak(0);
    setBestStreak(0);
    setIsCompleted(false);
  }, [selectedItems]);

  // Restart session when selectedItems length changes drastically from 0
  useEffect(() => {
    if (deck.length === 0 && selectedItems.length > 0) {
      startSession();
    }
  }, [selectedItems.length, deck.length, startSession]);

  // Current Card
  const currentCard: KanaItem | undefined = deck[currentIndex];

  // Auto-focus input
  useEffect(() => {
    if (!isCompleted && feedbackState === 'idle') {
      inputRef.current?.focus();
    }
  }, [currentIndex, isCompleted, feedbackState]);


  // Handle Correct Answer
  const handleCorrect = useCallback(() => {
    setFeedbackState('correct');
    playSuccessChime();

    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > bestStreak) setBestStreak(newStreak);
    setCorrectCount(prev => prev + 1);

    setTimeout(() => {
      setInputValue('');
      setFeedbackState('idle');
      setMistakeAnswer(null);

      if (currentIndex + 1 >= deck.length) {
        setIsCompleted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 280);
  }, [streak, bestStreak, currentIndex, deck.length]);

  // Handle Mistake
  const handleMistake = useCallback(() => {
    if (!currentCard) return;

    setFeedbackState('mistake');
    playMistakeChime();
    setStreak(0);
    setMistakeCount(prev => prev + 1);
    setMistakeAnswer(currentCard.displayRomaji);

    // Re-queue card to end of deck so user must repeat it
    setDeck(prev => [...prev, currentCard]);
  }, [currentCard]);

  // Dismiss Mistake and continue
  const advanceAfterMistake = useCallback(() => {
    setInputValue('');
    setFeedbackState('idle');
    setMistakeAnswer(null);

    if (currentIndex + 1 >= deck.length) {
      setIsCompleted(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, deck.length]);

  // Check Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentCard || feedbackState !== 'idle') return;

    const val = e.target.value.toLowerCase().trim();
    setInputValue(e.target.value);

    // Instant matching
    const isMatch = currentCard.romajiAnswers.some(ans => ans.toLowerCase() === val);
    if (isMatch && autoAdvance) {
      handleCorrect();
    }
  };

  // Handle Key Down (Enter, etc.)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (feedbackState === 'mistake') {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advanceAfterMistake();
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (!currentCard || inputValue.trim() === '') return;

      const val = inputValue.toLowerCase().trim();
      const isMatch = currentCard.romajiAnswers.some(ans => ans.toLowerCase() === val);

      if (isMatch) {
        handleCorrect();
      } else {
        handleMistake();
      }
    }
  };

  // Font class mapping
  const fontClass =
    fontPreference === 'mincho'
      ? 'font-mincho'
      : fontPreference === 'hand'
      ? 'font-hand'
      : 'font-gothic';

  // --- 1. Empty State (0 characters selected) ---
  if (counts.total === 0) {
    return (
      <div className="study-empty-state">
        <div className="empty-card">
          <div className="empty-icon-circle">
            <Sparkles size={36} className="text-accent" />
          </div>
          <h2>No Characters Selected</h2>
          <p>
            Choose which Kana you want to drill by selecting columns or rows in Hiragana and Katakana.
          </p>

          <div className="quick-presets">
            <span className="preset-label">Quick Start Options:</span>
            <div className="preset-buttons">
              <button
                type="button"
                onClick={() => {
                  toggleColumn('hiragana', 'single', 0);
                  startSession();
                }}
                className="preset-btn"
              >
                Hiragana First Row (あ, い, う, え, お)
              </button>
              <button
                type="button"
                onClick={() => {
                  hiraganaSingleColumns.slice(0, 5).forEach(c => toggleColumn('hiragana', 'single', c.columnIdx));
                  startSession();
                }}
                className="preset-btn"
              >
                Hiragana First 5 Rows (a to na)
              </button>
              <button
                type="button"
                onClick={() => {
                  katakanaSingleColumns.slice(0, 5).forEach(c => toggleColumn('katakana', 'single', c.columnIdx));
                  startSession();
                }}
                className="preset-btn"
              >
                Katakana First 5 Rows (ア to ナ)
              </button>
            </div>
          </div>

          <div className="empty-nav-links">
            <button type="button" onClick={() => onGoToTab('hiragana')} className="empty-link-btn">
              Go to Hiragana
            </button>
            <button type="button" onClick={() => onGoToTab('katakana')} className="empty-link-btn">
              Go to Katakana
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. Completed State ---
  if (isCompleted) {
    const accuracy =
      correctCount + mistakeCount > 0
        ? Math.round((correctCount / (correctCount + mistakeCount)) * 100)
        : 100;

    return (
      <div className="study-completed-container">
        <div className="completed-card">
          <CheckCircle2 size={54} className="text-success" />
          <h2>Session Complete!</h2>
          <p className="completed-subtitle">All selected characters mastered.</p>

          <div className="completed-stats-grid">
            <div className="stat-box">
              <span className="stat-val">{correctCount}</span>
              <span className="stat-lbl">Cards Studied</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{accuracy}%</span>
              <span className="stat-lbl">Accuracy</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{bestStreak} 🔥</span>
              <span className="stat-lbl">Best Streak</span>
            </div>
          </div>

          <div className="completed-actions">
            <button type="button" onClick={startSession} className="primary-action-btn">
              <RotateCcw size={16} />
              <span>Study Again</span>
            </button>
            <button type="button" onClick={() => onGoToTab('hiragana')} className="secondary-action-btn">
              Select Different Kana
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Progress
  const totalCards = deck.length;
  const progressPercent = totalCards > 0 ? Math.round(((currentIndex) / totalCards) * 100) : 0;
  const accuracy =
    correctCount + mistakeCount > 0
      ? Math.round((correctCount / (correctCount + mistakeCount)) * 100)
      : 100;

  return (
    <div className="study-workspace">
      {/* Top HUD: Progress & Stats */}
      <div className="study-hud">
        <div className="hud-left">
          <span className="hud-counter">
            Card <strong>{currentIndex + 1}</strong> of {totalCards}
          </span>
          <div className="hud-progress-bar">
            <div className="hud-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="hud-right">
          <div className="hud-metric" title="Current streak">
            <Flame size={16} className={streak > 0 ? 'text-flame' : 'text-muted'} />
            <span>{streak}</span>
          </div>

          <div className="hud-metric" title="Accuracy">
            <span>{accuracy}%</span>
          </div>

          <button
            type="button"
            onClick={() => setShowSettingsDrawer(prev => !prev)}
            className="hud-settings-toggle"
            title="Study options"
          >
            <Sliders size={16} />
          </button>
        </div>
      </div>

      {/* Settings Drawer (Options) */}
      {showSettingsDrawer && (
        <div className="study-options-panel">
          <div className="option-row">
            <span>Auto-advance on match</span>
            <input
              type="checkbox"
              checked={autoAdvance}
              onChange={e => setAutoAdvance(e.target.checked)}
            />
          </div>
          <div className="option-row">
            <span>Japanese Font</span>
            <select
              value={fontPreference}
              onChange={e => setFontPreference(e.target.value as any)}
              className="option-select"
            >
              <option value="gothic">Gothic (Standard Sans)</option>
              <option value="mincho">Mincho (Serif)</option>
              <option value="hand">Klee (Handwritten Brush)</option>
            </select>
          </div>
        </div>
      )}

      {/* Main Flashcard Card */}
      <div className="study-center-stage">
        <div
          className={`study-flashcard ${
            feedbackState === 'correct' ? 'card-correct' : feedbackState === 'mistake' ? 'card-mistake' : ''
          }`}
        >
          {/* Script Badges */}
          <div className="flashcard-badges">
            <span className={`badge-script ${currentCard?.script}`}>
              {currentCard?.script.toUpperCase()}
            </span>
            <span className="badge-category">{currentCard?.category.toUpperCase()}</span>
          </div>

          {/* Big Kana Glyph */}
          <div className={`flashcard-glyph ${fontClass}`}>
            {currentCard?.char}
          </div>

          {/* Dedicated Audio Play Button (plays only when pressed) */}
          <button
            type="button"
            onMouseDown={e => e.preventDefault()}
            onClick={() => currentCard && speakKana(currentCard.char)}
            className="glyph-audio-btn"
            title="Play pronunciation"
            aria-label="Play pronunciation"
          >
            <Volume2 size={18} />
            <span className="audio-btn-label">Listen</span>
          </button>
        </div>

        {/* Input & Feedback Area */}
        <div className="study-input-container">
          {feedbackState === 'mistake' ? (
            <div className="mistake-feedback-box">
              <div className="mistake-text">
                <XCircle size={20} className="text-danger" />
                <span>
                  Correct answer:{' '}
                  <strong>{currentCard?.char} = {mistakeAnswer}</strong>
                  {currentCard?.romajiAnswers.length && currentCard.romajiAnswers.length > 1
                    ? ` (or ${currentCard.romajiAnswers.filter(a => a !== mistakeAnswer).join(', ')})`
                    : ''}
                </span>
              </div>
              <button
                type="button"
                onClick={advanceAfterMistake}
                className="mistake-continue-btn"
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="input-field-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type the rōmaji equivalent..."
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="off"
                className="study-text-input"
              />
            </div>
          )}
        </div>

        {/* Hints / Instructions */}
        <div className="study-footer-hints">
          <span>
            {autoAdvance
              ? 'Auto-advance enabled: correct answer advances instantly.'
              : 'Press Enter to submit your answer.'}
          </span>
        </div>
      </div>
    </div>
  );
};
