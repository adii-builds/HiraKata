import React, { useState } from 'react';
import {
  ScriptType,
  CategoryType,
  hiraganaSingleColumns,
  hiraganaDoubleColumns,
  katakanaSingleColumns,
  katakanaDoubleColumns,
  katakanaExtendedColumns,
} from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';
import { KanaColumnView } from './KanaColumnView';
import { CheckCheck, Sparkles } from 'lucide-react';

interface KanaGridViewProps {
  script: ScriptType;
}

export const KanaGridView: React.FC<KanaGridViewProps> = ({ script }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('single');
  const { toggleCategory, isCategorySelected, toggleScript, isScriptSelected, counts } = useKanaStore();

  const categories: { key: CategoryType; label: string; count: number }[] =
    script === 'hiragana'
      ? [
          { key: 'single', label: 'Basic (Gojūon)', count: 71 },
          { key: 'double', label: 'Combos (Yōon)', count: 36 },
        ]
      : [
          { key: 'single', label: 'Basic (Gojūon)', count: 71 },
          { key: 'double', label: 'Combos (Yōon)', count: 36 },
          { key: 'extended', label: 'Extended Loanwords', count: 30 },
        ];

  const activeColumns =
    script === 'hiragana'
      ? activeCategory === 'single'
        ? hiraganaSingleColumns
        : hiraganaDoubleColumns
      : activeCategory === 'single'
      ? katakanaSingleColumns
      : activeCategory === 'double'
      ? katakanaDoubleColumns
      : katakanaExtendedColumns;

  const catStatus = isCategorySelected(script, activeCategory);
  const scriptStatus = isScriptSelected(script);
  const scriptCount = script === 'hiragana' ? counts.hiragana : counts.katakana;
  const scriptTotal = script === 'hiragana' ? 107 : 137;

  return (
    <div className={`kana-grid-layout script-${script}`}>
      {/* Top Banner Toolbar */}
      <div className="kana-grid-header">
        <div className="header-meta">
          <div className="meta-left">
            <h1 className="script-title">
              {script === 'hiragana' ? 'Hiragana' : 'Katakana'}
              <span className="script-kanji">{script === 'hiragana' ? '平仮名' : '片仮名'}</span>
            </h1>
            <span className="script-count-chip">
              <strong>{scriptCount}</strong> / {scriptTotal} selected
            </span>
          </div>

          {/* Quick Selection Actions */}
          <div className="meta-actions">
            <button
              type="button"
              onClick={() => toggleCategory(script, activeCategory)}
              className={`pill-action-btn ${catStatus === 'all' ? 'pill-active' : ''}`}
            >
              <CheckCheck size={14} />
              <span>{catStatus === 'all' ? 'Deselect Tab' : 'Select Tab'}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleScript(script)}
              className={`pill-action-btn ${scriptStatus === 'all' ? 'pill-active' : ''}`}
            >
              <Sparkles size={14} />
              <span>{scriptStatus === 'all' ? 'Clear Script' : 'Select All'}</span>
            </button>
          </div>
        </div>

        {/* Category Segmented Filter Tabs */}
        <div className="category-segmented-bar">
          {categories.map(cat => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`category-pill-tab ${activeCategory === cat.key ? 'is-active' : ''}`}
            >
              <span>{cat.label}</span>
              <span className="cat-count-bubble">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Kana Columns Decks Matrix */}
      <div className="kana-decks-viewport">
        <div className="kana-decks-container">
          {activeColumns.map(col => (
            <KanaColumnView key={`${col.script}-${col.category}-${col.columnIdx}`} column={col} />
          ))}
        </div>
      </div>
    </div>
  );
};
