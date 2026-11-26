import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  KanaItem,
  ScriptType,
  CategoryType,
  allKanaItems,
  kanaMap,
  hiraganaSingleColumns,
  hiraganaDoubleColumns,
  katakanaSingleColumns,
  katakanaDoubleColumns,
  katakanaExtendedColumns,
} from '../data/kanaData';

export type FontPreference = 'gothic' | 'mincho' | 'hand';
export type ThemePreference = 'cool' | 'dark';

interface KanaStoreContextType {
  selectedIds: Set<string>;
  toggleKana: (id: string) => void;
  toggleColumn: (script: ScriptType, category: CategoryType, columnIdx: number) => void;
  isColumnSelected: (script: ScriptType, category: CategoryType, columnIdx: number) => 'all' | 'some' | 'none';
  toggleCategory: (script: ScriptType, category: CategoryType) => void;
  isCategorySelected: (script: ScriptType, category: CategoryType) => 'all' | 'some' | 'none';
  toggleScript: (script: ScriptType) => void;
  isScriptSelected: (script: ScriptType) => 'all' | 'some' | 'none';
  selectAll: () => void;
  clearAll: () => void;
  selectedItems: KanaItem[];
  counts: {
    total: number;
    hiragana: number;
    katakana: number;
  };
  // Study Options
  autoAdvance: boolean;
  setAutoAdvance: (val: boolean) => void;
  fontPreference: FontPreference;
  setFontPreference: (font: FontPreference) => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

const STORAGE_KEY_SELECTION = 'hirakata_selected_ids_v1';
const STORAGE_KEY_AUTO_ADVANCE = 'hirakata_auto_advance';
const STORAGE_KEY_FONT = 'hirakata_font_pref';
const STORAGE_KEY_AUDIO = 'hirakata_audio_enabled';
const STORAGE_KEY_THEME = 'hirakata_theme';

// Preselect Hiragana 'a' column on very first visit
const DEFAULT_PRESELECTED_IDS = hiraganaSingleColumns[0].items.map(item => item.id);

const KanaContext = createContext<KanaStoreContextType | null>(null);

export const KanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial selections from localStorage
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SELECTION);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return new Set<string>(parsed);
        }
      }
    } catch {
      // ignore
    }
    return new Set<string>(DEFAULT_PRESELECTED_IDS);
  });

  // Settings
  const [autoAdvance, setAutoAdvanceState] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY_AUTO_ADVANCE) !== 'false';
  });

  const [fontPreference, setFontPreferenceState] = useState<FontPreference>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FONT) as FontPreference;
    return saved === 'mincho' || saved === 'hand' ? saved : 'gothic';
  });

  const [audioEnabled, setAudioEnabledState] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY_AUDIO) !== 'false';
  });

  const [theme, setThemeState] = useState<ThemePreference>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved === 'dark' || saved === 'cool') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'cool';
  });

  // Persist selections
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SELECTION, JSON.stringify(Array.from(selectedIds)));
    } catch {
      // ignore
    }
  }, [selectedIds]);

  // Sync theme attribute to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  const setAutoAdvance = (val: boolean) => {
    setAutoAdvanceState(val);
    localStorage.setItem(STORAGE_KEY_AUTO_ADVANCE, String(val));
  };

  const setFontPreference = (font: FontPreference) => {
    setFontPreferenceState(font);
    localStorage.setItem(STORAGE_KEY_FONT, font);
  };

  const setAudioEnabled = (val: boolean) => {
    setAudioEnabledState(val);
    localStorage.setItem(STORAGE_KEY_AUDIO, String(val));
  };

  const setTheme = (t: ThemePreference) => {
    setThemeState(t);
  };

  // Helper to get columns for a category
  const getCategoryColumns = useCallback((script: ScriptType, category: CategoryType) => {
    if (script === 'hiragana') {
      return category === 'single' ? hiraganaSingleColumns : hiraganaDoubleColumns;
    } else {
      if (category === 'single') return katakanaSingleColumns;
      if (category === 'double') return katakanaDoubleColumns;
      return katakanaExtendedColumns;
    }
  }, []);

  // Toggle single item
  const toggleKana = useCallback((id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  // Toggle column
  const toggleColumn = useCallback((script: ScriptType, category: CategoryType, columnIdx: number) => {
    const cols = getCategoryColumns(script, category);
    const targetCol = cols.find(c => c.columnIdx === columnIdx);
    if (!targetCol) return;

    const colItemIds = targetCol.items.map(item => item.id);
    setSelectedIds(prev => {
      const next = new Set(prev);
      const allSelected = colItemIds.every(id => next.has(id));
      if (allSelected) {
        colItemIds.forEach(id => next.delete(id));
      } else {
        colItemIds.forEach(id => next.add(id));
      }
      return next;
    });
  }, [getCategoryColumns]);

  // Check column state
  const isColumnSelected = useCallback((script: ScriptType, category: CategoryType, columnIdx: number): 'all' | 'some' | 'none' => {
    const cols = getCategoryColumns(script, category);
    const targetCol = cols.find(c => c.columnIdx === columnIdx);
    if (!targetCol || targetCol.items.length === 0) return 'none';

    let selectedCount = 0;
    for (const item of targetCol.items) {
      if (selectedIds.has(item.id)) selectedCount++;
    }

    if (selectedCount === 0) return 'none';
    if (selectedCount === targetCol.items.length) return 'all';
    return 'some';
  }, [getCategoryColumns, selectedIds]);

  // Toggle category
  const toggleCategory = useCallback((script: ScriptType, category: CategoryType) => {
    const cols = getCategoryColumns(script, category);
    const allCatIds = cols.flatMap(c => c.items.map(i => i.id));

    setSelectedIds(prev => {
      const next = new Set(prev);
      const allSelected = allCatIds.every(id => next.has(id));
      if (allSelected) {
        allCatIds.forEach(id => next.delete(id));
      } else {
        allCatIds.forEach(id => next.add(id));
      }
      return next;
    });
  }, [getCategoryColumns]);

  // Check category state
  const isCategorySelected = useCallback((script: ScriptType, category: CategoryType): 'all' | 'some' | 'none' => {
    const cols = getCategoryColumns(script, category);
    const allCatIds = cols.flatMap(c => c.items.map(i => i.id));
    if (allCatIds.length === 0) return 'none';

    let selectedCount = 0;
    for (const id of allCatIds) {
      if (selectedIds.has(id)) selectedCount++;
    }

    if (selectedCount === 0) return 'none';
    if (selectedCount === allCatIds.length) return 'all';
    return 'some';
  }, [getCategoryColumns, selectedIds]);

  // Toggle entire script (Hiragana or Katakana)
  const toggleScript = useCallback((script: ScriptType) => {
    const scriptItems = allKanaItems.filter(i => i.script === script);
    const scriptIds = scriptItems.map(i => i.id);

    setSelectedIds(prev => {
      const next = new Set(prev);
      const allSelected = scriptIds.every(id => next.has(id));
      if (allSelected) {
        scriptIds.forEach(id => next.delete(id));
      } else {
        scriptIds.forEach(id => next.add(id));
      }
      return next;
    });
  }, []);

  // Check script state
  const isScriptSelected = useCallback((script: ScriptType): 'all' | 'some' | 'none' => {
    const scriptItems = allKanaItems.filter(i => i.script === script);
    if (scriptItems.length === 0) return 'none';

    let selectedCount = 0;
    for (const item of scriptItems) {
      if (selectedIds.has(item.id)) selectedCount++;
    }

    if (selectedCount === 0) return 'none';
    if (selectedCount === scriptItems.length) return 'all';
    return 'some';
  }, [selectedIds]);

  // Global actions
  const selectAll = useCallback(() => {
    setSelectedIds(new Set(allKanaItems.map(i => i.id)));
  }, []);

  const clearAll = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  // Selected items list
  const selectedItems = useMemo(() => {
    const result: KanaItem[] = [];
    for (const id of selectedIds) {
      const item = kanaMap.get(id);
      if (item) result.push(item);
    }
    return result;
  }, [selectedIds]);

  // Live Counts
  const counts = useMemo(() => {
    let hiragana = 0;
    let katakana = 0;

    for (const id of selectedIds) {
      const item = kanaMap.get(id);
      if (item?.script === 'hiragana') hiragana++;
      else if (item?.script === 'katakana') katakana++;
    }

    return {
      total: selectedIds.size,
      hiragana,
      katakana,
    };
  }, [selectedIds]);

  const value = {
    selectedIds,
    toggleKana,
    toggleColumn,
    isColumnSelected,
    toggleCategory,
    isCategorySelected,
    toggleScript,
    isScriptSelected,
    selectAll,
    clearAll,
    selectedItems,
    counts,
    autoAdvance,
    setAutoAdvance,
    fontPreference,
    setFontPreference,
    audioEnabled,
    setAudioEnabled,
    theme,
    setTheme,
  };

  return <KanaContext.Provider value={value}>{children}</KanaContext.Provider>;
};

export const useKanaStore = (): KanaStoreContextType => {
  const context = useContext(KanaContext);
  if (!context) {
    throw new Error('useKanaStore must be used within a KanaProvider');
  }
  return context;
};
