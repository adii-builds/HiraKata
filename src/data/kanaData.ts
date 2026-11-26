// Generated Kana Dataset with 100% fidelity to Real Kana
export type ScriptType = 'hiragana' | 'katakana';
export type CategoryType = 'single' | 'double' | 'extended';

export interface KanaItem {
  id: string;
  char: string;
  displayRomaji: string;
  romajiAnswers: string[];
  script: ScriptType;
  category: CategoryType;
  columnIdx: number;
  rowIdx: number;
}

export interface KanaColumn {
  script: ScriptType;
  category: CategoryType;
  columnIdx: number;
  headerLabel: string;
  items: KanaItem[];
}

export const hiraganaSingleColumns: KanaColumn[] = [
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "headerLabel": "a",
    "items": [
      {
        "id": "h_s_0_0_あ",
        "char": "あ",
        "displayRomaji": "a",
        "romajiAnswers": [
          "a"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 0
      },
      {
        "id": "h_s_0_1_い",
        "char": "い",
        "displayRomaji": "i",
        "romajiAnswers": [
          "i"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 1
      },
      {
        "id": "h_s_0_2_う",
        "char": "う",
        "displayRomaji": "u",
        "romajiAnswers": [
          "u"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 2
      },
      {
        "id": "h_s_0_3_え",
        "char": "え",
        "displayRomaji": "e",
        "romajiAnswers": [
          "e"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 3
      },
      {
        "id": "h_s_0_4_お",
        "char": "お",
        "displayRomaji": "o",
        "romajiAnswers": [
          "o"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "headerLabel": "ka",
    "items": [
      {
        "id": "h_s_1_0_か",
        "char": "か",
        "displayRomaji": "ka",
        "romajiAnswers": [
          "ka"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 0
      },
      {
        "id": "h_s_1_1_き",
        "char": "き",
        "displayRomaji": "ki",
        "romajiAnswers": [
          "ki"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 1
      },
      {
        "id": "h_s_1_2_く",
        "char": "く",
        "displayRomaji": "ku",
        "romajiAnswers": [
          "ku"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 2
      },
      {
        "id": "h_s_1_3_け",
        "char": "け",
        "displayRomaji": "ke",
        "romajiAnswers": [
          "ke"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 3
      },
      {
        "id": "h_s_1_4_こ",
        "char": "こ",
        "displayRomaji": "ko",
        "romajiAnswers": [
          "ko"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "headerLabel": "sa",
    "items": [
      {
        "id": "h_s_2_0_さ",
        "char": "さ",
        "displayRomaji": "sa",
        "romajiAnswers": [
          "sa"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 0
      },
      {
        "id": "h_s_2_1_し",
        "char": "し",
        "displayRomaji": "shi",
        "romajiAnswers": [
          "shi",
          "si",
          "ši"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 1
      },
      {
        "id": "h_s_2_2_す",
        "char": "す",
        "displayRomaji": "su",
        "romajiAnswers": [
          "su"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 2
      },
      {
        "id": "h_s_2_3_せ",
        "char": "せ",
        "displayRomaji": "se",
        "romajiAnswers": [
          "se"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 3
      },
      {
        "id": "h_s_2_4_そ",
        "char": "そ",
        "displayRomaji": "so",
        "romajiAnswers": [
          "so"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "headerLabel": "ta",
    "items": [
      {
        "id": "h_s_3_0_た",
        "char": "た",
        "displayRomaji": "ta",
        "romajiAnswers": [
          "ta"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 0
      },
      {
        "id": "h_s_3_1_ち",
        "char": "ち",
        "displayRomaji": "chi",
        "romajiAnswers": [
          "chi",
          "ti",
          "či"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 1
      },
      {
        "id": "h_s_3_2_つ",
        "char": "つ",
        "displayRomaji": "tsu",
        "romajiAnswers": [
          "tsu",
          "tu",
          "cu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 2
      },
      {
        "id": "h_s_3_3_て",
        "char": "て",
        "displayRomaji": "te",
        "romajiAnswers": [
          "te"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 3
      },
      {
        "id": "h_s_3_4_と",
        "char": "と",
        "displayRomaji": "to",
        "romajiAnswers": [
          "to"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "headerLabel": "na",
    "items": [
      {
        "id": "h_s_4_0_な",
        "char": "な",
        "displayRomaji": "na",
        "romajiAnswers": [
          "na"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 0
      },
      {
        "id": "h_s_4_1_に",
        "char": "に",
        "displayRomaji": "ni",
        "romajiAnswers": [
          "ni"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 1
      },
      {
        "id": "h_s_4_2_ぬ",
        "char": "ぬ",
        "displayRomaji": "nu",
        "romajiAnswers": [
          "nu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 2
      },
      {
        "id": "h_s_4_3_ね",
        "char": "ね",
        "displayRomaji": "ne",
        "romajiAnswers": [
          "ne"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 3
      },
      {
        "id": "h_s_4_4_の",
        "char": "の",
        "displayRomaji": "no",
        "romajiAnswers": [
          "no"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "headerLabel": "ha",
    "items": [
      {
        "id": "h_s_5_0_は",
        "char": "は",
        "displayRomaji": "ha",
        "romajiAnswers": [
          "ha"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 0
      },
      {
        "id": "h_s_5_1_ひ",
        "char": "ひ",
        "displayRomaji": "hi",
        "romajiAnswers": [
          "hi"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 1
      },
      {
        "id": "h_s_5_2_ふ",
        "char": "ふ",
        "displayRomaji": "fu",
        "romajiAnswers": [
          "fu",
          "hu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 2
      },
      {
        "id": "h_s_5_3_へ",
        "char": "へ",
        "displayRomaji": "he",
        "romajiAnswers": [
          "he"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 3
      },
      {
        "id": "h_s_5_4_ほ",
        "char": "ほ",
        "displayRomaji": "ho",
        "romajiAnswers": [
          "ho"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "headerLabel": "ma",
    "items": [
      {
        "id": "h_s_6_0_ま",
        "char": "ま",
        "displayRomaji": "ma",
        "romajiAnswers": [
          "ma"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 0
      },
      {
        "id": "h_s_6_1_み",
        "char": "み",
        "displayRomaji": "mi",
        "romajiAnswers": [
          "mi"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 1
      },
      {
        "id": "h_s_6_2_む",
        "char": "む",
        "displayRomaji": "mu",
        "romajiAnswers": [
          "mu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 2
      },
      {
        "id": "h_s_6_3_め",
        "char": "め",
        "displayRomaji": "me",
        "romajiAnswers": [
          "me"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 3
      },
      {
        "id": "h_s_6_4_も",
        "char": "も",
        "displayRomaji": "mo",
        "romajiAnswers": [
          "mo"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 7,
    "headerLabel": "ya",
    "items": [
      {
        "id": "h_s_7_0_や",
        "char": "や",
        "displayRomaji": "ya",
        "romajiAnswers": [
          "ya"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 0
      },
      {
        "id": "h_s_7_1_ゆ",
        "char": "ゆ",
        "displayRomaji": "yu",
        "romajiAnswers": [
          "yu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 1
      },
      {
        "id": "h_s_7_2_よ",
        "char": "よ",
        "displayRomaji": "yo",
        "romajiAnswers": [
          "yo"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "headerLabel": "ra",
    "items": [
      {
        "id": "h_s_8_0_ら",
        "char": "ら",
        "displayRomaji": "ra",
        "romajiAnswers": [
          "ra"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 0
      },
      {
        "id": "h_s_8_1_り",
        "char": "り",
        "displayRomaji": "ri",
        "romajiAnswers": [
          "ri"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 1
      },
      {
        "id": "h_s_8_2_る",
        "char": "る",
        "displayRomaji": "ru",
        "romajiAnswers": [
          "ru"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 2
      },
      {
        "id": "h_s_8_3_れ",
        "char": "れ",
        "displayRomaji": "re",
        "romajiAnswers": [
          "re"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 3
      },
      {
        "id": "h_s_8_4_ろ",
        "char": "ろ",
        "displayRomaji": "ro",
        "romajiAnswers": [
          "ro"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 9,
    "headerLabel": "wa",
    "items": [
      {
        "id": "h_s_9_0_わ",
        "char": "わ",
        "displayRomaji": "wa",
        "romajiAnswers": [
          "wa"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 9,
        "rowIdx": 0
      },
      {
        "id": "h_s_9_1_を",
        "char": "を",
        "displayRomaji": "wo",
        "romajiAnswers": [
          "wo",
          "o"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 9,
        "rowIdx": 1
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 10,
    "headerLabel": "n",
    "items": [
      {
        "id": "h_s_10_0_ん",
        "char": "ん",
        "displayRomaji": "n",
        "romajiAnswers": [
          "n"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 10,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "headerLabel": "ga",
    "items": [
      {
        "id": "h_s_11_0_が",
        "char": "が",
        "displayRomaji": "ga",
        "romajiAnswers": [
          "ga"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 0
      },
      {
        "id": "h_s_11_1_ぎ",
        "char": "ぎ",
        "displayRomaji": "gi",
        "romajiAnswers": [
          "gi"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 1
      },
      {
        "id": "h_s_11_2_ぐ",
        "char": "ぐ",
        "displayRomaji": "gu",
        "romajiAnswers": [
          "gu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 2
      },
      {
        "id": "h_s_11_3_げ",
        "char": "げ",
        "displayRomaji": "ge",
        "romajiAnswers": [
          "ge"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 3
      },
      {
        "id": "h_s_11_4_ご",
        "char": "ご",
        "displayRomaji": "go",
        "romajiAnswers": [
          "go"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "headerLabel": "za",
    "items": [
      {
        "id": "h_s_12_0_ざ",
        "char": "ざ",
        "displayRomaji": "za",
        "romajiAnswers": [
          "za"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 0
      },
      {
        "id": "h_s_12_1_じ",
        "char": "じ",
        "displayRomaji": "ji",
        "romajiAnswers": [
          "ji",
          "zi",
          "dži"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 1
      },
      {
        "id": "h_s_12_2_ず",
        "char": "ず",
        "displayRomaji": "zu",
        "romajiAnswers": [
          "zu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 2
      },
      {
        "id": "h_s_12_3_ぜ",
        "char": "ぜ",
        "displayRomaji": "ze",
        "romajiAnswers": [
          "ze"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 3
      },
      {
        "id": "h_s_12_4_ぞ",
        "char": "ぞ",
        "displayRomaji": "zo",
        "romajiAnswers": [
          "zo"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "headerLabel": "da",
    "items": [
      {
        "id": "h_s_13_0_だ",
        "char": "だ",
        "displayRomaji": "da",
        "romajiAnswers": [
          "da"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 0
      },
      {
        "id": "h_s_13_1_ぢ",
        "char": "ぢ",
        "displayRomaji": "ji",
        "romajiAnswers": [
          "ji",
          "di",
          "dzi",
          "dži",
          "dji"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 1
      },
      {
        "id": "h_s_13_2_づ",
        "char": "づ",
        "displayRomaji": "zu",
        "romajiAnswers": [
          "zu",
          "du",
          "dzu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 2
      },
      {
        "id": "h_s_13_3_で",
        "char": "で",
        "displayRomaji": "de",
        "romajiAnswers": [
          "de"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 3
      },
      {
        "id": "h_s_13_4_ど",
        "char": "ど",
        "displayRomaji": "do",
        "romajiAnswers": [
          "do"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "headerLabel": "ba",
    "items": [
      {
        "id": "h_s_14_0_ば",
        "char": "ば",
        "displayRomaji": "ba",
        "romajiAnswers": [
          "ba"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 0
      },
      {
        "id": "h_s_14_1_び",
        "char": "び",
        "displayRomaji": "bi",
        "romajiAnswers": [
          "bi"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 1
      },
      {
        "id": "h_s_14_2_ぶ",
        "char": "ぶ",
        "displayRomaji": "bu",
        "romajiAnswers": [
          "bu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 2
      },
      {
        "id": "h_s_14_3_べ",
        "char": "べ",
        "displayRomaji": "be",
        "romajiAnswers": [
          "be"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 3
      },
      {
        "id": "h_s_14_4_ぼ",
        "char": "ぼ",
        "displayRomaji": "bo",
        "romajiAnswers": [
          "bo"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "headerLabel": "pa",
    "items": [
      {
        "id": "h_s_15_0_ぱ",
        "char": "ぱ",
        "displayRomaji": "pa",
        "romajiAnswers": [
          "pa"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 0
      },
      {
        "id": "h_s_15_1_ぴ",
        "char": "ぴ",
        "displayRomaji": "pi",
        "romajiAnswers": [
          "pi"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 1
      },
      {
        "id": "h_s_15_2_ぷ",
        "char": "ぷ",
        "displayRomaji": "pu",
        "romajiAnswers": [
          "pu"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 2
      },
      {
        "id": "h_s_15_3_ぺ",
        "char": "ぺ",
        "displayRomaji": "pe",
        "romajiAnswers": [
          "pe"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 3
      },
      {
        "id": "h_s_15_4_ぽ",
        "char": "ぽ",
        "displayRomaji": "po",
        "romajiAnswers": [
          "po"
        ],
        "script": "hiragana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 4
      }
    ]
  }
];

export const hiraganaDoubleColumns: KanaColumn[] = [
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 0,
    "headerLabel": "kya",
    "items": [
      {
        "id": "h_d_0_0_きゃ",
        "char": "きゃ",
        "displayRomaji": "kya",
        "romajiAnswers": [
          "kya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 0
      },
      {
        "id": "h_d_0_1_きゅ",
        "char": "きゅ",
        "displayRomaji": "kyu",
        "romajiAnswers": [
          "kyu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 1
      },
      {
        "id": "h_d_0_2_きょ",
        "char": "きょ",
        "displayRomaji": "kyo",
        "romajiAnswers": [
          "kyo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 1,
    "headerLabel": "sha",
    "items": [
      {
        "id": "h_d_1_0_しゃ",
        "char": "しゃ",
        "displayRomaji": "sha",
        "romajiAnswers": [
          "sha",
          "sya",
          "ša"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 0
      },
      {
        "id": "h_d_1_1_しゅ",
        "char": "しゅ",
        "displayRomaji": "shu",
        "romajiAnswers": [
          "shu",
          "syu",
          "šu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 1
      },
      {
        "id": "h_d_1_2_しょ",
        "char": "しょ",
        "displayRomaji": "sho",
        "romajiAnswers": [
          "sho",
          "syo",
          "šo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 2,
    "headerLabel": "cha",
    "items": [
      {
        "id": "h_d_2_0_ちゃ",
        "char": "ちゃ",
        "displayRomaji": "cha",
        "romajiAnswers": [
          "cha",
          "tya",
          "ča"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 0
      },
      {
        "id": "h_d_2_1_ちゅ",
        "char": "ちゅ",
        "displayRomaji": "chu",
        "romajiAnswers": [
          "chu",
          "tyu",
          "ču"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 1
      },
      {
        "id": "h_d_2_2_ちょ",
        "char": "ちょ",
        "displayRomaji": "cho",
        "romajiAnswers": [
          "cho",
          "tyo",
          "čo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 3,
    "headerLabel": "nya",
    "items": [
      {
        "id": "h_d_3_0_にゃ",
        "char": "にゃ",
        "displayRomaji": "nya",
        "romajiAnswers": [
          "nya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 0
      },
      {
        "id": "h_d_3_1_にゅ",
        "char": "にゅ",
        "displayRomaji": "nyu",
        "romajiAnswers": [
          "nyu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 1
      },
      {
        "id": "h_d_3_2_にょ",
        "char": "にょ",
        "displayRomaji": "nyo",
        "romajiAnswers": [
          "nyo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 4,
    "headerLabel": "hya",
    "items": [
      {
        "id": "h_d_4_0_ひゃ",
        "char": "ひゃ",
        "displayRomaji": "hya",
        "romajiAnswers": [
          "hya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 0
      },
      {
        "id": "h_d_4_1_ひゅ",
        "char": "ひゅ",
        "displayRomaji": "hyu",
        "romajiAnswers": [
          "hyu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 1
      },
      {
        "id": "h_d_4_2_ひょ",
        "char": "ひょ",
        "displayRomaji": "hyo",
        "romajiAnswers": [
          "hyo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 5,
    "headerLabel": "mya",
    "items": [
      {
        "id": "h_d_5_0_みゃ",
        "char": "みゃ",
        "displayRomaji": "mya",
        "romajiAnswers": [
          "mya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 0
      },
      {
        "id": "h_d_5_1_みゅ",
        "char": "みゅ",
        "displayRomaji": "myu",
        "romajiAnswers": [
          "myu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 1
      },
      {
        "id": "h_d_5_2_みょ",
        "char": "みょ",
        "displayRomaji": "myo",
        "romajiAnswers": [
          "myo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 6,
    "headerLabel": "rya",
    "items": [
      {
        "id": "h_d_6_0_りゃ",
        "char": "りゃ",
        "displayRomaji": "rya",
        "romajiAnswers": [
          "rya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 0
      },
      {
        "id": "h_d_6_1_りゅ",
        "char": "りゅ",
        "displayRomaji": "ryu",
        "romajiAnswers": [
          "ryu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 1
      },
      {
        "id": "h_d_6_2_りょ",
        "char": "りょ",
        "displayRomaji": "ryo",
        "romajiAnswers": [
          "ryo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 7,
    "headerLabel": "gya",
    "items": [
      {
        "id": "h_d_7_0_ぎゃ",
        "char": "ぎゃ",
        "displayRomaji": "gya",
        "romajiAnswers": [
          "gya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 0
      },
      {
        "id": "h_d_7_1_ぎゅ",
        "char": "ぎゅ",
        "displayRomaji": "gyu",
        "romajiAnswers": [
          "gyu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 1
      },
      {
        "id": "h_d_7_2_ぎょ",
        "char": "ぎょ",
        "displayRomaji": "gyo",
        "romajiAnswers": [
          "gyo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 8,
    "headerLabel": "ja",
    "items": [
      {
        "id": "h_d_8_0_じゃ",
        "char": "じゃ",
        "displayRomaji": "ja",
        "romajiAnswers": [
          "ja",
          "jya",
          "zya",
          "dža"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 0
      },
      {
        "id": "h_d_8_1_じゅ",
        "char": "じゅ",
        "displayRomaji": "ju",
        "romajiAnswers": [
          "ju",
          "jyu",
          "zyu",
          "džu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 1
      },
      {
        "id": "h_d_8_2_じょ",
        "char": "じょ",
        "displayRomaji": "jo",
        "romajiAnswers": [
          "jo",
          "jyo",
          "zyo",
          "džo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 9,
    "headerLabel": "ja",
    "items": [
      {
        "id": "h_d_9_0_ぢゃ",
        "char": "ぢゃ",
        "displayRomaji": "ja",
        "romajiAnswers": [
          "ja",
          "dya",
          "zya",
          "dža"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 0
      },
      {
        "id": "h_d_9_1_ぢゅ",
        "char": "ぢゅ",
        "displayRomaji": "ju",
        "romajiAnswers": [
          "ju",
          "dyu",
          "zyu",
          "džu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 1
      },
      {
        "id": "h_d_9_2_ぢょ",
        "char": "ぢょ",
        "displayRomaji": "jo",
        "romajiAnswers": [
          "jo",
          "dyo",
          "zyo",
          "džo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 10,
    "headerLabel": "bya",
    "items": [
      {
        "id": "h_d_10_0_びゃ",
        "char": "びゃ",
        "displayRomaji": "bya",
        "romajiAnswers": [
          "bya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 0
      },
      {
        "id": "h_d_10_1_びゅ",
        "char": "びゅ",
        "displayRomaji": "byu",
        "romajiAnswers": [
          "byu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 1
      },
      {
        "id": "h_d_10_2_びょ",
        "char": "びょ",
        "displayRomaji": "byo",
        "romajiAnswers": [
          "byo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "hiragana",
    "category": "double",
    "columnIdx": 11,
    "headerLabel": "pya",
    "items": [
      {
        "id": "h_d_11_0_ぴゃ",
        "char": "ぴゃ",
        "displayRomaji": "pya",
        "romajiAnswers": [
          "pya"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 0
      },
      {
        "id": "h_d_11_1_ぴゅ",
        "char": "ぴゅ",
        "displayRomaji": "pyu",
        "romajiAnswers": [
          "pyu"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 1
      },
      {
        "id": "h_d_11_2_ぴょ",
        "char": "ぴょ",
        "displayRomaji": "pyo",
        "romajiAnswers": [
          "pyo"
        ],
        "script": "hiragana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 2
      }
    ]
  }
];

export const katakanaSingleColumns: KanaColumn[] = [
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "headerLabel": "a",
    "items": [
      {
        "id": "k_s_0_0_ア",
        "char": "ア",
        "displayRomaji": "a",
        "romajiAnswers": [
          "a"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 0
      },
      {
        "id": "k_s_0_1_イ",
        "char": "イ",
        "displayRomaji": "i",
        "romajiAnswers": [
          "i"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 1
      },
      {
        "id": "k_s_0_2_ウ",
        "char": "ウ",
        "displayRomaji": "u",
        "romajiAnswers": [
          "u"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 2
      },
      {
        "id": "k_s_0_3_エ",
        "char": "エ",
        "displayRomaji": "e",
        "romajiAnswers": [
          "e"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 3
      },
      {
        "id": "k_s_0_4_オ",
        "char": "オ",
        "displayRomaji": "o",
        "romajiAnswers": [
          "o"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 0,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "headerLabel": "ka",
    "items": [
      {
        "id": "k_s_1_0_カ",
        "char": "カ",
        "displayRomaji": "ka",
        "romajiAnswers": [
          "ka"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 0
      },
      {
        "id": "k_s_1_1_キ",
        "char": "キ",
        "displayRomaji": "ki",
        "romajiAnswers": [
          "ki"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 1
      },
      {
        "id": "k_s_1_2_ク",
        "char": "ク",
        "displayRomaji": "ku",
        "romajiAnswers": [
          "ku"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 2
      },
      {
        "id": "k_s_1_3_ケ",
        "char": "ケ",
        "displayRomaji": "ke",
        "romajiAnswers": [
          "ke"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 3
      },
      {
        "id": "k_s_1_4_コ",
        "char": "コ",
        "displayRomaji": "ko",
        "romajiAnswers": [
          "ko"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 1,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "headerLabel": "sa",
    "items": [
      {
        "id": "k_s_2_0_サ",
        "char": "サ",
        "displayRomaji": "sa",
        "romajiAnswers": [
          "sa"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 0
      },
      {
        "id": "k_s_2_1_シ",
        "char": "シ",
        "displayRomaji": "shi",
        "romajiAnswers": [
          "shi",
          "si",
          "ši"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 1
      },
      {
        "id": "k_s_2_2_ス",
        "char": "ス",
        "displayRomaji": "su",
        "romajiAnswers": [
          "su"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 2
      },
      {
        "id": "k_s_2_3_セ",
        "char": "セ",
        "displayRomaji": "se",
        "romajiAnswers": [
          "se"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 3
      },
      {
        "id": "k_s_2_4_ソ",
        "char": "ソ",
        "displayRomaji": "so",
        "romajiAnswers": [
          "so"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 2,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "headerLabel": "ta",
    "items": [
      {
        "id": "k_s_3_0_タ",
        "char": "タ",
        "displayRomaji": "ta",
        "romajiAnswers": [
          "ta"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 0
      },
      {
        "id": "k_s_3_1_チ",
        "char": "チ",
        "displayRomaji": "chi",
        "romajiAnswers": [
          "chi",
          "ti",
          "či"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 1
      },
      {
        "id": "k_s_3_2_ツ",
        "char": "ツ",
        "displayRomaji": "tsu",
        "romajiAnswers": [
          "tsu",
          "tu",
          "cu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 2
      },
      {
        "id": "k_s_3_3_テ",
        "char": "テ",
        "displayRomaji": "te",
        "romajiAnswers": [
          "te"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 3
      },
      {
        "id": "k_s_3_4_ト",
        "char": "ト",
        "displayRomaji": "to",
        "romajiAnswers": [
          "to"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 3,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "headerLabel": "na",
    "items": [
      {
        "id": "k_s_4_0_ナ",
        "char": "ナ",
        "displayRomaji": "na",
        "romajiAnswers": [
          "na"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 0
      },
      {
        "id": "k_s_4_1_ニ",
        "char": "ニ",
        "displayRomaji": "ni",
        "romajiAnswers": [
          "ni"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 1
      },
      {
        "id": "k_s_4_2_ヌ",
        "char": "ヌ",
        "displayRomaji": "nu",
        "romajiAnswers": [
          "nu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 2
      },
      {
        "id": "k_s_4_3_ネ",
        "char": "ネ",
        "displayRomaji": "ne",
        "romajiAnswers": [
          "ne"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 3
      },
      {
        "id": "k_s_4_4_ノ",
        "char": "ノ",
        "displayRomaji": "no",
        "romajiAnswers": [
          "no"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 4,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "headerLabel": "ha",
    "items": [
      {
        "id": "k_s_5_0_ハ",
        "char": "ハ",
        "displayRomaji": "ha",
        "romajiAnswers": [
          "ha"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 0
      },
      {
        "id": "k_s_5_1_ヒ",
        "char": "ヒ",
        "displayRomaji": "hi",
        "romajiAnswers": [
          "hi"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 1
      },
      {
        "id": "k_s_5_2_フ",
        "char": "フ",
        "displayRomaji": "fu",
        "romajiAnswers": [
          "fu",
          "hu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 2
      },
      {
        "id": "k_s_5_3_ヘ",
        "char": "ヘ",
        "displayRomaji": "he",
        "romajiAnswers": [
          "he"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 3
      },
      {
        "id": "k_s_5_4_ホ",
        "char": "ホ",
        "displayRomaji": "ho",
        "romajiAnswers": [
          "ho"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 5,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "headerLabel": "ma",
    "items": [
      {
        "id": "k_s_6_0_マ",
        "char": "マ",
        "displayRomaji": "ma",
        "romajiAnswers": [
          "ma"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 0
      },
      {
        "id": "k_s_6_1_ミ",
        "char": "ミ",
        "displayRomaji": "mi",
        "romajiAnswers": [
          "mi"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 1
      },
      {
        "id": "k_s_6_2_ム",
        "char": "ム",
        "displayRomaji": "mu",
        "romajiAnswers": [
          "mu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 2
      },
      {
        "id": "k_s_6_3_メ",
        "char": "メ",
        "displayRomaji": "me",
        "romajiAnswers": [
          "me"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 3
      },
      {
        "id": "k_s_6_4_モ",
        "char": "モ",
        "displayRomaji": "mo",
        "romajiAnswers": [
          "mo"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 6,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 7,
    "headerLabel": "ya",
    "items": [
      {
        "id": "k_s_7_0_ヤ",
        "char": "ヤ",
        "displayRomaji": "ya",
        "romajiAnswers": [
          "ya"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 0
      },
      {
        "id": "k_s_7_1_ユ",
        "char": "ユ",
        "displayRomaji": "yu",
        "romajiAnswers": [
          "yu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 1
      },
      {
        "id": "k_s_7_2_ヨ",
        "char": "ヨ",
        "displayRomaji": "yo",
        "romajiAnswers": [
          "yo"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 7,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "headerLabel": "ra",
    "items": [
      {
        "id": "k_s_8_0_ラ",
        "char": "ラ",
        "displayRomaji": "ra",
        "romajiAnswers": [
          "ra"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 0
      },
      {
        "id": "k_s_8_1_リ",
        "char": "リ",
        "displayRomaji": "ri",
        "romajiAnswers": [
          "ri"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 1
      },
      {
        "id": "k_s_8_2_ル",
        "char": "ル",
        "displayRomaji": "ru",
        "romajiAnswers": [
          "ru"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 2
      },
      {
        "id": "k_s_8_3_レ",
        "char": "レ",
        "displayRomaji": "re",
        "romajiAnswers": [
          "re"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 3
      },
      {
        "id": "k_s_8_4_ロ",
        "char": "ロ",
        "displayRomaji": "ro",
        "romajiAnswers": [
          "ro"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 8,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 9,
    "headerLabel": "wa",
    "items": [
      {
        "id": "k_s_9_0_ワ",
        "char": "ワ",
        "displayRomaji": "wa",
        "romajiAnswers": [
          "wa"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 9,
        "rowIdx": 0
      },
      {
        "id": "k_s_9_1_ヲ",
        "char": "ヲ",
        "displayRomaji": "wo",
        "romajiAnswers": [
          "wo",
          "o"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 9,
        "rowIdx": 1
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 10,
    "headerLabel": "n",
    "items": [
      {
        "id": "k_s_10_0_ン",
        "char": "ン",
        "displayRomaji": "n",
        "romajiAnswers": [
          "n"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 10,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "headerLabel": "ga",
    "items": [
      {
        "id": "k_s_11_0_ガ",
        "char": "ガ",
        "displayRomaji": "ga",
        "romajiAnswers": [
          "ga"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 0
      },
      {
        "id": "k_s_11_1_ギ",
        "char": "ギ",
        "displayRomaji": "gi",
        "romajiAnswers": [
          "gi"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 1
      },
      {
        "id": "k_s_11_2_グ",
        "char": "グ",
        "displayRomaji": "gu",
        "romajiAnswers": [
          "gu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 2
      },
      {
        "id": "k_s_11_3_ゲ",
        "char": "ゲ",
        "displayRomaji": "ge",
        "romajiAnswers": [
          "ge"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 3
      },
      {
        "id": "k_s_11_4_ゴ",
        "char": "ゴ",
        "displayRomaji": "go",
        "romajiAnswers": [
          "go"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 11,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "headerLabel": "za",
    "items": [
      {
        "id": "k_s_12_0_ザ",
        "char": "ザ",
        "displayRomaji": "za",
        "romajiAnswers": [
          "za"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 0
      },
      {
        "id": "k_s_12_1_ジ",
        "char": "ジ",
        "displayRomaji": "ji",
        "romajiAnswers": [
          "ji",
          "zi",
          "dži"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 1
      },
      {
        "id": "k_s_12_2_ズ",
        "char": "ズ",
        "displayRomaji": "zu",
        "romajiAnswers": [
          "zu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 2
      },
      {
        "id": "k_s_12_3_ゼ",
        "char": "ゼ",
        "displayRomaji": "ze",
        "romajiAnswers": [
          "ze"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 3
      },
      {
        "id": "k_s_12_4_ゾ",
        "char": "ゾ",
        "displayRomaji": "zo",
        "romajiAnswers": [
          "zo"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 12,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "headerLabel": "da",
    "items": [
      {
        "id": "k_s_13_0_ダ",
        "char": "ダ",
        "displayRomaji": "da",
        "romajiAnswers": [
          "da"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 0
      },
      {
        "id": "k_s_13_1_ヂ",
        "char": "ヂ",
        "displayRomaji": "ji",
        "romajiAnswers": [
          "ji",
          "di",
          "dži",
          "dji"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 1
      },
      {
        "id": "k_s_13_2_ヅ",
        "char": "ヅ",
        "displayRomaji": "zu",
        "romajiAnswers": [
          "zu",
          "du",
          "dzu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 2
      },
      {
        "id": "k_s_13_3_デ",
        "char": "デ",
        "displayRomaji": "de",
        "romajiAnswers": [
          "de"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 3
      },
      {
        "id": "k_s_13_4_ド",
        "char": "ド",
        "displayRomaji": "do",
        "romajiAnswers": [
          "do"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 13,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "headerLabel": "ba",
    "items": [
      {
        "id": "k_s_14_0_バ",
        "char": "バ",
        "displayRomaji": "ba",
        "romajiAnswers": [
          "ba"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 0
      },
      {
        "id": "k_s_14_1_ビ",
        "char": "ビ",
        "displayRomaji": "bi",
        "romajiAnswers": [
          "bi"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 1
      },
      {
        "id": "k_s_14_2_ブ",
        "char": "ブ",
        "displayRomaji": "bu",
        "romajiAnswers": [
          "bu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 2
      },
      {
        "id": "k_s_14_3_ベ",
        "char": "ベ",
        "displayRomaji": "be",
        "romajiAnswers": [
          "be"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 3
      },
      {
        "id": "k_s_14_4_ボ",
        "char": "ボ",
        "displayRomaji": "bo",
        "romajiAnswers": [
          "bo"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 14,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "headerLabel": "pa",
    "items": [
      {
        "id": "k_s_15_0_パ",
        "char": "パ",
        "displayRomaji": "pa",
        "romajiAnswers": [
          "pa"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 0
      },
      {
        "id": "k_s_15_1_ピ",
        "char": "ピ",
        "displayRomaji": "pi",
        "romajiAnswers": [
          "pi"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 1
      },
      {
        "id": "k_s_15_2_プ",
        "char": "プ",
        "displayRomaji": "pu",
        "romajiAnswers": [
          "pu"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 2
      },
      {
        "id": "k_s_15_3_ペ",
        "char": "ペ",
        "displayRomaji": "pe",
        "romajiAnswers": [
          "pe"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 3
      },
      {
        "id": "k_s_15_4_ポ",
        "char": "ポ",
        "displayRomaji": "po",
        "romajiAnswers": [
          "po"
        ],
        "script": "katakana",
        "category": "single",
        "columnIdx": 15,
        "rowIdx": 4
      }
    ]
  }
];

export const katakanaDoubleColumns: KanaColumn[] = [
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 0,
    "headerLabel": "kya",
    "items": [
      {
        "id": "k_d_0_0_キャ",
        "char": "キャ",
        "displayRomaji": "kya",
        "romajiAnswers": [
          "kya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 0
      },
      {
        "id": "k_d_0_1_キュ",
        "char": "キュ",
        "displayRomaji": "kyu",
        "romajiAnswers": [
          "kyu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 1
      },
      {
        "id": "k_d_0_2_キョ",
        "char": "キョ",
        "displayRomaji": "kyo",
        "romajiAnswers": [
          "kyo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 0,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 1,
    "headerLabel": "sha",
    "items": [
      {
        "id": "k_d_1_0_シャ",
        "char": "シャ",
        "displayRomaji": "sha",
        "romajiAnswers": [
          "sha",
          "sya",
          "ša"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 0
      },
      {
        "id": "k_d_1_1_シュ",
        "char": "シュ",
        "displayRomaji": "shu",
        "romajiAnswers": [
          "shu",
          "syu",
          "šu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 1
      },
      {
        "id": "k_d_1_2_ショ",
        "char": "ショ",
        "displayRomaji": "sho",
        "romajiAnswers": [
          "sho",
          "syo",
          "šo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 1,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 2,
    "headerLabel": "cha",
    "items": [
      {
        "id": "k_d_2_0_チャ",
        "char": "チャ",
        "displayRomaji": "cha",
        "romajiAnswers": [
          "cha",
          "tya",
          "ča"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 0
      },
      {
        "id": "k_d_2_1_チュ",
        "char": "チュ",
        "displayRomaji": "chu",
        "romajiAnswers": [
          "chu",
          "tyu",
          "ču"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 1
      },
      {
        "id": "k_d_2_2_チョ",
        "char": "チョ",
        "displayRomaji": "cho",
        "romajiAnswers": [
          "cho",
          "tyo",
          "čo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 2,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 3,
    "headerLabel": "nya",
    "items": [
      {
        "id": "k_d_3_0_ニャ",
        "char": "ニャ",
        "displayRomaji": "nya",
        "romajiAnswers": [
          "nya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 0
      },
      {
        "id": "k_d_3_1_ニュ",
        "char": "ニュ",
        "displayRomaji": "nyu",
        "romajiAnswers": [
          "nyu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 1
      },
      {
        "id": "k_d_3_2_ニョ",
        "char": "ニョ",
        "displayRomaji": "nyo",
        "romajiAnswers": [
          "nyo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 3,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 4,
    "headerLabel": "hya",
    "items": [
      {
        "id": "k_d_4_0_ヒャ",
        "char": "ヒャ",
        "displayRomaji": "hya",
        "romajiAnswers": [
          "hya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 0
      },
      {
        "id": "k_d_4_1_ヒュ",
        "char": "ヒュ",
        "displayRomaji": "hyu",
        "romajiAnswers": [
          "hyu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 1
      },
      {
        "id": "k_d_4_2_ヒョ",
        "char": "ヒョ",
        "displayRomaji": "hyo",
        "romajiAnswers": [
          "hyo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 4,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 5,
    "headerLabel": "mya",
    "items": [
      {
        "id": "k_d_5_0_ミャ",
        "char": "ミャ",
        "displayRomaji": "mya",
        "romajiAnswers": [
          "mya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 0
      },
      {
        "id": "k_d_5_1_ミュ",
        "char": "ミュ",
        "displayRomaji": "myu",
        "romajiAnswers": [
          "myu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 1
      },
      {
        "id": "k_d_5_2_ミョ",
        "char": "ミョ",
        "displayRomaji": "myo",
        "romajiAnswers": [
          "myo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 5,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 6,
    "headerLabel": "rya",
    "items": [
      {
        "id": "k_d_6_0_リャ",
        "char": "リャ",
        "displayRomaji": "rya",
        "romajiAnswers": [
          "rya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 0
      },
      {
        "id": "k_d_6_1_リュ",
        "char": "リュ",
        "displayRomaji": "ryu",
        "romajiAnswers": [
          "ryu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 1
      },
      {
        "id": "k_d_6_2_リョ",
        "char": "リョ",
        "displayRomaji": "ryo",
        "romajiAnswers": [
          "ryo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 6,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 7,
    "headerLabel": "gya",
    "items": [
      {
        "id": "k_d_7_0_ギャ",
        "char": "ギャ",
        "displayRomaji": "gya",
        "romajiAnswers": [
          "gya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 0
      },
      {
        "id": "k_d_7_1_ギュ",
        "char": "ギュ",
        "displayRomaji": "gyu",
        "romajiAnswers": [
          "gyu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 1
      },
      {
        "id": "k_d_7_2_ギョ",
        "char": "ギョ",
        "displayRomaji": "gyo",
        "romajiAnswers": [
          "gyo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 7,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 8,
    "headerLabel": "ja",
    "items": [
      {
        "id": "k_d_8_0_ジャ",
        "char": "ジャ",
        "displayRomaji": "ja",
        "romajiAnswers": [
          "ja",
          "jya",
          "zya",
          "dža"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 0
      },
      {
        "id": "k_d_8_1_ジュ",
        "char": "ジュ",
        "displayRomaji": "ju",
        "romajiAnswers": [
          "ju",
          "jyu",
          "zyu",
          "džu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 1
      },
      {
        "id": "k_d_8_2_ジョ",
        "char": "ジョ",
        "displayRomaji": "jo",
        "romajiAnswers": [
          "jo",
          "jyo",
          "zyo",
          "džo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 8,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 9,
    "headerLabel": "ja",
    "items": [
      {
        "id": "k_d_9_0_ヂャ",
        "char": "ヂャ",
        "displayRomaji": "ja",
        "romajiAnswers": [
          "ja",
          "dya",
          "zya",
          "dža"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 0
      },
      {
        "id": "k_d_9_1_ヂュ",
        "char": "ヂュ",
        "displayRomaji": "ju",
        "romajiAnswers": [
          "ju",
          "dyu",
          "zyu",
          "džu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 1
      },
      {
        "id": "k_d_9_2_ヂョ",
        "char": "ヂョ",
        "displayRomaji": "jo",
        "romajiAnswers": [
          "jo",
          "dyo",
          "zyo",
          "džo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 9,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 10,
    "headerLabel": "bya",
    "items": [
      {
        "id": "k_d_10_0_ビャ",
        "char": "ビャ",
        "displayRomaji": "bya",
        "romajiAnswers": [
          "bya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 0
      },
      {
        "id": "k_d_10_1_ビュ",
        "char": "ビュ",
        "displayRomaji": "byu",
        "romajiAnswers": [
          "byu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 1
      },
      {
        "id": "k_d_10_2_ビョ",
        "char": "ビョ",
        "displayRomaji": "byo",
        "romajiAnswers": [
          "byo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 10,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "double",
    "columnIdx": 11,
    "headerLabel": "pya",
    "items": [
      {
        "id": "k_d_11_0_ピャ",
        "char": "ピャ",
        "displayRomaji": "pya",
        "romajiAnswers": [
          "pya"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 0
      },
      {
        "id": "k_d_11_1_ピュ",
        "char": "ピュ",
        "displayRomaji": "pyu",
        "romajiAnswers": [
          "pyu"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 1
      },
      {
        "id": "k_d_11_2_ピョ",
        "char": "ピョ",
        "displayRomaji": "pyo",
        "romajiAnswers": [
          "pyo"
        ],
        "script": "katakana",
        "category": "double",
        "columnIdx": 11,
        "rowIdx": 2
      }
    ]
  }
];

export const katakanaExtendedColumns: KanaColumn[] = [
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 0,
    "headerLabel": "ye",
    "items": [
      {
        "id": "k_e_0_0_イェ",
        "char": "イェ",
        "displayRomaji": "ye",
        "romajiAnswers": [
          "ye"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 0,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 1,
    "headerLabel": "wi",
    "items": [
      {
        "id": "k_e_1_0_ウィ",
        "char": "ウィ",
        "displayRomaji": "wi",
        "romajiAnswers": [
          "wi"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 1,
        "rowIdx": 0
      },
      {
        "id": "k_e_1_1_ウェ",
        "char": "ウェ",
        "displayRomaji": "we",
        "romajiAnswers": [
          "we"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 1,
        "rowIdx": 1
      },
      {
        "id": "k_e_1_2_ウォ",
        "char": "ウォ",
        "displayRomaji": "wo",
        "romajiAnswers": [
          "wo"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 1,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "headerLabel": "va",
    "items": [
      {
        "id": "k_e_2_0_ヴァ",
        "char": "ヴァ",
        "displayRomaji": "va",
        "romajiAnswers": [
          "va"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 2,
        "rowIdx": 0
      },
      {
        "id": "k_e_2_1_ヴィ",
        "char": "ヴィ",
        "displayRomaji": "vi",
        "romajiAnswers": [
          "vi"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 2,
        "rowIdx": 1
      },
      {
        "id": "k_e_2_2_ヴ",
        "char": "ヴ",
        "displayRomaji": "vu",
        "romajiAnswers": [
          "vu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 2,
        "rowIdx": 2
      },
      {
        "id": "k_e_2_3_ヴェ",
        "char": "ヴェ",
        "displayRomaji": "ve",
        "romajiAnswers": [
          "ve"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 2,
        "rowIdx": 3
      },
      {
        "id": "k_e_2_4_ヴォ",
        "char": "ヴォ",
        "displayRomaji": "vo",
        "romajiAnswers": [
          "vo"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 2,
        "rowIdx": 4
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 3,
    "headerLabel": "she",
    "items": [
      {
        "id": "k_e_3_0_シェ",
        "char": "シェ",
        "displayRomaji": "she",
        "romajiAnswers": [
          "she"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 3,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 4,
    "headerLabel": "je",
    "items": [
      {
        "id": "k_e_4_0_ジェ",
        "char": "ジェ",
        "displayRomaji": "je",
        "romajiAnswers": [
          "je"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 4,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 5,
    "headerLabel": "che",
    "items": [
      {
        "id": "k_e_5_0_チェ",
        "char": "チェ",
        "displayRomaji": "che",
        "romajiAnswers": [
          "che"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 5,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 6,
    "headerLabel": "ti",
    "items": [
      {
        "id": "k_e_6_0_ティ",
        "char": "ティ",
        "displayRomaji": "ti",
        "romajiAnswers": [
          "ti"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 6,
        "rowIdx": 0
      },
      {
        "id": "k_e_6_1_トゥ",
        "char": "トゥ",
        "displayRomaji": "tu",
        "romajiAnswers": [
          "tu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 6,
        "rowIdx": 1
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 7,
    "headerLabel": "di",
    "items": [
      {
        "id": "k_e_7_0_ディ",
        "char": "ディ",
        "displayRomaji": "di",
        "romajiAnswers": [
          "di"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 7,
        "rowIdx": 0
      },
      {
        "id": "k_e_7_1_ドゥ",
        "char": "ドゥ",
        "displayRomaji": "du",
        "romajiAnswers": [
          "du"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 7,
        "rowIdx": 1
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 8,
    "headerLabel": "tsa",
    "items": [
      {
        "id": "k_e_8_0_ツァ",
        "char": "ツァ",
        "displayRomaji": "tsa",
        "romajiAnswers": [
          "tsa"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 8,
        "rowIdx": 0
      },
      {
        "id": "k_e_8_1_ツィ",
        "char": "ツィ",
        "displayRomaji": "tsi",
        "romajiAnswers": [
          "tsi"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 8,
        "rowIdx": 1
      },
      {
        "id": "k_e_8_2_ツェ",
        "char": "ツェ",
        "displayRomaji": "tse",
        "romajiAnswers": [
          "tse"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 8,
        "rowIdx": 2
      },
      {
        "id": "k_e_8_3_ツォ",
        "char": "ツォ",
        "displayRomaji": "tso",
        "romajiAnswers": [
          "tso"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 8,
        "rowIdx": 3
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 9,
    "headerLabel": "fa",
    "items": [
      {
        "id": "k_e_9_0_ファ",
        "char": "ファ",
        "displayRomaji": "fa",
        "romajiAnswers": [
          "fa"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 9,
        "rowIdx": 0
      },
      {
        "id": "k_e_9_1_フィ",
        "char": "フィ",
        "displayRomaji": "fi",
        "romajiAnswers": [
          "fi"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 9,
        "rowIdx": 1
      },
      {
        "id": "k_e_9_2_フェ",
        "char": "フェ",
        "displayRomaji": "fe",
        "romajiAnswers": [
          "fe"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 9,
        "rowIdx": 2
      },
      {
        "id": "k_e_9_3_フォ",
        "char": "フォ",
        "displayRomaji": "fo",
        "romajiAnswers": [
          "fo"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 9,
        "rowIdx": 3
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 10,
    "headerLabel": "vya",
    "items": [
      {
        "id": "k_e_10_0_ヴャ",
        "char": "ヴャ",
        "displayRomaji": "vya",
        "romajiAnswers": [
          "vya"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 10,
        "rowIdx": 0
      },
      {
        "id": "k_e_10_1_ヴュ",
        "char": "ヴュ",
        "displayRomaji": "vyu",
        "romajiAnswers": [
          "vyu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 10,
        "rowIdx": 1
      },
      {
        "id": "k_e_10_2_ヴョ",
        "char": "ヴョ",
        "displayRomaji": "vyo",
        "romajiAnswers": [
          "vyo"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 10,
        "rowIdx": 2
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 11,
    "headerLabel": "tyu",
    "items": [
      {
        "id": "k_e_11_0_テュ",
        "char": "テュ",
        "displayRomaji": "tyu",
        "romajiAnswers": [
          "tyu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 11,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 12,
    "headerLabel": "dyu",
    "items": [
      {
        "id": "k_e_12_0_デュ",
        "char": "デュ",
        "displayRomaji": "dyu",
        "romajiAnswers": [
          "dyu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 12,
        "rowIdx": 0
      }
    ]
  },
  {
    "script": "katakana",
    "category": "extended",
    "columnIdx": 13,
    "headerLabel": "fyu",
    "items": [
      {
        "id": "k_e_13_0_フュ",
        "char": "フュ",
        "displayRomaji": "fyu",
        "romajiAnswers": [
          "fyu"
        ],
        "script": "katakana",
        "category": "extended",
        "columnIdx": 13,
        "rowIdx": 0
      }
    ]
  }
];

export const allKanaItems: KanaItem[] = [
  {
    "id": "h_s_0_0_あ",
    "char": "あ",
    "displayRomaji": "a",
    "romajiAnswers": [
      "a"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 0
  },
  {
    "id": "h_s_0_1_い",
    "char": "い",
    "displayRomaji": "i",
    "romajiAnswers": [
      "i"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 1
  },
  {
    "id": "h_s_0_2_う",
    "char": "う",
    "displayRomaji": "u",
    "romajiAnswers": [
      "u"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 2
  },
  {
    "id": "h_s_0_3_え",
    "char": "え",
    "displayRomaji": "e",
    "romajiAnswers": [
      "e"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 3
  },
  {
    "id": "h_s_0_4_お",
    "char": "お",
    "displayRomaji": "o",
    "romajiAnswers": [
      "o"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 4
  },
  {
    "id": "h_s_1_0_か",
    "char": "か",
    "displayRomaji": "ka",
    "romajiAnswers": [
      "ka"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 0
  },
  {
    "id": "h_s_1_1_き",
    "char": "き",
    "displayRomaji": "ki",
    "romajiAnswers": [
      "ki"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 1
  },
  {
    "id": "h_s_1_2_く",
    "char": "く",
    "displayRomaji": "ku",
    "romajiAnswers": [
      "ku"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 2
  },
  {
    "id": "h_s_1_3_け",
    "char": "け",
    "displayRomaji": "ke",
    "romajiAnswers": [
      "ke"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 3
  },
  {
    "id": "h_s_1_4_こ",
    "char": "こ",
    "displayRomaji": "ko",
    "romajiAnswers": [
      "ko"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 4
  },
  {
    "id": "h_s_2_0_さ",
    "char": "さ",
    "displayRomaji": "sa",
    "romajiAnswers": [
      "sa"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 0
  },
  {
    "id": "h_s_2_1_し",
    "char": "し",
    "displayRomaji": "shi",
    "romajiAnswers": [
      "shi",
      "si",
      "ši"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 1
  },
  {
    "id": "h_s_2_2_す",
    "char": "す",
    "displayRomaji": "su",
    "romajiAnswers": [
      "su"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 2
  },
  {
    "id": "h_s_2_3_せ",
    "char": "せ",
    "displayRomaji": "se",
    "romajiAnswers": [
      "se"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 3
  },
  {
    "id": "h_s_2_4_そ",
    "char": "そ",
    "displayRomaji": "so",
    "romajiAnswers": [
      "so"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 4
  },
  {
    "id": "h_s_3_0_た",
    "char": "た",
    "displayRomaji": "ta",
    "romajiAnswers": [
      "ta"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 0
  },
  {
    "id": "h_s_3_1_ち",
    "char": "ち",
    "displayRomaji": "chi",
    "romajiAnswers": [
      "chi",
      "ti",
      "či"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 1
  },
  {
    "id": "h_s_3_2_つ",
    "char": "つ",
    "displayRomaji": "tsu",
    "romajiAnswers": [
      "tsu",
      "tu",
      "cu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 2
  },
  {
    "id": "h_s_3_3_て",
    "char": "て",
    "displayRomaji": "te",
    "romajiAnswers": [
      "te"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 3
  },
  {
    "id": "h_s_3_4_と",
    "char": "と",
    "displayRomaji": "to",
    "romajiAnswers": [
      "to"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 4
  },
  {
    "id": "h_s_4_0_な",
    "char": "な",
    "displayRomaji": "na",
    "romajiAnswers": [
      "na"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 0
  },
  {
    "id": "h_s_4_1_に",
    "char": "に",
    "displayRomaji": "ni",
    "romajiAnswers": [
      "ni"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 1
  },
  {
    "id": "h_s_4_2_ぬ",
    "char": "ぬ",
    "displayRomaji": "nu",
    "romajiAnswers": [
      "nu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 2
  },
  {
    "id": "h_s_4_3_ね",
    "char": "ね",
    "displayRomaji": "ne",
    "romajiAnswers": [
      "ne"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 3
  },
  {
    "id": "h_s_4_4_の",
    "char": "の",
    "displayRomaji": "no",
    "romajiAnswers": [
      "no"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 4
  },
  {
    "id": "h_s_5_0_は",
    "char": "は",
    "displayRomaji": "ha",
    "romajiAnswers": [
      "ha"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 0
  },
  {
    "id": "h_s_5_1_ひ",
    "char": "ひ",
    "displayRomaji": "hi",
    "romajiAnswers": [
      "hi"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 1
  },
  {
    "id": "h_s_5_2_ふ",
    "char": "ふ",
    "displayRomaji": "fu",
    "romajiAnswers": [
      "fu",
      "hu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 2
  },
  {
    "id": "h_s_5_3_へ",
    "char": "へ",
    "displayRomaji": "he",
    "romajiAnswers": [
      "he"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 3
  },
  {
    "id": "h_s_5_4_ほ",
    "char": "ほ",
    "displayRomaji": "ho",
    "romajiAnswers": [
      "ho"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 4
  },
  {
    "id": "h_s_6_0_ま",
    "char": "ま",
    "displayRomaji": "ma",
    "romajiAnswers": [
      "ma"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 0
  },
  {
    "id": "h_s_6_1_み",
    "char": "み",
    "displayRomaji": "mi",
    "romajiAnswers": [
      "mi"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 1
  },
  {
    "id": "h_s_6_2_む",
    "char": "む",
    "displayRomaji": "mu",
    "romajiAnswers": [
      "mu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 2
  },
  {
    "id": "h_s_6_3_め",
    "char": "め",
    "displayRomaji": "me",
    "romajiAnswers": [
      "me"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 3
  },
  {
    "id": "h_s_6_4_も",
    "char": "も",
    "displayRomaji": "mo",
    "romajiAnswers": [
      "mo"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 4
  },
  {
    "id": "h_s_7_0_や",
    "char": "や",
    "displayRomaji": "ya",
    "romajiAnswers": [
      "ya"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 0
  },
  {
    "id": "h_s_7_1_ゆ",
    "char": "ゆ",
    "displayRomaji": "yu",
    "romajiAnswers": [
      "yu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 1
  },
  {
    "id": "h_s_7_2_よ",
    "char": "よ",
    "displayRomaji": "yo",
    "romajiAnswers": [
      "yo"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 2
  },
  {
    "id": "h_s_8_0_ら",
    "char": "ら",
    "displayRomaji": "ra",
    "romajiAnswers": [
      "ra"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 0
  },
  {
    "id": "h_s_8_1_り",
    "char": "り",
    "displayRomaji": "ri",
    "romajiAnswers": [
      "ri"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 1
  },
  {
    "id": "h_s_8_2_る",
    "char": "る",
    "displayRomaji": "ru",
    "romajiAnswers": [
      "ru"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 2
  },
  {
    "id": "h_s_8_3_れ",
    "char": "れ",
    "displayRomaji": "re",
    "romajiAnswers": [
      "re"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 3
  },
  {
    "id": "h_s_8_4_ろ",
    "char": "ろ",
    "displayRomaji": "ro",
    "romajiAnswers": [
      "ro"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 4
  },
  {
    "id": "h_s_9_0_わ",
    "char": "わ",
    "displayRomaji": "wa",
    "romajiAnswers": [
      "wa"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 9,
    "rowIdx": 0
  },
  {
    "id": "h_s_9_1_を",
    "char": "を",
    "displayRomaji": "wo",
    "romajiAnswers": [
      "wo",
      "o"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 9,
    "rowIdx": 1
  },
  {
    "id": "h_s_10_0_ん",
    "char": "ん",
    "displayRomaji": "n",
    "romajiAnswers": [
      "n"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 10,
    "rowIdx": 0
  },
  {
    "id": "h_s_11_0_が",
    "char": "が",
    "displayRomaji": "ga",
    "romajiAnswers": [
      "ga"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 0
  },
  {
    "id": "h_s_11_1_ぎ",
    "char": "ぎ",
    "displayRomaji": "gi",
    "romajiAnswers": [
      "gi"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 1
  },
  {
    "id": "h_s_11_2_ぐ",
    "char": "ぐ",
    "displayRomaji": "gu",
    "romajiAnswers": [
      "gu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 2
  },
  {
    "id": "h_s_11_3_げ",
    "char": "げ",
    "displayRomaji": "ge",
    "romajiAnswers": [
      "ge"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 3
  },
  {
    "id": "h_s_11_4_ご",
    "char": "ご",
    "displayRomaji": "go",
    "romajiAnswers": [
      "go"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 4
  },
  {
    "id": "h_s_12_0_ざ",
    "char": "ざ",
    "displayRomaji": "za",
    "romajiAnswers": [
      "za"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 0
  },
  {
    "id": "h_s_12_1_じ",
    "char": "じ",
    "displayRomaji": "ji",
    "romajiAnswers": [
      "ji",
      "zi",
      "dži"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 1
  },
  {
    "id": "h_s_12_2_ず",
    "char": "ず",
    "displayRomaji": "zu",
    "romajiAnswers": [
      "zu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 2
  },
  {
    "id": "h_s_12_3_ぜ",
    "char": "ぜ",
    "displayRomaji": "ze",
    "romajiAnswers": [
      "ze"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 3
  },
  {
    "id": "h_s_12_4_ぞ",
    "char": "ぞ",
    "displayRomaji": "zo",
    "romajiAnswers": [
      "zo"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 4
  },
  {
    "id": "h_s_13_0_だ",
    "char": "だ",
    "displayRomaji": "da",
    "romajiAnswers": [
      "da"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 0
  },
  {
    "id": "h_s_13_1_ぢ",
    "char": "ぢ",
    "displayRomaji": "ji",
    "romajiAnswers": [
      "ji",
      "di",
      "dzi",
      "dži",
      "dji"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 1
  },
  {
    "id": "h_s_13_2_づ",
    "char": "づ",
    "displayRomaji": "zu",
    "romajiAnswers": [
      "zu",
      "du",
      "dzu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 2
  },
  {
    "id": "h_s_13_3_で",
    "char": "で",
    "displayRomaji": "de",
    "romajiAnswers": [
      "de"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 3
  },
  {
    "id": "h_s_13_4_ど",
    "char": "ど",
    "displayRomaji": "do",
    "romajiAnswers": [
      "do"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 4
  },
  {
    "id": "h_s_14_0_ば",
    "char": "ば",
    "displayRomaji": "ba",
    "romajiAnswers": [
      "ba"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 0
  },
  {
    "id": "h_s_14_1_び",
    "char": "び",
    "displayRomaji": "bi",
    "romajiAnswers": [
      "bi"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 1
  },
  {
    "id": "h_s_14_2_ぶ",
    "char": "ぶ",
    "displayRomaji": "bu",
    "romajiAnswers": [
      "bu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 2
  },
  {
    "id": "h_s_14_3_べ",
    "char": "べ",
    "displayRomaji": "be",
    "romajiAnswers": [
      "be"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 3
  },
  {
    "id": "h_s_14_4_ぼ",
    "char": "ぼ",
    "displayRomaji": "bo",
    "romajiAnswers": [
      "bo"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 4
  },
  {
    "id": "h_s_15_0_ぱ",
    "char": "ぱ",
    "displayRomaji": "pa",
    "romajiAnswers": [
      "pa"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 0
  },
  {
    "id": "h_s_15_1_ぴ",
    "char": "ぴ",
    "displayRomaji": "pi",
    "romajiAnswers": [
      "pi"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 1
  },
  {
    "id": "h_s_15_2_ぷ",
    "char": "ぷ",
    "displayRomaji": "pu",
    "romajiAnswers": [
      "pu"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 2
  },
  {
    "id": "h_s_15_3_ぺ",
    "char": "ぺ",
    "displayRomaji": "pe",
    "romajiAnswers": [
      "pe"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 3
  },
  {
    "id": "h_s_15_4_ぽ",
    "char": "ぽ",
    "displayRomaji": "po",
    "romajiAnswers": [
      "po"
    ],
    "script": "hiragana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 4
  },
  {
    "id": "h_d_0_0_きゃ",
    "char": "きゃ",
    "displayRomaji": "kya",
    "romajiAnswers": [
      "kya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 0
  },
  {
    "id": "h_d_0_1_きゅ",
    "char": "きゅ",
    "displayRomaji": "kyu",
    "romajiAnswers": [
      "kyu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 1
  },
  {
    "id": "h_d_0_2_きょ",
    "char": "きょ",
    "displayRomaji": "kyo",
    "romajiAnswers": [
      "kyo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 2
  },
  {
    "id": "h_d_1_0_しゃ",
    "char": "しゃ",
    "displayRomaji": "sha",
    "romajiAnswers": [
      "sha",
      "sya",
      "ša"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 0
  },
  {
    "id": "h_d_1_1_しゅ",
    "char": "しゅ",
    "displayRomaji": "shu",
    "romajiAnswers": [
      "shu",
      "syu",
      "šu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 1
  },
  {
    "id": "h_d_1_2_しょ",
    "char": "しょ",
    "displayRomaji": "sho",
    "romajiAnswers": [
      "sho",
      "syo",
      "šo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 2
  },
  {
    "id": "h_d_2_0_ちゃ",
    "char": "ちゃ",
    "displayRomaji": "cha",
    "romajiAnswers": [
      "cha",
      "tya",
      "ča"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 0
  },
  {
    "id": "h_d_2_1_ちゅ",
    "char": "ちゅ",
    "displayRomaji": "chu",
    "romajiAnswers": [
      "chu",
      "tyu",
      "ču"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 1
  },
  {
    "id": "h_d_2_2_ちょ",
    "char": "ちょ",
    "displayRomaji": "cho",
    "romajiAnswers": [
      "cho",
      "tyo",
      "čo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 2
  },
  {
    "id": "h_d_3_0_にゃ",
    "char": "にゃ",
    "displayRomaji": "nya",
    "romajiAnswers": [
      "nya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 0
  },
  {
    "id": "h_d_3_1_にゅ",
    "char": "にゅ",
    "displayRomaji": "nyu",
    "romajiAnswers": [
      "nyu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 1
  },
  {
    "id": "h_d_3_2_にょ",
    "char": "にょ",
    "displayRomaji": "nyo",
    "romajiAnswers": [
      "nyo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 2
  },
  {
    "id": "h_d_4_0_ひゃ",
    "char": "ひゃ",
    "displayRomaji": "hya",
    "romajiAnswers": [
      "hya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 0
  },
  {
    "id": "h_d_4_1_ひゅ",
    "char": "ひゅ",
    "displayRomaji": "hyu",
    "romajiAnswers": [
      "hyu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 1
  },
  {
    "id": "h_d_4_2_ひょ",
    "char": "ひょ",
    "displayRomaji": "hyo",
    "romajiAnswers": [
      "hyo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 2
  },
  {
    "id": "h_d_5_0_みゃ",
    "char": "みゃ",
    "displayRomaji": "mya",
    "romajiAnswers": [
      "mya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 0
  },
  {
    "id": "h_d_5_1_みゅ",
    "char": "みゅ",
    "displayRomaji": "myu",
    "romajiAnswers": [
      "myu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 1
  },
  {
    "id": "h_d_5_2_みょ",
    "char": "みょ",
    "displayRomaji": "myo",
    "romajiAnswers": [
      "myo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 2
  },
  {
    "id": "h_d_6_0_りゃ",
    "char": "りゃ",
    "displayRomaji": "rya",
    "romajiAnswers": [
      "rya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 0
  },
  {
    "id": "h_d_6_1_りゅ",
    "char": "りゅ",
    "displayRomaji": "ryu",
    "romajiAnswers": [
      "ryu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 1
  },
  {
    "id": "h_d_6_2_りょ",
    "char": "りょ",
    "displayRomaji": "ryo",
    "romajiAnswers": [
      "ryo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 2
  },
  {
    "id": "h_d_7_0_ぎゃ",
    "char": "ぎゃ",
    "displayRomaji": "gya",
    "romajiAnswers": [
      "gya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 0
  },
  {
    "id": "h_d_7_1_ぎゅ",
    "char": "ぎゅ",
    "displayRomaji": "gyu",
    "romajiAnswers": [
      "gyu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 1
  },
  {
    "id": "h_d_7_2_ぎょ",
    "char": "ぎょ",
    "displayRomaji": "gyo",
    "romajiAnswers": [
      "gyo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 2
  },
  {
    "id": "h_d_8_0_じゃ",
    "char": "じゃ",
    "displayRomaji": "ja",
    "romajiAnswers": [
      "ja",
      "jya",
      "zya",
      "dža"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 0
  },
  {
    "id": "h_d_8_1_じゅ",
    "char": "じゅ",
    "displayRomaji": "ju",
    "romajiAnswers": [
      "ju",
      "jyu",
      "zyu",
      "džu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 1
  },
  {
    "id": "h_d_8_2_じょ",
    "char": "じょ",
    "displayRomaji": "jo",
    "romajiAnswers": [
      "jo",
      "jyo",
      "zyo",
      "džo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 2
  },
  {
    "id": "h_d_9_0_ぢゃ",
    "char": "ぢゃ",
    "displayRomaji": "ja",
    "romajiAnswers": [
      "ja",
      "dya",
      "zya",
      "dža"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 0
  },
  {
    "id": "h_d_9_1_ぢゅ",
    "char": "ぢゅ",
    "displayRomaji": "ju",
    "romajiAnswers": [
      "ju",
      "dyu",
      "zyu",
      "džu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 1
  },
  {
    "id": "h_d_9_2_ぢょ",
    "char": "ぢょ",
    "displayRomaji": "jo",
    "romajiAnswers": [
      "jo",
      "dyo",
      "zyo",
      "džo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 2
  },
  {
    "id": "h_d_10_0_びゃ",
    "char": "びゃ",
    "displayRomaji": "bya",
    "romajiAnswers": [
      "bya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 0
  },
  {
    "id": "h_d_10_1_びゅ",
    "char": "びゅ",
    "displayRomaji": "byu",
    "romajiAnswers": [
      "byu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 1
  },
  {
    "id": "h_d_10_2_びょ",
    "char": "びょ",
    "displayRomaji": "byo",
    "romajiAnswers": [
      "byo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 2
  },
  {
    "id": "h_d_11_0_ぴゃ",
    "char": "ぴゃ",
    "displayRomaji": "pya",
    "romajiAnswers": [
      "pya"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 0
  },
  {
    "id": "h_d_11_1_ぴゅ",
    "char": "ぴゅ",
    "displayRomaji": "pyu",
    "romajiAnswers": [
      "pyu"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 1
  },
  {
    "id": "h_d_11_2_ぴょ",
    "char": "ぴょ",
    "displayRomaji": "pyo",
    "romajiAnswers": [
      "pyo"
    ],
    "script": "hiragana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 2
  },
  {
    "id": "k_s_0_0_ア",
    "char": "ア",
    "displayRomaji": "a",
    "romajiAnswers": [
      "a"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 0
  },
  {
    "id": "k_s_0_1_イ",
    "char": "イ",
    "displayRomaji": "i",
    "romajiAnswers": [
      "i"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 1
  },
  {
    "id": "k_s_0_2_ウ",
    "char": "ウ",
    "displayRomaji": "u",
    "romajiAnswers": [
      "u"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 2
  },
  {
    "id": "k_s_0_3_エ",
    "char": "エ",
    "displayRomaji": "e",
    "romajiAnswers": [
      "e"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 3
  },
  {
    "id": "k_s_0_4_オ",
    "char": "オ",
    "displayRomaji": "o",
    "romajiAnswers": [
      "o"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 0,
    "rowIdx": 4
  },
  {
    "id": "k_s_1_0_カ",
    "char": "カ",
    "displayRomaji": "ka",
    "romajiAnswers": [
      "ka"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 0
  },
  {
    "id": "k_s_1_1_キ",
    "char": "キ",
    "displayRomaji": "ki",
    "romajiAnswers": [
      "ki"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 1
  },
  {
    "id": "k_s_1_2_ク",
    "char": "ク",
    "displayRomaji": "ku",
    "romajiAnswers": [
      "ku"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 2
  },
  {
    "id": "k_s_1_3_ケ",
    "char": "ケ",
    "displayRomaji": "ke",
    "romajiAnswers": [
      "ke"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 3
  },
  {
    "id": "k_s_1_4_コ",
    "char": "コ",
    "displayRomaji": "ko",
    "romajiAnswers": [
      "ko"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 1,
    "rowIdx": 4
  },
  {
    "id": "k_s_2_0_サ",
    "char": "サ",
    "displayRomaji": "sa",
    "romajiAnswers": [
      "sa"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 0
  },
  {
    "id": "k_s_2_1_シ",
    "char": "シ",
    "displayRomaji": "shi",
    "romajiAnswers": [
      "shi",
      "si",
      "ši"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 1
  },
  {
    "id": "k_s_2_2_ス",
    "char": "ス",
    "displayRomaji": "su",
    "romajiAnswers": [
      "su"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 2
  },
  {
    "id": "k_s_2_3_セ",
    "char": "セ",
    "displayRomaji": "se",
    "romajiAnswers": [
      "se"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 3
  },
  {
    "id": "k_s_2_4_ソ",
    "char": "ソ",
    "displayRomaji": "so",
    "romajiAnswers": [
      "so"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 2,
    "rowIdx": 4
  },
  {
    "id": "k_s_3_0_タ",
    "char": "タ",
    "displayRomaji": "ta",
    "romajiAnswers": [
      "ta"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 0
  },
  {
    "id": "k_s_3_1_チ",
    "char": "チ",
    "displayRomaji": "chi",
    "romajiAnswers": [
      "chi",
      "ti",
      "či"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 1
  },
  {
    "id": "k_s_3_2_ツ",
    "char": "ツ",
    "displayRomaji": "tsu",
    "romajiAnswers": [
      "tsu",
      "tu",
      "cu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 2
  },
  {
    "id": "k_s_3_3_テ",
    "char": "テ",
    "displayRomaji": "te",
    "romajiAnswers": [
      "te"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 3
  },
  {
    "id": "k_s_3_4_ト",
    "char": "ト",
    "displayRomaji": "to",
    "romajiAnswers": [
      "to"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 3,
    "rowIdx": 4
  },
  {
    "id": "k_s_4_0_ナ",
    "char": "ナ",
    "displayRomaji": "na",
    "romajiAnswers": [
      "na"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 0
  },
  {
    "id": "k_s_4_1_ニ",
    "char": "ニ",
    "displayRomaji": "ni",
    "romajiAnswers": [
      "ni"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 1
  },
  {
    "id": "k_s_4_2_ヌ",
    "char": "ヌ",
    "displayRomaji": "nu",
    "romajiAnswers": [
      "nu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 2
  },
  {
    "id": "k_s_4_3_ネ",
    "char": "ネ",
    "displayRomaji": "ne",
    "romajiAnswers": [
      "ne"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 3
  },
  {
    "id": "k_s_4_4_ノ",
    "char": "ノ",
    "displayRomaji": "no",
    "romajiAnswers": [
      "no"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 4,
    "rowIdx": 4
  },
  {
    "id": "k_s_5_0_ハ",
    "char": "ハ",
    "displayRomaji": "ha",
    "romajiAnswers": [
      "ha"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 0
  },
  {
    "id": "k_s_5_1_ヒ",
    "char": "ヒ",
    "displayRomaji": "hi",
    "romajiAnswers": [
      "hi"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 1
  },
  {
    "id": "k_s_5_2_フ",
    "char": "フ",
    "displayRomaji": "fu",
    "romajiAnswers": [
      "fu",
      "hu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 2
  },
  {
    "id": "k_s_5_3_ヘ",
    "char": "ヘ",
    "displayRomaji": "he",
    "romajiAnswers": [
      "he"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 3
  },
  {
    "id": "k_s_5_4_ホ",
    "char": "ホ",
    "displayRomaji": "ho",
    "romajiAnswers": [
      "ho"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 5,
    "rowIdx": 4
  },
  {
    "id": "k_s_6_0_マ",
    "char": "マ",
    "displayRomaji": "ma",
    "romajiAnswers": [
      "ma"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 0
  },
  {
    "id": "k_s_6_1_ミ",
    "char": "ミ",
    "displayRomaji": "mi",
    "romajiAnswers": [
      "mi"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 1
  },
  {
    "id": "k_s_6_2_ム",
    "char": "ム",
    "displayRomaji": "mu",
    "romajiAnswers": [
      "mu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 2
  },
  {
    "id": "k_s_6_3_メ",
    "char": "メ",
    "displayRomaji": "me",
    "romajiAnswers": [
      "me"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 3
  },
  {
    "id": "k_s_6_4_モ",
    "char": "モ",
    "displayRomaji": "mo",
    "romajiAnswers": [
      "mo"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 6,
    "rowIdx": 4
  },
  {
    "id": "k_s_7_0_ヤ",
    "char": "ヤ",
    "displayRomaji": "ya",
    "romajiAnswers": [
      "ya"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 0
  },
  {
    "id": "k_s_7_1_ユ",
    "char": "ユ",
    "displayRomaji": "yu",
    "romajiAnswers": [
      "yu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 1
  },
  {
    "id": "k_s_7_2_ヨ",
    "char": "ヨ",
    "displayRomaji": "yo",
    "romajiAnswers": [
      "yo"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 7,
    "rowIdx": 2
  },
  {
    "id": "k_s_8_0_ラ",
    "char": "ラ",
    "displayRomaji": "ra",
    "romajiAnswers": [
      "ra"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 0
  },
  {
    "id": "k_s_8_1_リ",
    "char": "リ",
    "displayRomaji": "ri",
    "romajiAnswers": [
      "ri"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 1
  },
  {
    "id": "k_s_8_2_ル",
    "char": "ル",
    "displayRomaji": "ru",
    "romajiAnswers": [
      "ru"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 2
  },
  {
    "id": "k_s_8_3_レ",
    "char": "レ",
    "displayRomaji": "re",
    "romajiAnswers": [
      "re"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 3
  },
  {
    "id": "k_s_8_4_ロ",
    "char": "ロ",
    "displayRomaji": "ro",
    "romajiAnswers": [
      "ro"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 8,
    "rowIdx": 4
  },
  {
    "id": "k_s_9_0_ワ",
    "char": "ワ",
    "displayRomaji": "wa",
    "romajiAnswers": [
      "wa"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 9,
    "rowIdx": 0
  },
  {
    "id": "k_s_9_1_ヲ",
    "char": "ヲ",
    "displayRomaji": "wo",
    "romajiAnswers": [
      "wo",
      "o"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 9,
    "rowIdx": 1
  },
  {
    "id": "k_s_10_0_ン",
    "char": "ン",
    "displayRomaji": "n",
    "romajiAnswers": [
      "n"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 10,
    "rowIdx": 0
  },
  {
    "id": "k_s_11_0_ガ",
    "char": "ガ",
    "displayRomaji": "ga",
    "romajiAnswers": [
      "ga"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 0
  },
  {
    "id": "k_s_11_1_ギ",
    "char": "ギ",
    "displayRomaji": "gi",
    "romajiAnswers": [
      "gi"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 1
  },
  {
    "id": "k_s_11_2_グ",
    "char": "グ",
    "displayRomaji": "gu",
    "romajiAnswers": [
      "gu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 2
  },
  {
    "id": "k_s_11_3_ゲ",
    "char": "ゲ",
    "displayRomaji": "ge",
    "romajiAnswers": [
      "ge"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 3
  },
  {
    "id": "k_s_11_4_ゴ",
    "char": "ゴ",
    "displayRomaji": "go",
    "romajiAnswers": [
      "go"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 11,
    "rowIdx": 4
  },
  {
    "id": "k_s_12_0_ザ",
    "char": "ザ",
    "displayRomaji": "za",
    "romajiAnswers": [
      "za"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 0
  },
  {
    "id": "k_s_12_1_ジ",
    "char": "ジ",
    "displayRomaji": "ji",
    "romajiAnswers": [
      "ji",
      "zi",
      "dži"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 1
  },
  {
    "id": "k_s_12_2_ズ",
    "char": "ズ",
    "displayRomaji": "zu",
    "romajiAnswers": [
      "zu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 2
  },
  {
    "id": "k_s_12_3_ゼ",
    "char": "ゼ",
    "displayRomaji": "ze",
    "romajiAnswers": [
      "ze"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 3
  },
  {
    "id": "k_s_12_4_ゾ",
    "char": "ゾ",
    "displayRomaji": "zo",
    "romajiAnswers": [
      "zo"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 12,
    "rowIdx": 4
  },
  {
    "id": "k_s_13_0_ダ",
    "char": "ダ",
    "displayRomaji": "da",
    "romajiAnswers": [
      "da"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 0
  },
  {
    "id": "k_s_13_1_ヂ",
    "char": "ヂ",
    "displayRomaji": "ji",
    "romajiAnswers": [
      "ji",
      "di",
      "dži",
      "dji"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 1
  },
  {
    "id": "k_s_13_2_ヅ",
    "char": "ヅ",
    "displayRomaji": "zu",
    "romajiAnswers": [
      "zu",
      "du",
      "dzu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 2
  },
  {
    "id": "k_s_13_3_デ",
    "char": "デ",
    "displayRomaji": "de",
    "romajiAnswers": [
      "de"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 3
  },
  {
    "id": "k_s_13_4_ド",
    "char": "ド",
    "displayRomaji": "do",
    "romajiAnswers": [
      "do"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 13,
    "rowIdx": 4
  },
  {
    "id": "k_s_14_0_バ",
    "char": "バ",
    "displayRomaji": "ba",
    "romajiAnswers": [
      "ba"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 0
  },
  {
    "id": "k_s_14_1_ビ",
    "char": "ビ",
    "displayRomaji": "bi",
    "romajiAnswers": [
      "bi"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 1
  },
  {
    "id": "k_s_14_2_ブ",
    "char": "ブ",
    "displayRomaji": "bu",
    "romajiAnswers": [
      "bu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 2
  },
  {
    "id": "k_s_14_3_ベ",
    "char": "ベ",
    "displayRomaji": "be",
    "romajiAnswers": [
      "be"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 3
  },
  {
    "id": "k_s_14_4_ボ",
    "char": "ボ",
    "displayRomaji": "bo",
    "romajiAnswers": [
      "bo"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 14,
    "rowIdx": 4
  },
  {
    "id": "k_s_15_0_パ",
    "char": "パ",
    "displayRomaji": "pa",
    "romajiAnswers": [
      "pa"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 0
  },
  {
    "id": "k_s_15_1_ピ",
    "char": "ピ",
    "displayRomaji": "pi",
    "romajiAnswers": [
      "pi"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 1
  },
  {
    "id": "k_s_15_2_プ",
    "char": "プ",
    "displayRomaji": "pu",
    "romajiAnswers": [
      "pu"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 2
  },
  {
    "id": "k_s_15_3_ペ",
    "char": "ペ",
    "displayRomaji": "pe",
    "romajiAnswers": [
      "pe"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 3
  },
  {
    "id": "k_s_15_4_ポ",
    "char": "ポ",
    "displayRomaji": "po",
    "romajiAnswers": [
      "po"
    ],
    "script": "katakana",
    "category": "single",
    "columnIdx": 15,
    "rowIdx": 4
  },
  {
    "id": "k_d_0_0_キャ",
    "char": "キャ",
    "displayRomaji": "kya",
    "romajiAnswers": [
      "kya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 0
  },
  {
    "id": "k_d_0_1_キュ",
    "char": "キュ",
    "displayRomaji": "kyu",
    "romajiAnswers": [
      "kyu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 1
  },
  {
    "id": "k_d_0_2_キョ",
    "char": "キョ",
    "displayRomaji": "kyo",
    "romajiAnswers": [
      "kyo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 0,
    "rowIdx": 2
  },
  {
    "id": "k_d_1_0_シャ",
    "char": "シャ",
    "displayRomaji": "sha",
    "romajiAnswers": [
      "sha",
      "sya",
      "ša"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 0
  },
  {
    "id": "k_d_1_1_シュ",
    "char": "シュ",
    "displayRomaji": "shu",
    "romajiAnswers": [
      "shu",
      "syu",
      "šu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 1
  },
  {
    "id": "k_d_1_2_ショ",
    "char": "ショ",
    "displayRomaji": "sho",
    "romajiAnswers": [
      "sho",
      "syo",
      "šo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 1,
    "rowIdx": 2
  },
  {
    "id": "k_d_2_0_チャ",
    "char": "チャ",
    "displayRomaji": "cha",
    "romajiAnswers": [
      "cha",
      "tya",
      "ča"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 0
  },
  {
    "id": "k_d_2_1_チュ",
    "char": "チュ",
    "displayRomaji": "chu",
    "romajiAnswers": [
      "chu",
      "tyu",
      "ču"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 1
  },
  {
    "id": "k_d_2_2_チョ",
    "char": "チョ",
    "displayRomaji": "cho",
    "romajiAnswers": [
      "cho",
      "tyo",
      "čo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 2,
    "rowIdx": 2
  },
  {
    "id": "k_d_3_0_ニャ",
    "char": "ニャ",
    "displayRomaji": "nya",
    "romajiAnswers": [
      "nya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 0
  },
  {
    "id": "k_d_3_1_ニュ",
    "char": "ニュ",
    "displayRomaji": "nyu",
    "romajiAnswers": [
      "nyu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 1
  },
  {
    "id": "k_d_3_2_ニョ",
    "char": "ニョ",
    "displayRomaji": "nyo",
    "romajiAnswers": [
      "nyo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 3,
    "rowIdx": 2
  },
  {
    "id": "k_d_4_0_ヒャ",
    "char": "ヒャ",
    "displayRomaji": "hya",
    "romajiAnswers": [
      "hya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 0
  },
  {
    "id": "k_d_4_1_ヒュ",
    "char": "ヒュ",
    "displayRomaji": "hyu",
    "romajiAnswers": [
      "hyu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 1
  },
  {
    "id": "k_d_4_2_ヒョ",
    "char": "ヒョ",
    "displayRomaji": "hyo",
    "romajiAnswers": [
      "hyo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 4,
    "rowIdx": 2
  },
  {
    "id": "k_d_5_0_ミャ",
    "char": "ミャ",
    "displayRomaji": "mya",
    "romajiAnswers": [
      "mya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 0
  },
  {
    "id": "k_d_5_1_ミュ",
    "char": "ミュ",
    "displayRomaji": "myu",
    "romajiAnswers": [
      "myu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 1
  },
  {
    "id": "k_d_5_2_ミョ",
    "char": "ミョ",
    "displayRomaji": "myo",
    "romajiAnswers": [
      "myo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 5,
    "rowIdx": 2
  },
  {
    "id": "k_d_6_0_リャ",
    "char": "リャ",
    "displayRomaji": "rya",
    "romajiAnswers": [
      "rya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 0
  },
  {
    "id": "k_d_6_1_リュ",
    "char": "リュ",
    "displayRomaji": "ryu",
    "romajiAnswers": [
      "ryu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 1
  },
  {
    "id": "k_d_6_2_リョ",
    "char": "リョ",
    "displayRomaji": "ryo",
    "romajiAnswers": [
      "ryo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 6,
    "rowIdx": 2
  },
  {
    "id": "k_d_7_0_ギャ",
    "char": "ギャ",
    "displayRomaji": "gya",
    "romajiAnswers": [
      "gya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 0
  },
  {
    "id": "k_d_7_1_ギュ",
    "char": "ギュ",
    "displayRomaji": "gyu",
    "romajiAnswers": [
      "gyu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 1
  },
  {
    "id": "k_d_7_2_ギョ",
    "char": "ギョ",
    "displayRomaji": "gyo",
    "romajiAnswers": [
      "gyo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 7,
    "rowIdx": 2
  },
  {
    "id": "k_d_8_0_ジャ",
    "char": "ジャ",
    "displayRomaji": "ja",
    "romajiAnswers": [
      "ja",
      "jya",
      "zya",
      "dža"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 0
  },
  {
    "id": "k_d_8_1_ジュ",
    "char": "ジュ",
    "displayRomaji": "ju",
    "romajiAnswers": [
      "ju",
      "jyu",
      "zyu",
      "džu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 1
  },
  {
    "id": "k_d_8_2_ジョ",
    "char": "ジョ",
    "displayRomaji": "jo",
    "romajiAnswers": [
      "jo",
      "jyo",
      "zyo",
      "džo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 8,
    "rowIdx": 2
  },
  {
    "id": "k_d_9_0_ヂャ",
    "char": "ヂャ",
    "displayRomaji": "ja",
    "romajiAnswers": [
      "ja",
      "dya",
      "zya",
      "dža"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 0
  },
  {
    "id": "k_d_9_1_ヂュ",
    "char": "ヂュ",
    "displayRomaji": "ju",
    "romajiAnswers": [
      "ju",
      "dyu",
      "zyu",
      "džu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 1
  },
  {
    "id": "k_d_9_2_ヂョ",
    "char": "ヂョ",
    "displayRomaji": "jo",
    "romajiAnswers": [
      "jo",
      "dyo",
      "zyo",
      "džo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 9,
    "rowIdx": 2
  },
  {
    "id": "k_d_10_0_ビャ",
    "char": "ビャ",
    "displayRomaji": "bya",
    "romajiAnswers": [
      "bya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 0
  },
  {
    "id": "k_d_10_1_ビュ",
    "char": "ビュ",
    "displayRomaji": "byu",
    "romajiAnswers": [
      "byu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 1
  },
  {
    "id": "k_d_10_2_ビョ",
    "char": "ビョ",
    "displayRomaji": "byo",
    "romajiAnswers": [
      "byo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 10,
    "rowIdx": 2
  },
  {
    "id": "k_d_11_0_ピャ",
    "char": "ピャ",
    "displayRomaji": "pya",
    "romajiAnswers": [
      "pya"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 0
  },
  {
    "id": "k_d_11_1_ピュ",
    "char": "ピュ",
    "displayRomaji": "pyu",
    "romajiAnswers": [
      "pyu"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 1
  },
  {
    "id": "k_d_11_2_ピョ",
    "char": "ピョ",
    "displayRomaji": "pyo",
    "romajiAnswers": [
      "pyo"
    ],
    "script": "katakana",
    "category": "double",
    "columnIdx": 11,
    "rowIdx": 2
  },
  {
    "id": "k_e_0_0_イェ",
    "char": "イェ",
    "displayRomaji": "ye",
    "romajiAnswers": [
      "ye"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 0,
    "rowIdx": 0
  },
  {
    "id": "k_e_1_0_ウィ",
    "char": "ウィ",
    "displayRomaji": "wi",
    "romajiAnswers": [
      "wi"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 1,
    "rowIdx": 0
  },
  {
    "id": "k_e_1_1_ウェ",
    "char": "ウェ",
    "displayRomaji": "we",
    "romajiAnswers": [
      "we"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 1,
    "rowIdx": 1
  },
  {
    "id": "k_e_1_2_ウォ",
    "char": "ウォ",
    "displayRomaji": "wo",
    "romajiAnswers": [
      "wo"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 1,
    "rowIdx": 2
  },
  {
    "id": "k_e_2_0_ヴァ",
    "char": "ヴァ",
    "displayRomaji": "va",
    "romajiAnswers": [
      "va"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "rowIdx": 0
  },
  {
    "id": "k_e_2_1_ヴィ",
    "char": "ヴィ",
    "displayRomaji": "vi",
    "romajiAnswers": [
      "vi"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "rowIdx": 1
  },
  {
    "id": "k_e_2_2_ヴ",
    "char": "ヴ",
    "displayRomaji": "vu",
    "romajiAnswers": [
      "vu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "rowIdx": 2
  },
  {
    "id": "k_e_2_3_ヴェ",
    "char": "ヴェ",
    "displayRomaji": "ve",
    "romajiAnswers": [
      "ve"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "rowIdx": 3
  },
  {
    "id": "k_e_2_4_ヴォ",
    "char": "ヴォ",
    "displayRomaji": "vo",
    "romajiAnswers": [
      "vo"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 2,
    "rowIdx": 4
  },
  {
    "id": "k_e_3_0_シェ",
    "char": "シェ",
    "displayRomaji": "she",
    "romajiAnswers": [
      "she"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 3,
    "rowIdx": 0
  },
  {
    "id": "k_e_4_0_ジェ",
    "char": "ジェ",
    "displayRomaji": "je",
    "romajiAnswers": [
      "je"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 4,
    "rowIdx": 0
  },
  {
    "id": "k_e_5_0_チェ",
    "char": "チェ",
    "displayRomaji": "che",
    "romajiAnswers": [
      "che"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 5,
    "rowIdx": 0
  },
  {
    "id": "k_e_6_0_ティ",
    "char": "ティ",
    "displayRomaji": "ti",
    "romajiAnswers": [
      "ti"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 6,
    "rowIdx": 0
  },
  {
    "id": "k_e_6_1_トゥ",
    "char": "トゥ",
    "displayRomaji": "tu",
    "romajiAnswers": [
      "tu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 6,
    "rowIdx": 1
  },
  {
    "id": "k_e_7_0_ディ",
    "char": "ディ",
    "displayRomaji": "di",
    "romajiAnswers": [
      "di"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 7,
    "rowIdx": 0
  },
  {
    "id": "k_e_7_1_ドゥ",
    "char": "ドゥ",
    "displayRomaji": "du",
    "romajiAnswers": [
      "du"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 7,
    "rowIdx": 1
  },
  {
    "id": "k_e_8_0_ツァ",
    "char": "ツァ",
    "displayRomaji": "tsa",
    "romajiAnswers": [
      "tsa"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 8,
    "rowIdx": 0
  },
  {
    "id": "k_e_8_1_ツィ",
    "char": "ツィ",
    "displayRomaji": "tsi",
    "romajiAnswers": [
      "tsi"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 8,
    "rowIdx": 1
  },
  {
    "id": "k_e_8_2_ツェ",
    "char": "ツェ",
    "displayRomaji": "tse",
    "romajiAnswers": [
      "tse"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 8,
    "rowIdx": 2
  },
  {
    "id": "k_e_8_3_ツォ",
    "char": "ツォ",
    "displayRomaji": "tso",
    "romajiAnswers": [
      "tso"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 8,
    "rowIdx": 3
  },
  {
    "id": "k_e_9_0_ファ",
    "char": "ファ",
    "displayRomaji": "fa",
    "romajiAnswers": [
      "fa"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 9,
    "rowIdx": 0
  },
  {
    "id": "k_e_9_1_フィ",
    "char": "フィ",
    "displayRomaji": "fi",
    "romajiAnswers": [
      "fi"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 9,
    "rowIdx": 1
  },
  {
    "id": "k_e_9_2_フェ",
    "char": "フェ",
    "displayRomaji": "fe",
    "romajiAnswers": [
      "fe"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 9,
    "rowIdx": 2
  },
  {
    "id": "k_e_9_3_フォ",
    "char": "フォ",
    "displayRomaji": "fo",
    "romajiAnswers": [
      "fo"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 9,
    "rowIdx": 3
  },
  {
    "id": "k_e_10_0_ヴャ",
    "char": "ヴャ",
    "displayRomaji": "vya",
    "romajiAnswers": [
      "vya"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 10,
    "rowIdx": 0
  },
  {
    "id": "k_e_10_1_ヴュ",
    "char": "ヴュ",
    "displayRomaji": "vyu",
    "romajiAnswers": [
      "vyu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 10,
    "rowIdx": 1
  },
  {
    "id": "k_e_10_2_ヴョ",
    "char": "ヴョ",
    "displayRomaji": "vyo",
    "romajiAnswers": [
      "vyo"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 10,
    "rowIdx": 2
  },
  {
    "id": "k_e_11_0_テュ",
    "char": "テュ",
    "displayRomaji": "tyu",
    "romajiAnswers": [
      "tyu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 11,
    "rowIdx": 0
  },
  {
    "id": "k_e_12_0_デュ",
    "char": "デュ",
    "displayRomaji": "dyu",
    "romajiAnswers": [
      "dyu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 12,
    "rowIdx": 0
  },
  {
    "id": "k_e_13_0_フュ",
    "char": "フュ",
    "displayRomaji": "fyu",
    "romajiAnswers": [
      "fyu"
    ],
    "script": "katakana",
    "category": "extended",
    "columnIdx": 13,
    "rowIdx": 0
  }
];

export const kanaMap = new Map<string, KanaItem>(allKanaItems.map(item => [item.id, item]));
