import React, { useState } from 'react';
import { KanaProvider, useKanaStore } from './store/useKanaStore';
import { Navbar, MainTab } from './components/Navbar';
import { KanaGridView } from './components/KanaGridView';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>('hiragana');
  const { counts } = useKanaStore();

  return (
    <div className="app-container">
      <Navbar currentTab={currentTab} onSelectTab={setCurrentTab} />

      <main className="app-main">
        {currentTab === 'hiragana' && <KanaGridView script="hiragana" />}
        {currentTab === 'katakana' && <KanaGridView script="katakana" />}
        {currentTab === 'study' && (
          <div className="study-placeholder" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
            <h2>Study Mode (Phase 4)</h2>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
              Currently selected: <strong>{counts.total}</strong> characters (
              {counts.hiragana} Hiragana, {counts.katakana} Katakana).
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <KanaProvider>
      <MainContent />
    </KanaProvider>
  );
}
