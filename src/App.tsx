import React, { useState, useEffect } from 'react';
import { KanaProvider } from './store/useKanaStore';
import { Navbar, MainTab } from './components/Navbar';
import { KanaGridView } from './components/KanaGridView';
import { StudyView } from './components/StudyView';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>('hiragana');

  // Intelligent mobile virtual keyboard listener with auto-dock tuck/restore
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
    let lastWidth = window.innerWidth;
    let wasKeyboardOpen = false;

    const isKeyboardActive = (): boolean => {
      // 1. Check navigator.virtualKeyboard API if available (Chromium / Android WebAPK)
      if ('virtualKeyboard' in navigator && (navigator as any).virtualKeyboard?.boundingRect) {
        const vkHeight = (navigator as any).virtualKeyboard.boundingRect.height;
        if (typeof vkHeight === 'number') {
          return vkHeight > 0;
        }
      }

      // 2. Viewport height deficit against baseline height (handles Android resize)
      const currentHeight = window.visualViewport?.height ?? window.innerHeight;
      return (baseHeight - currentHeight) > 120;
    };

    const updateKeyboardState = () => {
      // Handle screen orientation rotation
      if (Math.abs(window.innerWidth - lastWidth) > 80) {
        lastWidth = window.innerWidth;
        baseHeight = Math.max(window.innerHeight, window.visualViewport?.height || 0);
      } else {
        const isInputFocused =
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement;
        // Keep baseHeight calibrated to full-screen when no input is focused
        if (!isInputFocused && window.innerHeight > baseHeight) {
          baseHeight = window.innerHeight;
        }
      }

      const active = isKeyboardActive();

      if (active) {
        wasKeyboardOpen = true;
        document.body.classList.add('keyboard-visible');
      } else {
        document.body.classList.remove('keyboard-visible');

        // If keyboard was previously active and now dismissed (e.g. Android Back button or gesture),
        // blur lingering input so bottom bar instantly re-appears without requiring any touch
        if (wasKeyboardOpen) {
          wasKeyboardOpen = false;
          if (
            document.activeElement instanceof HTMLInputElement ||
            document.activeElement instanceof HTMLTextAreaElement
          ) {
            document.activeElement.blur();
          }
        }
      }
    };

    // Immediate reaction on focusin/focusout
    const onFocusIn = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        document.body.classList.add('keyboard-visible');
        wasKeyboardOpen = true;
      }
    };

    const onFocusOut = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        setTimeout(updateKeyboardState, 100);
      }
    };

    const onResize = () => {
      updateKeyboardState();
    };

    const vk = (navigator as any).virtualKeyboard;
    if (vk) {
      vk.addEventListener('geometrychange', onResize);
    }
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize);
    }
    window.addEventListener('resize', onResize);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      if (vk) {
        vk.removeEventListener('geometrychange', onResize);
      }
      window.visualViewport?.removeEventListener('resize', onResize);
      window.removeEventListener('resize', onResize);
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
