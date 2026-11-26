import React from 'react';
import { KanaItem } from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';

interface KanaTileProps {
  item: KanaItem;
}

export const KanaTile: React.FC<KanaTileProps> = ({ item }) => {
  const { selectedIds, toggleKana, fontPreference } = useKanaStore();
  const isSelected = selectedIds.has(item.id);

  // Font class mapping
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
      className={`kana-tile ${isSelected ? 'selected' : ''}`}
      aria-pressed={isSelected}
      aria-label={`${item.char} (${item.displayRomaji})`}
    >
      <span className={`kana-char ${fontClass}`}>{item.char}</span>
      <span className="kana-romaji">{item.displayRomaji}</span>
    </button>
  );
};
