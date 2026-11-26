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

    if ('virtualKeyboard' in navigator) {
      try {
        (navigator as any).virtualKeyboard.overlaysContent = false;
      } catch {
        // Ignore if read-only or unsupported
      }
    }

    let baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
    let lastWidth = window.innerWidth;

    const checkKeyboardState = () => {
      // Handle screen orientation rotation
      if (Math.abs(window.innerWidth - lastWidth) > 80) {
        lastWidth = window.innerWidth;
        baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
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
        document.documentElement.style.setProperty('--study-viewport-height', `${currentHeight}px`);
      } else {
        document.documentElement.style.removeProperty('--study-viewport-height');
        const isInput =
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement;
        if (!isInput || vkHeight === 0) {
          document.body.classList.remove('keyboard-visible');
        }
      }
    };

    // Pre-emptively tuck dock the instant the input is tapped, BEFORE viewport shrinks
    const onFocusIn = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        document.body.classList.add('keyboard-visible');
        setTimeout(checkKeyboardState, 150);
        setTimeout(checkKeyboardState, 350);
      }
    };

    const onFocusOut = () => {
      setTimeout(() => {
        const isInput =
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement;
        if (!isInput) {
          document.body.classList.remove('keyboard-visible');
          document.documentElement.style.removeProperty('--study-viewport-height');
        }
      }, 60);
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
    document.addEventListener('focusout', onFocusOut);

    return () => {
      if (vk) {
        vk.removeEventListener('geometrychange', checkKeyboardState);
      }
      window.visualViewport?.removeEventListener('resize', checkKeyboardState);
      window.removeEventListener('resize', checkKeyboardState);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
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
