// On-the-fly Romaji to Hiragana / Katakana IME converter

const HIRAGANA_MAP: Record<string, string> = {
  // Gojuon
  a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
  ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
  sa: 'さ', shi: 'し', si: 'し', su: 'す', se: 'せ', so: 'そ',
  ta: 'た', chi: 'ち', ti: 'ち', tsu: 'つ', tu: 'つ', te: 'て', to: 'と',
  na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
  ha: 'は', hi: 'ひ', fu: 'ふ', hu: 'ふ', he: 'へ', ho: 'ほ',
  ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
  ya: 'や', yu: 'ゆ', yo: 'よ',
  ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
  wa: 'わ', wo: 'を',
  nn: 'ん', "n'": 'ん',

  // Dakuon & Handakuon
  ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
  za: 'ざ', ji: 'じ', zi: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
  da: 'だ', di: 'ぢ', dji: 'ぢ', du: 'づ', dzu: 'づ', de: 'で', do: 'ド',
  ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
  pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',

  // Yoon
  kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ',
  sha: 'しゃ', sya: 'しゃ', shu: 'しゅ', syu: 'しゅ', sho: 'しょ', syo: 'しょ',
  cha: 'ちゃ', tya: 'ちゃ', chu: 'ちゅ', tyu: 'ちゅ', cho: 'ちょ', tyo: 'ちょ',
  nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
  hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ',
  mya: 'みゃ', myu: 'みゅ', myo: 'みょ',
  rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ',
  gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
  ja: 'じゃ', jya: 'じゃ', zya: 'じゃ', ju: 'じゅ', jyu: 'じゅ', zyu: 'じゅ', jo: 'じょ', jyo: 'じょ', zyo: 'じょ',
  dja: 'ぢゃ', dya: 'ぢゃ', dju: 'ぢゅ', dyu: 'ぢゅ', djo: 'ぢょ', dyo: 'ぢょ',
  bya: 'びゃ', byu: 'びゅ', byo: 'びょ',
  pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ',
};

const KATAKANA_MAP: Record<string, string> = {
  // Gojuon
  a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ',
  ka: 'カ', ki: 'キ', ku: 'ク', ke: 'ケ', ko: 'コ',
  sa: 'サ', shi: 'シ', si: 'シ', su: 'ス', se: 'セ', so: 'ソ',
  ta: 'タ', chi: 'チ', ti: 'チ', tsu: 'ツ', tu: 'ツ', te: 'テ', to: 'ト',
  na: 'ナ', ni: 'ニ', nu: 'ヌ', ne: 'ネ', no: 'ノ',
  ha: 'ハ', hi: 'ヒ', fu: 'フ', hu: 'フ', he: 'ヘ', ho: 'ホ',
  ma: 'マ', mi: 'ミ', mu: 'ム', me: 'メ', mo: 'モ',
  ya: 'ヤ', yu: 'ユ', yo: 'ヨ',
  ra: 'ラ', ri: 'リ', ru: 'ル', re: 'レ', ro: 'ロ',
  wa: 'ワ', wo: 'ヲ',
  nn: 'ン', "n'": 'ン',

  // Dakuon & Handakuon
  ga: 'ガ', gi: 'ギ', gu: 'グ', ge: 'ゲ', go: 'ゴ',
  za: 'ザ', ji: 'ジ', zi: 'ジ', zu: 'ズ', ze: 'ゼ', zo: 'ゾ',
  da: 'ダ', di: 'ヂ', dji: 'ヂ', du: 'ヅ', dzu: 'ヅ', de: 'デ', do: 'ド',
  ba: 'バ', bi: 'ビ', bu: 'ブ', be: 'ベ', bo: 'ボ',
  pa: 'パ', pi: 'ピ', pu: 'プ', pe: 'ペ', po: 'ポ',

  // Yoon
  kya: 'キャ', kyu: 'キュ', kyo: 'キョ',
  sha: 'シャ', sya: 'シャ', shu: 'シュ', syu: 'シュ', sho: 'ショ', syo: 'ショ',
  cha: 'チャ', tya: 'チャ', chu: 'チュ', tyu: 'チュ', cho: 'チョ', tyo: 'チョ',
  nya: 'ニャ', nyu: 'ニュ', nyo: 'ニョ',
  hya: 'ヒャ', hyu: 'ヒュ', hyo: 'ヒョ',
  mya: 'ミャ', myu: 'ミュ', myo: 'ミョ',
  rya: 'リャ', ryu: 'リュ', ryo: 'リョ',
  gya: 'ギャ', gyu: 'ギュ', gyo: 'ギョ',
  ja: 'ジャ', jya: 'ジャ', zya: 'ジャ', ju: 'ジュ', jyu: 'ジュ', zyu: 'ジュ', jo: 'ジョ', jyo: 'ジョ', zyo: 'ジョ',
  dja: 'ヂャ', dya: 'ヂャ', dju: 'ヂュ', dyu: 'ヂュ', djo: 'ヂョ', dyo: 'ヂョ',
  bya: 'ビャ', byu: 'ビュ', byo: 'ビョ',
  pya: 'ピャ', pyu: 'ピュ', pyo: 'ピョ',

  // Extended Katakana
  ye: 'イェ',
  wi: 'ウィ', we: 'ウェ',
  va: 'ヴァ', vi: 'ヴィ', vu: 'ヴ', ve: 'ヴェ', vo: 'ヴォ',
  she: 'シェ', je: 'ジェ', che: 'チェ',
  tsa: 'ツァ', tsi: 'ツィ', tse: 'ツェ', tso: 'ツォ',
  fa: 'ファ', fi: 'フィ', fe: 'フェ', fo: 'フォ',
  vya: 'ヴャ', vyu: 'ヴュ', vyo: 'ヴョ',
  fyu: 'フュ',

  // Standard IME aliases for loanword sounds
  thu: 'テュ', dhu: 'デュ',
  thi: 'ティ', twu: 'トゥ',
  dhi: 'ディ', dwu: 'ドゥ',
  who: 'ウォ',
};

