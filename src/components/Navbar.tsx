import React from 'react';
import { useKanaStore, FontPreference } from '../store/useKanaStore';
import { Moon, Sun, Type, Trash2, BookOpen } from 'lucide-react';

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

  const fontLabel: Record<FontPreference, string> = {
    gothic: 'Gothic (Sans)',
    mincho: 'Mincho (Serif)',
    hand: 'Klee (Brush)',
  };

  return (
    <header className="app-navbar">
      <div className="navbar-left">
        <div className="logo-brand">
          <span className="logo-kana">平片</span>
          <span className="logo-title">HiraKata</span>
        </div>

        <nav className="main-tabs" aria-label="Main Navigation">
          <button
            type="button"
            onClick={() => onSelectTab('hiragana')}
            className={`main-tab-btn ${currentTab === 'hiragana' ? 'active' : ''}`}
          >
            <span>Hiragana</span>
            {counts.hiragana > 0 && <span className="tab-badge">{counts.hiragana}</span>}
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('katakana')}
            className={`main-tab-btn ${currentTab === 'katakana' ? 'active' : ''}`}
          >
            <span>Katakana</span>
            {counts.katakana > 0 && <span className="tab-badge">{counts.katakana}</span>}
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('study')}
            className={`main-tab-btn study-btn ${currentTab === 'study' ? 'active' : ''} ${
              counts.total > 0 ? 'has-cards' : ''
            }`}
          >
            <BookOpen size={15} />
            <span>Study</span>
            <span className="tab-badge total-badge">{counts.total}</span>
          </button>
        </nav>
      </div>

      <div className="navbar-right">
        {/* Font cycle button */}
        <button
          type="button"
          onClick={cycleFont}
          className="nav-icon-btn"
          title={`Font: ${fontLabel[fontPreference]} (Click to change)`}
          aria-label="Change Japanese Font"
        >
          <Type size={16} />
          <span className="btn-label-desktop">{fontLabel[fontPreference].split(' ')[0]}</span>
        </button>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === 'cool' ? 'dark' : 'cool')}
          className="nav-icon-btn"
          title={`Switch to ${theme === 'cool' ? 'Dark' : 'Light'} theme`}
          aria-label="Toggle Theme"
        >
          {theme === 'cool' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* Clear selection */}
        {counts.total > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="nav-icon-btn text-muted hover-danger"
            title="Deselect all characters"
            aria-label="Clear All Selection"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </header>
  );
};
