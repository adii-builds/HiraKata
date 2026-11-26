import React from 'react';
import { KanaItem } from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';

interface KanaTileProps {
  item: KanaItem;
}

export const KanaTile: React.FC<KanaTileProps> = ({ item }) => {
  const { selectedIds, toggleKana, fontPreference } = useKanaStore();
  const isSelected = selectedIds.has(item.id);

  const fontClass =
    fontPreference === 'mincho'
      ? 'font-mincho'
      : fontPreference === 'hand'
      ? 'font-hand'
      : 'font-gothic';

  return (
    <button
      type="button"
      onClick={() => toggleKana(item.id)}
      className={`kana-card-tile ${isSelected ? 'is-selected' : ''} script-${item.script}`}
      aria-pressed={isSelected}
      aria-label={`${item.char} (${item.displayRomaji})`}
    >
      <div className="tile-inner">
        <span className={`tile-kana ${fontClass}`}>{item.char}</span>
        <span className="tile-romaji">{item.displayRomaji}</span>
      </div>
      {isSelected && <div className="tile-selection-indicator" />}
    </button>
  );
};
