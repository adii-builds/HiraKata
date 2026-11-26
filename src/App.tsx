import React, { useState, useEffect } from 'react';
import { KanaProvider } from './store/useKanaStore';
import { Navbar, MainTab } from './components/Navbar';
import { KanaGridView } from './components/KanaGridView';
import { StudyView } from './components/StudyView';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>('hiragana');

  // Smart mobile virtual keyboard listener that auto-tucks the bottom dock
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
    let lastWidth = window.innerWidth;
    let wasFullyOpen = false;

    const checkKeyboardState = () => {
      // Handle screen orientation rotation
      if (Math.abs(window.innerWidth - lastWidth) > 80) {
        lastWidth = window.innerWidth;
        baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
        wasFullyOpen = false;
      } else {
        // Expand baseHeight if screen grew larger
        const h = Math.max(window.innerHeight, window.visualViewport?.height || 0);
        if (h > baseHeight) {
          baseHeight = h;
        }
      }

      // Check current visible height
      const currentHeight = window.visualViewport?.height ?? window.innerHeight;
      const heightDeficit = baseHeight - currentHeight;

      // Check Chromium virtualKeyboard API if present
      let vkHeight = 0;
      if ('virtualKeyboard' in navigator && (navigator as any).virtualKeyboard?.boundingRect) {
        vkHeight = (navigator as any).virtualKeyboard.boundingRect.height || 0;
      }

      // Keyboard is physically open if height shrunk by > 80px or virtualKeyboard reports height
      const isKeyboardOpen = heightDeficit > 80 || vkHeight > 50;

      if (isKeyboardOpen) {
        document.body.classList.add('keyboard-visible');
        if (heightDeficit > 150 || vkHeight > 100) {
          wasFullyOpen = true;
        }
      } else {
        document.body.classList.remove('keyboard-visible');

        // Only blur if the keyboard was fully open and has now just been closed (e.g. Back button)
        if (wasFullyOpen) {
          wasFullyOpen = false;
          if (
            document.activeElement instanceof HTMLInputElement ||
            document.activeElement instanceof HTMLTextAreaElement
          ) {
            document.activeElement.blur();
          }
        }
      }
    };

    // Pre-emptively tuck dock the instant the input is tapped, BEFORE viewport shrinks
    const onFocusIn = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        document.body.classList.add('keyboard-visible');
      }
    };

    const vk = (navigator as any).virtualKeyboard;
    if (vk) {
      vk.addEventListener('geometrychange', checkKeyboardState);
    }
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', checkKeyboardState);
    }
    window.addEventListener('resize', checkKeyboardState);
    document.addEventListener('focusin', onFocusIn);

    return () => {
      if (vk) {
        vk.removeEventListener('geometrychange', checkKeyboardState);
      }
      window.visualViewport?.removeEventListener('resize', checkKeyboardState);
      window.removeEventListener('resize', checkKeyboardState);
      document.removeEventListener('focusin', onFocusIn);
    };
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
