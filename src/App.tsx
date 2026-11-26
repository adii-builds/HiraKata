import React, { useState, useEffect } from 'react';
import { KanaProvider } from './store/useKanaStore';
import { Navbar, MainTab } from './components/Navbar';
import { KanaGridView } from './components/KanaGridView';
import { StudyView } from './components/StudyView';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>('hiragana');

  // Intelligent mobile virtual keyboard listener using window.visualViewport
  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const handleResize = () => {
      const vp = window.visualViewport;
      if (!vp) return;
      // When visual viewport height is significantly less than window height, keyboard is open
      const isKeyboardOpen = vp.height < window.innerHeight * 0.78;

      if (isKeyboardOpen) {
        document.body.classList.add('keyboard-visible');
      } else {
        document.body.classList.remove('keyboard-visible');
        // When user dismissed keyboard via back button/gesture, blur lingering input focus
        if (document.activeElement instanceof HTMLInputElement) {
          document.activeElement.blur();
        }
      }
    };

    window.visualViewport.addEventListener('resize', handleResize);
    return () => window.visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <Navbar currentTab={currentTab} onSelectTab={setCurrentTab} />

      <main className="app-main">
        {currentTab === 'hiragana' && <KanaGridView script="hiragana" />}
        {currentTab === 'katakana' && <KanaGridView script="katakana" />}
        {currentTab === 'study' && <StudyView onGoToTab={tab => setCurrentTab(tab)} />}
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
