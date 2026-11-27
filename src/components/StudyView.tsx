import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KanaItem, hiraganaSingleColumns, katakanaSingleColumns } from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';
import { playSuccessChime, playMistakeChime, speakKana, warmUpSpeechEngine } from '../utils/sound';
import { romajiToKana } from '../utils/kanaIme';
import confetti from 'canvas-confetti';
import { ContinuousStrokeAnimation } from './ContinuousStrokeAnimation';
import { VirtualKeyboard } from './VirtualKeyboard';
import {
  Volume2,
  RotateCcw,
  Sparkles,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sliders,
  Zap,
  Trophy,
  Timer,
  X,
  ArrowLeft,
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
    kanaConversion,
    setKanaConversion,
    toggleColumn,
    recordMistake,
    recordSuccess,
    weakSpotsCount,
    drillWeakSpots,
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

  // Blitz Mode State
  const STORAGE_KEY_BLITZ_HIGHSCORE = 'hirakata_blitz_highscore_v1';
  const [isBlitzMode, setIsBlitzMode] = useState<boolean>(false);
  const [blitzTimeLeft, setBlitzTimeLeft] = useState<number>(60);
  const [blitzScore, setBlitzScore] = useState<number>(0);
  const [blitzMistakes, setBlitzMistakes] = useState<number>(0);
  const [blitzHighScore, setBlitzHighScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BLITZ_HIGHSCORE);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [showBlitzSummary, setShowBlitzSummary] = useState<boolean>(false);
  const [isNewHighScore, setIsNewHighScore] = useState<boolean>(false);

  const blitzScoreRef = useRef<number>(blitzScore);
  blitzScoreRef.current = blitzScore;
  const blitzMistakesRef = useRef<number>(blitzMistakes);
  blitzMistakesRef.current = blitzMistakes;

  const inputRef = useRef<HTMLInputElement>(null);

  // Mobile viewport detection for dedicated in-page keyboard
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    warmUpSpeechEngine();
  }, []);

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
    setIsBlitzMode(false);
    setShowBlitzSummary(false);
  }, [selectedItems]);

  // Finish Blitz Mode
  const finishBlitz = useCallback((finalScore: number, _finalMistakes: number) => {
    setIsBlitzMode(false);
    setShowBlitzSummary(true);

    let prevBest = 0;
    try {
      prevBest = parseInt(localStorage.getItem(STORAGE_KEY_BLITZ_HIGHSCORE) || '0', 10) || 0;
    } catch {
      // ignore
    }

    if (finalScore > prevBest) {
      setIsNewHighScore(true);
      setBlitzHighScore(finalScore);
      try {
        localStorage.setItem(STORAGE_KEY_BLITZ_HIGHSCORE, String(finalScore));
      } catch {
        // ignore
      }
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.5 },
      });
    } else {
      setIsNewHighScore(false);
      if (finalScore > 0) {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
    }
  }, []);

  // Blitz Countdown Timer
  useEffect(() => {
    if (!isBlitzMode) return;

    const timer = setInterval(() => {
      setBlitzTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishBlitz(blitzScoreRef.current, blitzMistakesRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isBlitzMode, finishBlitz]);

  // Start 60-Second Blitz Mode
  const startBlitz = useCallback(() => {
    if (selectedItems.length === 0) return;

    let queue = shuffleArray(selectedItems);
    while (queue.length < 50) {
      queue = [...queue, ...shuffleArray(selectedItems)];
    }

    setDeck(queue);
    setCurrentIndex(0);
    setInputValue('');
    setFeedbackState('idle');
    setMistakeAnswer(null);
    setBlitzScore(0);
    setBlitzMistakes(0);
    setBlitzTimeLeft(60);
    setIsNewHighScore(false);
    setShowBlitzSummary(false);
    setIsCompleted(false);
    setIsBlitzMode(true);
    setTimeout(() => inputRef.current?.focus(), 60);
  }, [selectedItems]);

  // Exit Blitz Mode
  const exitBlitz = useCallback(() => {
    setIsBlitzMode(false);
    setShowBlitzSummary(false);
    startSession();
  }, [startSession]);

  // Restart session when selectedItems length changes drastically from 0
  useEffect(() => {
    if (deck.length === 0 && selectedItems.length > 0 && !isBlitzMode) {
      startSession();
    }
  }, [selectedItems.length, deck.length, startSession, isBlitzMode]);

  // Current Card
  const currentCard: KanaItem | undefined = deck[currentIndex];

  // Auto-focus input (Desktop only — on mobile, avoid focusing DOM input so Android IME is never summoned)
  useEffect(() => {
    if (!isCompleted && !showBlitzSummary && feedbackState === 'idle') {
      if (!isMobile) {
        inputRef.current?.focus();
      }
    }
  }, [currentIndex, isCompleted, showBlitzSummary, feedbackState, isMobile]);

  // Prevent Android from restoring soft keyboard when returning from Recent Apps
  useEffect(() => {
    if (!isMobile) return;

    const suppressSoftKeyboard = () => {
      if (document.activeElement instanceof HTMLElement && document.activeElement.tagName === 'INPUT') {
        document.activeElement.blur();
      }
    };

    document.addEventListener('visibilitychange', suppressSoftKeyboard);
    window.addEventListener('focus', suppressSoftKeyboard);
    return () => {
      document.removeEventListener('visibilitychange', suppressSoftKeyboard);
      window.removeEventListener('focus', suppressSoftKeyboard);
    };
  }, [isMobile]);

  // Handle Correct Answer
  const handleCorrect = useCallback(() => {
    if (!currentCard) return;

    setFeedbackState('correct');
    playSuccessChime();
    recordSuccess(currentCard.id);

    if (isBlitzMode) {
      setBlitzScore(prev => prev + 1);
      setTimeout(() => {
        setInputValue('');
        setFeedbackState('idle');
        setDeck(prevDeck => {
          if (currentIndex + 5 >= prevDeck.length) {
            return [...prevDeck, ...shuffleArray(selectedItems)];
          }
          return prevDeck;
        });
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return;
    }

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
    }, 260);
  }, [currentCard, recordSuccess, isBlitzMode, currentIndex, selectedItems, streak, bestStreak, deck.length]);

  // Handle Mistake
  const handleMistake = useCallback(() => {
    if (!currentCard) return;

    setFeedbackState('mistake');
    playMistakeChime();
    recordMistake(currentCard.id);

    if (isBlitzMode) {
      setBlitzMistakes(prev => prev + 1);
      setTimeout(() => {
        setInputValue('');
        setFeedbackState('idle');
        setDeck(prevDeck => {
          if (currentIndex + 5 >= prevDeck.length) {
            return [...prevDeck, ...shuffleArray(selectedItems)];
          }
          return prevDeck;
        });
        setCurrentIndex(prev => prev + 1);
      }, 280);
      return;
    }

    setStreak(0);
    setMistakeCount(prev => prev + 1);
    setMistakeAnswer(currentCard.displayRomaji);

    // Re-queue card to end of deck so user must repeat it
    setDeck(prev => [...prev, currentCard]);
  }, [currentCard, recordMistake, isBlitzMode, currentIndex, selectedItems]);

  // Dismiss Mistake and continue (Normal study mode)
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

    const rawVal = e.target.value;
    const nextVal =
      kanaConversion && currentCard
        ? romajiToKana(rawVal, currentCard.script, currentCard.char)
        : rawVal;
    setInputValue(nextVal);

    const valTrimmed = nextVal.trim();
    // Instant matching: match either the converted kana or the romaji variant
    const isMatch =
      valTrimmed === currentCard.char ||
      currentCard.romajiAnswers.some(ans => ans.toLowerCase() === valTrimmed.toLowerCase());

    if (isMatch && autoAdvance) {
      handleCorrect();
    }
  };

  // Handle Key Down
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 1. Shortcut: Ctrl+Enter or Cmd+Enter -> Play audio pronunciation
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (currentCard) {
        speakKana(currentCard.char);
      }
      return;
    }

    // 2. Shortcut: Tab -> Reveal answer & log as weak spot / advance
    if (e.key === 'Tab') {
      e.preventDefault();
      if (isBlitzMode) {
        handleMistake();
        return;
      }
      if (feedbackState === 'idle' && currentCard) {
        handleMistake();
      } else if (feedbackState === 'mistake') {
        advanceAfterMistake();
      }
      return;
    }

    // 3. Enter/Space to advance after mistake
    if (feedbackState === 'mistake') {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advanceAfterMistake();
      }
      return;
    }

    // 4. Standard Enter submit
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!currentCard || inputValue.trim() === '') return;

      const valTrimmed = inputValue.trim();
      const isMatch =
        valTrimmed === currentCard.char ||
        currentCard.romajiAnswers.some(ans => ans.toLowerCase() === valTrimmed.toLowerCase());

      if (isMatch) {
        handleCorrect();
      } else {
        handleMistake();
      }
    }
  };

  // Virtual Keyboard Action Handlers (Static on-screen keyboard for mobile)
  const handleVirtualChar = useCallback(
    (char: string) => {
      if (!currentCard) return;

      // If user is currently viewing the mistake answer, tapping any letter advances
      if (feedbackState === 'mistake') {
        advanceAfterMistake();
        return;
      }

      if (feedbackState !== 'idle') return;

      const rawVal = inputValue + char;
      const nextVal =
        kanaConversion && currentCard
          ? romajiToKana(rawVal, currentCard.script, currentCard.char)
          : rawVal;
      setInputValue(nextVal);

      const valTrimmed = nextVal.trim();
      const isMatch =
        valTrimmed === currentCard.char ||
        currentCard.romajiAnswers.some(ans => ans.toLowerCase() === valTrimmed.toLowerCase());

      if (isMatch && autoAdvance) {
        handleCorrect();
      }
    },
    [currentCard, feedbackState, inputValue, kanaConversion, autoAdvance, handleCorrect, advanceAfterMistake]
  );

  const handleVirtualBackspace = useCallback(() => {
    if (feedbackState === 'mistake') {
      advanceAfterMistake();
      return;
    }
    if (feedbackState !== 'idle') return;
    setInputValue(prev => prev.slice(0, -1));
  }, [feedbackState, advanceAfterMistake]);

  const handleVirtualClear = useCallback(() => {
    if (feedbackState === 'mistake') {
      advanceAfterMistake();
      return;
    }
    setInputValue('');
  }, [feedbackState, advanceAfterMistake]);

  const handleVirtualSubmit = useCallback(() => {
    if (feedbackState === 'mistake') {
      advanceAfterMistake();
      return;
    }

    if (!currentCard || feedbackState !== 'idle' || inputValue.trim() === '') return;

    const valTrimmed = inputValue.trim();
    const isMatch =
      valTrimmed === currentCard.char ||
      currentCard.romajiAnswers.some(ans => ans.toLowerCase() === valTrimmed.toLowerCase());

    if (isMatch) {
      handleCorrect();
    } else {
      handleMistake();
    }
  }, [feedbackState, advanceAfterMistake, currentCard, inputValue, handleCorrect, handleMistake]);

  const handleVirtualSkip = useCallback(() => {
    if (isBlitzMode) {
      handleMistake();
      return;
    }
    if (feedbackState === 'idle' && currentCard) {
      handleMistake();
    } else if (feedbackState === 'mistake') {
      advanceAfterMistake();
    }
  }, [isBlitzMode, feedbackState, currentCard, handleMistake, advanceAfterMistake]);

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
      <div className="study-empty-layout">
        <div className="empty-zen-card">
          <div className="empty-zen-icon">
            <Sparkles size={32} className="text-accent" />
          </div>
          <h2 className="empty-zen-title">No Characters Selected</h2>
          <p className="empty-zen-subtitle">
            Choose which Kana you want to drill by selecting rows or columns in Hiragana and Katakana.
          </p>

          <div className="empty-quick-decks">
            <span className="quick-decks-label">Recommended Quick Decks:</span>
            <div className="quick-decks-grid">
              {weakSpotsCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    drillWeakSpots();
                    startSession();
                  }}
                  className="quick-deck-btn btn-flame"
                >
                  <Flame size={15} />
                  <span>Drill Weak Spots ({weakSpotsCount})</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  toggleColumn('hiragana', 'single', 0);
                  startSession();
                }}
                className="quick-deck-btn"
              >
                <span>Hiragana Vowels (あ, い, う, え, お)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  hiraganaSingleColumns.slice(0, 5).forEach(c => toggleColumn('hiragana', 'single', c.columnIdx));
                  startSession();
                }}
                className="quick-deck-btn"
              >
                <span>Hiragana First 5 Rows (a to na)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  katakanaSingleColumns.slice(0, 5).forEach(c => toggleColumn('katakana', 'single', c.columnIdx));
                  startSession();
                }}
                className="quick-deck-btn"
              >
                <span>Katakana First 5 Rows (ア to ナ)</span>
              </button>
            </div>
          </div>

          <div className="empty-actions-row">
            <button type="button" onClick={() => onGoToTab('hiragana')} className="empty-nav-action-btn">
              Explore Hiragana
            </button>
            <button type="button" onClick={() => onGoToTab('katakana')} className="empty-nav-action-btn">
              Explore Katakana
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
      <div className="study-completed-layout">
        <div className="completed-zen-card">
          <div className="completed-zen-icon">
            <CheckCircle2 size={48} className="text-success" />
          </div>
          <h2 className="completed-zen-title">Deck Mastered!</h2>
          <p className="completed-zen-subtitle">All selected characters reviewed with precision.</p>

          <div className="completed-metrics-grid">
            <div className="metric-zen-box">
              <span className="metric-val">{correctCount}</span>
              <span className="metric-label">Cards Solved</span>
            </div>
            <div className="metric-zen-box">
              <span className="metric-val">{accuracy}%</span>
              <span className="metric-label">Accuracy</span>
            </div>
            <div className="metric-zen-box">
              <span className="metric-val">{bestStreak} 🔥</span>
              <span className="metric-label">Best Streak</span>
            </div>
          </div>

          <div className="completed-actions-row">
            <button type="button" onClick={startSession} className="primary-zen-btn">
              <RotateCcw size={16} />
              <span>Drill Again</span>
            </button>
            <button type="button" onClick={() => onGoToTab('hiragana')} className="secondary-zen-btn">
              Pick New Cards
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Progress metrics
  const totalCards = deck.length;
  const progressPercent = totalCards > 0 ? Math.round((currentIndex / totalCards) * 100) : 0;
  const accuracy =
    correctCount + mistakeCount > 0
      ? Math.round((correctCount / (correctCount + mistakeCount)) * 100)
      : 100;

  return (
    <div className={`study-zen-layout ${isBlitzMode ? 'mode-blitz' : ''}`}>
      {/* Top Floating HUD Bar */}
      {isBlitzMode ? (
        <div className="study-hud-bar blitz-active-hud">
          <div className="hud-pill-group">
            <span className="blitz-lightning-badge">
              <Zap size={14} /> 60s BLITZ
            </span>
            <span className="blitz-score-chip">
              Score: <strong>{blitzScore}</strong>
            </span>
          </div>

          <div className="hud-pill-group">
            <div className={`blitz-countdown-pill ${blitzTimeLeft <= 10 ? 'is-critical' : ''}`}>
              <Timer size={15} />
              <span>{blitzTimeLeft}s</span>
            </div>

            <button type="button" onClick={exitBlitz} className="blitz-quit-pill" title="Exit Blitz Mode">
              <X size={14} />
              <span>Exit</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="study-hud-bar">
          {/* Progress Section */}
          <div className="hud-progress-section">
            <button
              type="button"
              onClick={() => onGoToTab(currentCard?.script || 'hiragana')}
              className="hud-back-btn"
              title="Return to Kana Decks"
              aria-label="Return to Kana Decks"
            >
              <ArrowLeft size={14} />
              <span className="hud-back-btn-text">Decks</span>
            </button>
            <span className="hud-step-tag">
              <span className="step-tag-desktop">Card <strong>{currentIndex + 1}</strong> of {totalCards}</span>
              <span className="step-tag-mobile"><strong>{currentIndex + 1}</strong>/{totalCards}</span>
            </span>
            <div className="hud-slim-progress-track">
              <div className="hud-slim-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          {/* Dedicated Standalone 60s Blitz Mode Button (Laptop & Mobile) */}
          <button
            type="button"
            onClick={startBlitz}
            className="hud-standalone-blitz-btn"
            title="Start 60-Second Speed Blitz drill"
          >
            <Zap size={13} className="text-gold" />
            <span className="blitz-label-text">Blitz</span>
            <span className="blitz-sub-pill">60s</span>
          </button>

          {/* Quick Controls Section */}
          <div className="hud-controls-section">
            {/* Weak Spots Button */}
            {weakSpotsCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  drillWeakSpots();
                  startSession();
                }}
                className="hud-action-pill weak-spots-pill"
                title="Drill only characters you struggled with"
              >
                <Flame size={13} className="text-flame" />
                <span>Weak Spots ({weakSpotsCount})</span>
              </button>
            )}

            {/* Streak & Accuracy */}
            <div className="hud-metric-chip" title="Current streak">
              <Flame size={14} className={streak > 0 ? 'text-flame' : 'text-subtle'} />
              <span>{streak}</span>
            </div>

            <div className="hud-metric-chip accuracy-chip" title="Accuracy">
              <span>{accuracy}%</span>
            </div>

            {/* Input IME Switcher */}
            <button
              type="button"
              onClick={() => setKanaConversion(!kanaConversion)}
              className={`hud-mode-pill ${kanaConversion ? 'ime-on' : ''}`}
              title={`Switch input mode: ${kanaConversion ? 'Kana IME Conversion' : 'Direct Rōmaji'}`}
              aria-label={`Switch input mode: ${kanaConversion ? 'Kana IME' : 'Rōmaji'}`}
            >
              <span className="ime-tag-desktop">{kanaConversion ? 'かな' : 'ROMAJI'}</span>
              <span className="ime-tag-mobile">{kanaConversion ? 'かな' : 'RO'}</span>
            </button>

            {/* Options Toggle */}
            <button
              type="button"
              onClick={() => setShowSettingsDrawer(prev => !prev)}
              className="hud-icon-pill"
              title="Study options"
              aria-label="Study options"
            >
              <Sliders size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Drawer: Settings Panel (Blitz mode is standalone, removed from here) */}
      {!isBlitzMode && showSettingsDrawer && (
        <div className="study-settings-drawer">
          <div className="drawer-row">
            <span>Auto-advance on match</span>
            <input
              type="checkbox"
              checked={autoAdvance}
              onChange={e => setAutoAdvance(e.target.checked)}
              className="drawer-toggle"
            />
          </div>
          <div className="drawer-row">
            <span>Kana conversion (on-the-fly IME)</span>
            <input
              type="checkbox"
              checked={kanaConversion}
              onChange={e => setKanaConversion(e.target.checked)}
              className="drawer-toggle"
            />
          </div>
          <div className="drawer-row">
            <span>Japanese Font</span>
            <select
              value={fontPreference}
              onChange={e => setFontPreference(e.target.value as any)}
              className="drawer-select"
            >
              <option value="gothic">Gothic (Standard Sans)</option>
              <option value="mincho">Mincho (Traditional Serif)</option>
              <option value="hand">Klee (Handwritten Brush)</option>
            </select>
          </div>
          {weakSpotsCount > 0 && (
            <div className="drawer-actions-grid">
              <button
                type="button"
                onClick={() => {
                  setShowSettingsDrawer(false);
                  drillWeakSpots();
                  startSession();
                }}
                className="drawer-action-btn weak-btn"
              >
                <Flame size={14} className="text-flame" />
                <span>Drill Weak Spots ({weakSpotsCount})</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Central Flashcard Arena */}
      <div className="study-arena">
        {/* Centered Flashcard & Dynamic Response Group */}
        <div className="study-card-block">
          <div
            className={`study-flashcard-card ${
              feedbackState === 'correct' ? 'card-pass' : feedbackState === 'mistake' ? 'card-fail' : ''
            } script-${currentCard?.script}`}
          >
            {/* Card Meta Header */}
            <div className="card-meta-tags">
              <div className="meta-tags-left">
                <span className={`tag-script script-${currentCard?.script}`}>
                  {currentCard?.script.toUpperCase()}
                </span>
                <span className="tag-category">{currentCard?.category.toUpperCase()}</span>
              </div>

              {/* Dedicated Audio Listen Button in header */}
              <button
                type="button"
                onMouseDown={e => e.preventDefault()}
                onClick={() => currentCard && speakKana(currentCard.char)}
                className="card-audio-pill"
                title="Listen to Japanese pronunciation (Ctrl+Enter)"
                aria-label="Listen to Japanese pronunciation"
              >
                <Volume2 size={15} />
                <span className="audio-label">Listen</span>
              </button>
            </div>

            {/* Main Kana Glyph */}
            <div className={`card-glyph-hero ${fontClass}`}>
              {currentCard?.char}
            </div>

            {/* Calligraphic Stroke Order Animation directly under character */}
            {currentCard && (
              <div className="card-stroke-display">
                <ContinuousStrokeAnimation char={currentCard.char} />
              </div>
            )}
          </div>

          {/* Dynamic Response Field Dock */}
          <div className="study-response-dock">
            {feedbackState === 'mistake' && !isBlitzMode ? (
              <div className="mistake-alert-pill">
                <div className="mistake-info">
                  <XCircle size={18} className="text-danger" />
                  <div className="mistake-text-group">
                    <div className="mistake-main-ans">
                      Answer: <strong>{currentCard?.char} = {mistakeAnswer}</strong>
                      {currentCard?.romajiAnswers.length && currentCard.romajiAnswers.length > 1
                        ? ` (${currentCard.romajiAnswers.filter(a => a !== mistakeAnswer).join(', ')})`
                        : ''}
                    </div>
                    <span className="mistake-tip">Logged to Weak Spots • Tab or Enter to continue</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={advanceAfterMistake}
                  className="mistake-skip-pill"
                >
                  <span>Continue</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <div className="input-pill-wrapper">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isBlitzMode
                      ? kanaConversion
                        ? `⚡ Type in ${currentCard?.script === 'katakana' ? 'カタカナ' : 'かな'}...`
                        : '⚡ Quick rōmaji...'
                      : kanaConversion
                      ? `Type in rōmaji (converts to ${currentCard?.script === 'katakana' ? 'カタカナ' : 'かな'})...`
                      : 'Type the rōmaji equivalent...'
                  }
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  autoComplete="off"
                  readOnly={isMobile}
                  tabIndex={isMobile ? -1 : 0}
                  inputMode={isMobile ? 'none' : 'text'}
                  className="study-hero-input"
                />
              </div>
            )}
          </div>
        </div>

        {/* In-Page Virtual Keyboard (Permanent & static directly below card on mobile, 0 jumping) */}
        <VirtualKeyboard
          onChar={handleVirtualChar}
          onBackspace={handleVirtualBackspace}
          onClear={handleVirtualClear}
          onSubmit={handleVirtualSubmit}
          onSkip={handleVirtualSkip}
          feedbackState={feedbackState}
          isBlitzMode={isBlitzMode}
          script={currentCard?.script}
        />

        {/* Minimal Footer Shortcuts Hint Bar (Visible on desktop, hidden on mobile) */}
        <div className="study-shortcuts-footer">
          <div className="shortcuts-row">
            {isBlitzMode && (
              <>
                <span className="shortcut-tag blitz-tag">
                  <Zap size={12} /> Blitz Active
                </span>
                <span className="dot-sep">•</span>
              </>
            )}
            {kanaConversion && (
              <>
                <span className="shortcut-tag ime-tag">
                  IME: {currentCard?.script === 'katakana' ? 'カタカナ' : 'かな'}
                </span>
                <span className="dot-sep">•</span>
              </>
            )}
            <span className="shortcut-item">
              <kbd className="zen-kbd">Ctrl+Enter</kbd> Audio
            </span>
            <span className="dot-sep">•</span>
            <span className="shortcut-item">
              <kbd className="zen-kbd">Tab</kbd> {isBlitzMode ? 'Skip' : 'Reveal'}
            </span>
            <span className="dot-sep">•</span>
            <span className="shortcut-item">
              {autoAdvance ? 'Auto-advances' : 'Enter to Submit'}
            </span>
          </div>
        </div>
      </div>

      {/* 60s Blitz Results Modal */}
      {showBlitzSummary && (
        <div className="zen-modal-backdrop">
          <div className="zen-modal-sheet">
            <div className="zen-modal-badge-icon">
              {isNewHighScore ? (
                <Trophy size={42} className="text-gold" />
              ) : (
                <Zap size={42} className="text-gold" />
              )}
            </div>

            <h2 className="zen-modal-title">
              {isNewHighScore ? '🎉 New Personal Record!' : '⚡ 60s Blitz Finished!'}
            </h2>
            <p className="zen-modal-desc">
              {isNewHighScore
                ? `Incredible recall speed! You set a new all-time high with ${blitzScore} kana in 60s!`
                : 'Great speed drilling session! Keep the momentum going.'}
            </p>

            <div className="zen-metrics-row">
              <div className="zen-stat-box">
                <span className="stat-number">{blitzScore}</span>
                <span className="stat-caption">Solved</span>
              </div>
              <div className="zen-stat-box">
                <span className="stat-number">{blitzScore}</span>
                <span className="stat-caption">KPM (Speed)</span>
              </div>
              <div className="zen-stat-box">
                <span className="stat-number">
                  {blitzScore + blitzMistakes > 0
                    ? Math.round((blitzScore / (blitzScore + blitzMistakes)) * 100)
                    : 100}%
                </span>
                <span className="stat-caption">Accuracy</span>
              </div>
            </div>

            <div className="zen-record-banner">
              <Trophy size={15} className="text-gold" />
              <span>All-Time Record: <strong>{blitzHighScore}</strong> kana / min</span>
            </div>

            <div className="zen-modal-buttons">
              <button
                type="button"
                onClick={startBlitz}
                className="zen-primary-action-btn"
              >
                <Zap size={15} />
                <span>Play Again</span>
              </button>
              <button
                type="button"
                onClick={exitBlitz}
                className="zen-secondary-action-btn"
              >
                Return to Normal Drill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