// Target-specific overrides for ambiguous Hepburn / loanword katakana
const TARGET_OVERRIDES: Record<string, Record<string, string>> = {
  'ウォ': { wo: 'ウォ' },
  'ティ': { ti: 'ティ' },
  'トゥ': { tu: 'トゥ' },
  'ディ': { di: 'ディ' },
  'ドゥ': { du: 'ドゥ' },
  'テュ': { tyu: 'テュ' },
  'デュ': { dyu: 'デュ' },
};

// Priority keys sorted longest to shortest for greedy prefix matching
const HIRAGANA_KEYS = Object.keys(HIRAGANA_MAP).sort((a, b) => b.length - a.length);
const KATAKANA_KEYS = Object.keys(KATAKANA_MAP).sort((a, b) => b.length - a.length);

/**
 * Converts a romaji string on-the-fly into Japanese script (Hiragana or Katakana).
 * Leaves incomplete trailing consonants (e.g. 'k' or 'sh') so the user can finish typing.
 * An optional targetChar ensures characters with shared romaji (e.g. 'wo' -> ウォ vs ヲ)
 * convert to the expected glyph.
 */
export function romajiToKana(
  romaji: string,
  script: 'hiragana' | 'katakana',
  targetChar?: string
): string {
  if (!romaji) return '';
  const text = romaji.toLowerCase();
  const map = script === 'hiragana' ? HIRAGANA_MAP : KATAKANA_MAP;
  const keys = script === 'hiragana' ? HIRAGANA_KEYS : KATAKANA_KEYS;
  const overrides = targetChar ? TARGET_OVERRIDES[targetChar] : undefined;

  let result = '';
  let i = 0;

  while (i < text.length) {
    let matched = false;

    // Check double consonants (sokuon: 'tt' -> 'っ' or 'ッ', 'kk' -> 'っ', etc.)
    if (
      i + 1 < text.length &&
      text[i] === text[i + 1] &&
      /[bcdfghjklmpqrstvwxyz]/.test(text[i]) &&
      text[i] !== 'n'
    ) {
      result += script === 'hiragana' ? 'っ' : 'ッ';
      i += 1;
      continue;
    }

    // Check 'nn' or "n'" -> ん / ン
    if (text.startsWith('nn', i) || text.startsWith("n'", i)) {
      result += script === 'hiragana' ? 'ん' : 'ン';
      i += 2;
      continue;
    }

    // Check n before another consonant or end of input
    if (text[i] === 'n') {
      if (i + 1 === text.length) {
        // trailing 'n': leave as 'n' until second 'n' or vowel is pressed
        result += 'n';
        i += 1;
        continue;
      } else if (!/[aiueoy]/.test(text[i + 1])) {
        // 'n' before non-vowel consonant (e.g. 'nk' -> 'んk')
        result += script === 'hiragana' ? 'ん' : 'ン';
        i += 1;
        continue;
      }
    }

    // Check target overrides first (for ambiguous loanword kana like ti -> ティ)
    if (overrides) {
      for (const [key, kana] of Object.entries(overrides)) {
        if (text.startsWith(key, i)) {
          result += kana;
          i += key.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;
    }

    // Try greedy match on syllables
    for (const key of keys) {
      if (text.startsWith(key, i)) {
        result += map[key];
        i += key.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Keep unmapped character as-is (e.g., incomplete consonant)
      result += text[i];
      i += 1;
    }
  }

  return result;
}
