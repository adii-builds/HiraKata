import React from 'react';
import { KanaColumn } from '../data/kanaData';
import { useKanaStore } from '../store/useKanaStore';
import { KanaTile } from './KanaTile';

interface KanaColumnViewProps {
  column: KanaColumn;
}

export const KanaColumnView: React.FC<KanaColumnViewProps> = ({ column }) => {
  const { toggleColumn, isColumnSelected } = useKanaStore();
  const colStatus = isColumnSelected(column.script, column.category, column.columnIdx);

  const statusClass =
    colStatus === 'all' ? 'col-all-selected' : colStatus === 'some' ? 'col-some-selected' : 'col-none-selected';

  return (
    <div className={`kana-column-deck script-${column.script}`}>
      {/* Column Toggle Header */}
      <button
        type="button"
        onClick={() => toggleColumn(column.script, column.category, column.columnIdx)}
        className={`column-deck-header ${statusClass}`}
        title={`Toggle column ${column.headerLabel}`}
        aria-label={`Toggle column ${column.headerLabel}`}
      >
        <span className="deck-header-label">{column.headerLabel}</span>
      </button>

      {/* Tiles in Column */}
      <div className="column-deck-tiles">
        {column.items.map(item => (
          <KanaTile key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
