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
import { CheckSquare, Square, MinusSquare } from 'lucide-react';

interface KanaGridViewProps {
  script: ScriptType;
}

export const KanaGridView: React.FC<KanaGridViewProps> = ({ script }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('single');
  const { toggleCategory, isCategorySelected, toggleScript, isScriptSelected, counts } = useKanaStore();

  const categories: { key: CategoryType; label: string; shortLabel: string }[] =
    script === 'hiragana'
      ? [
          { key: 'single', label: 'Single Characters', shortLabel: 'Single' },
          { key: 'double', label: 'Double Characters', shortLabel: 'Double' },
        ]
      : [
          { key: 'single', label: 'Single Characters', shortLabel: 'Single' },
          { key: 'double', label: 'Double Characters', shortLabel: 'Double' },
          { key: 'extended', label: 'Extended Characters', shortLabel: 'Extended' },
        ];

  // Active columns
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

  return (
    <div className="kana-view-container">
      {/* Sub-navigation tabs */}
      <div className="subnav-bar">
        <div className="subnav-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`subnav-tab ${activeCategory === cat.key ? 'active' : ''}`}
            >
              <span className="tab-label-full">{cat.label}</span>
              <span className="tab-label-short">{cat.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* Action buttons: Toggle Category & Toggle Script */}
        <div className="subnav-actions">
          <button
            type="button"
            onClick={() => toggleCategory(script, activeCategory)}
            className="action-pill-btn"
            title={`Toggle all in ${categories.find(c => c.key === activeCategory)?.label}`}
          >
            {catStatus === 'all' ? (
              <CheckSquare size={16} className="text-accent" />
            ) : catStatus === 'some' ? (
              <MinusSquare size={16} className="text-accent" />
            ) : (
              <Square size={16} />
            )}
            <span>This Tab</span>
          </button>

          <button
            type="button"
            onClick={() => toggleScript(script)}
            className="action-pill-btn"
            title={`Toggle all ${script}`}
          >
            {scriptStatus === 'all' ? (
              <CheckSquare size={16} className="text-accent" />
            ) : scriptStatus === 'some' ? (
              <MinusSquare size={16} className="text-accent" />
            ) : (
              <Square size={16} />
            )}
            <span className="btn-label-full">All {script === 'hiragana' ? 'Hiragana' : 'Katakana'} ({scriptCount})</span>
            <span className="btn-label-short">All ({scriptCount})</span>
          </button>
        </div>
      </div>

      {/* Grid Table */}
      <div className="kana-grid-scroll-wrapper">
        <div className="kana-grid-columns">
          {activeColumns.map(column => (
            <KanaColumnView key={`${column.script}-${column.category}-${column.columnIdx}`} column={column} />
          ))}
        </div>
      </div>
    </div>
  );
};
