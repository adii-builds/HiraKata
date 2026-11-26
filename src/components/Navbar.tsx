import React from 'react';
import { useKanaStore, FontPreference } from '../store/useKanaStore';
import { Moon, Sun, Type, Trash2, Sparkles } from 'lucide-react';

export type MainTab = 'hiragana' | 'katakana' | 'study';

interface NavbarProps {
  currentTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const { counts, fontPreference, setFontPreference, theme, setTheme, clearAll } = useKanaStore();

  const cycleFont = () => {
    const nextFont: Record<FontPreference, FontPreference> = {
      gothic: 'mincho',
      mincho: 'hand',
      hand: 'gothic',
    };
    setFontPreference(nextFont[fontPreference]);
  };

  const fontLabel: Record<FontPreference, { name: string; style: string }> = {
    gothic: { name: 'Gothic', style: 'Sans' },
    mincho: { name: 'Mincho', style: 'Serif' },
    hand: { name: 'Klee', style: 'Brush' },
  };

  return (
    <>
      {/* Top Application Header */}
      <header className={`app-top-header ${currentTab === 'study' ? 'is-study-mode' : ''}`}>
        <div className="header-inner">
          {/* Brand Logo */}
          <div className="brand-group" onClick={() => onSelectTab('hiragana')}>
            <div className="brand-emblem">
              <span>平片</span>
            </div>
            <div className="brand-text">
              <span className="brand-title">HiraKata</span>
              <span className="brand-subtitle">ひらかた</span>
            </div>
          </div>

          {/* Desktop Central Navigation (Hidden on mobile) */}
          <nav className="desktop-nav-tabs" aria-label="Main Navigation">
            <button
              type="button"
              onClick={() => onSelectTab('hiragana')}
              className={`nav-tab-pill ${currentTab === 'hiragana' ? 'active-hira' : ''}`}
            >
              <span>Hiragana</span>
              {counts.hiragana > 0 && <span className="tab-counter-badge hira-badge">{counts.hiragana}</span>}
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('katakana')}
              className={`nav-tab-pill ${currentTab === 'katakana' ? 'active-kata' : ''}`}
            >
              <span>Katakana</span>
              {counts.katakana > 0 && <span className="tab-counter-badge kata-badge">{counts.katakana}</span>}
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('study')}
              className={`nav-tab-pill study-pill ${currentTab === 'study' ? 'active-study' : ''} ${
                counts.total > 0 ? 'pulse-ready' : ''
              }`}
            >
              <Sparkles size={14} className="study-sparkle-icon" />
              <span>Study</span>
              <span className="tab-counter-badge study-badge">{counts.total}</span>
            </button>
          </nav>

          {/* Utility Toolbar */}
          <div className="header-actions">
            {/* Font selector pill */}
            <button
              type="button"
              onClick={cycleFont}
              className="action-icon-pill"
              title={`Active Font: ${fontLabel[fontPreference].name} (${fontLabel[fontPreference].style}). Click to switch.`}
              aria-label="Switch Japanese Font"
            >
              <Type size={16} />
              <span className="font-active-tag">{fontLabel[fontPreference].name}</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              type="button"
              onClick={() => setTheme(theme === 'cool' ? 'dark' : 'cool')}
              className="action-icon-pill"
              title={`Switch to ${theme === 'cool' ? 'Dark' : 'Light'} theme`}
              aria-label="Toggle Theme"
            >
              {theme === 'cool' ? <Moon size={16} /> : <Sun size={16} className="sun-icon-active" />}
            </button>

            {/* Quick Clear Selection */}
            {counts.total > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="action-icon-pill clear-btn"
                title={`Deselect all ${counts.total} characters`}
                aria-label="Deselect all characters"
              >
                <Trash2 size={15} />
                <span className="clear-count-tag">{counts.total}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Floating Navigation Dock (Visible on Mobile only) */}
      <nav className="mobile-bottom-dock" aria-label="Mobile Navigation">
        <div className="dock-content">
          <button
            type="button"
            onClick={() => onSelectTab('hiragana')}
            className={`dock-tab ${currentTab === 'hiragana' ? 'active-hira' : ''}`}
          >
            <div className="dock-icon-wrapper">
              <span className="dock-kana-icon">あ</span>
              {counts.hiragana > 0 && <span className="dock-badge hira-badge">{counts.hiragana}</span>}
            </div>
            <span className="dock-label">Hiragana</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('katakana')}
            className={`dock-tab ${currentTab === 'katakana' ? 'active-kata' : ''}`}
          >
            <div className="dock-icon-wrapper">
              <span className="dock-kana-icon">ア</span>
              {counts.katakana > 0 && <span className="dock-badge kata-badge">{counts.katakana}</span>}
            </div>
            <span className="dock-label">Katakana</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('study')}
            className={`dock-tab dock-study-btn ${currentTab === 'study' ? 'active-study' : ''} ${
              counts.total > 0 ? 'ready' : ''
            }`}
          >
            <div className="dock-study-pill">
              <Sparkles size={18} />
              <span className="dock-study-label">Drill</span>
              <span className="dock-study-counter">{counts.total}</span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};
