import React, { useState } from 'react';
import { KanaProvider } from './store/useKanaStore';
import { Navbar, MainTab } from './components/Navbar';
import { KanaGridView } from './components/KanaGridView';
import { StudyView } from './components/StudyView';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MainTab>('hiragana');

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
