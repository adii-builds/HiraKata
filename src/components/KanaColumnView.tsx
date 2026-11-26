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

  const headerStatusClass =
    colStatus === 'all' ? 'header-all' : colStatus === 'some' ? 'header-some' : '';

  return (
    <div className="kana-column">
      <button
        type="button"
        onClick={() => toggleColumn(column.script, column.category, column.columnIdx)}
        className={`column-header-btn ${headerStatusClass}`}
        title={`Toggle column ${column.headerLabel}`}
        aria-label={`Toggle column ${column.headerLabel}`}
      >
        <span className="column-label">{column.headerLabel}</span>
      </button>

      <div className="column-items">
        {column.items.map(item => (
          <KanaTile key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
