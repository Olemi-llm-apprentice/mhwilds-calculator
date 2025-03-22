// i18n implementation
const ExportNotice = {
  en: `Calculator is currently in active development, and saved builds might no longer work between updates. Saving combos is not supported yet.`,
  ja: `計算機は現在開発中であり、保存したビルドは更新間で動作しなくなる可能性があります。コンボの保存はまだサポートされていません。`
};

// 他の説明文
const DisplayInstructions = {
  en: `Enable "Display Without Coefficient" in game options. Don't divide Element by 10.`,
  ja: `ゲームのオプションで「係数表示なし」を有効にしてください。属性値を10で割らないでください。`
};

const ComboInstructions = {
  en: `Click on attacks to add or remove them from your combo.`,
  ja: `攻撃をクリックしてコンボに追加または削除します。`
};

// Global text content
const ui = {
  en: {
    EXPORT_NOTICE: ExportNotice.en,
    DISPLAY_INSTRUCTIONS: DisplayInstructions.en,
    COMBO_INSTRUCTIONS: ComboInstructions.en,
    WEAPON: "Weapon",
    ATTACK: "Attack",
    ELEMENT: "Element",
    AFFINITY: "Affinity",
    SHARPNESS: "Sharpness",
    SKILLS: "Skills",
    STATS: "Stats",
    DAMAGE: "Damage",
    COMBO: "Combo",
    EFFECTIVE_ATTACK: "Effective Attack",
    EFFECTIVE_ELEMENT: "Effective Element",
    IMPORT: "Import",
    EXPORT: "Export",
    COPY: "Copy",
    COPIED: "Copied to clipboard.",
    BUFFS: "Buffs",
    HITZONE_RAW: "Hitzone (Raw)",
    HITZONE_ELE: "Hitzone (Element)",
    WOUND: "Wound",
    WEAPON_SKILL: "Weapon",
    ARMOR_SKILL: "Armor",
    SET_SKILL: "Set",
    TOTAL_AVERAGE: "Total Average",
    TOTAL_HITS: "Total Hits",
    RESET: "Reset",
    MODE: "Mode",
    MISC_FLAT_ATTACK: "Attack (Flat)",
    MISC_PERCENT_ATTACK: "Attack (%)",
    MISC_FLAT_ELEMENT: "Element (Flat)",
    MISC_PERCENT_ELEMENT: "Element (%)",
    MISC_AFFINITY: "Affinity (%)",
    HUNTING_HORN: "Hunting Horn",
    CALCULATE_UNSUPPORTED_BUFFS: "Calculate other unsupported buffs here."
  },
  ja: {
    EXPORT_NOTICE: ExportNotice.ja,
    DISPLAY_INSTRUCTIONS: DisplayInstructions.ja,
    COMBO_INSTRUCTIONS: ComboInstructions.ja,
    WEAPON: "武器",
    ATTACK: "攻撃力",
    ELEMENT: "属性値",
    AFFINITY: "会心率",
    SHARPNESS: "斬れ味",
    SKILLS: "スキル",
    STATS: "ステータス",
    DAMAGE: "ダメージ",
    COMBO: "コンボ",
    EFFECTIVE_ATTACK: "有効攻撃力",
    EFFECTIVE_ELEMENT: "有効属性値",
    IMPORT: "インポート",
    EXPORT: "エクスポート",
    COPY: "コピー",
    COPIED: "クリップボードにコピーしました。",
    BUFFS: "強化効果",
    HITZONE_RAW: "肉質(物理)",
    HITZONE_ELE: "肉質(属性)",
    WOUND: "傷",
    WEAPON_SKILL: "武器",
    ARMOR_SKILL: "防具",
    SET_SKILL: "シリーズ",
    TOTAL_AVERAGE: "合計平均",
    TOTAL_HITS: "合計ヒット数",
    RESET: "リセット",
    MODE: "モード",
    MISC_FLAT_ATTACK: "攻撃力 (固定)",
    MISC_PERCENT_ATTACK: "攻撃力 (%)",
    MISC_FLAT_ELEMENT: "属性値 (固定)",
    MISC_PERCENT_ELEMENT: "属性値 (%)",
    MISC_AFFINITY: "会心率 (%)",
    HUNTING_HORN: "狩猟笛",
    CALCULATE_UNSUPPORTED_BUFFS: "その他のサポートされていない強化効果はここで計算します。"
  }
};

// Local storage key for language
const LANGUAGE_STORAGE_KEY = 'mhwilds-calculator-language';

// デフォルトでは英語をサーバーサイドでの初期値として使用
// サーバーサイドレンダリングでのハイドレーションエラーを避けるため
let currentLanguage: 'en' | 'ja' = 'en';

// クライアントサイドでのみlocalStorageを使用
const initializeLanguage = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      console.log("Saved language from localStorage:", savedLanguage); // デバッグ用
      if (savedLanguage === 'ja' || savedLanguage === 'en') {
        currentLanguage = savedLanguage;
        console.log("Setting current language to:", currentLanguage); // デバッグ用
      }
    } catch (error) {
      console.error("Error reading language from localStorage:", error);
    }
  }
};

// クライアントサイドの場合はinitializeLanguageを実行
if (typeof window !== 'undefined') {
  console.log("Client-side detected, initializing language"); // デバッグ用
  initializeLanguage();
}

export const setLanguage = (lang: 'en' | 'ja') => {
  console.log("setLanguage called with:", lang); // デバッグ用
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      console.log("Language saved to localStorage:", lang); // デバッグ用
    } catch (error) {
      console.error("Error saving language to localStorage:", error);
    }
  }
};

export const getLanguage = () => {
  console.log("getLanguage called, returning:", currentLanguage); // デバッグ用
  return currentLanguage;
};

export const getText = (key: keyof typeof ui.en) => {
  return ui[currentLanguage][key];
};

export default ui[currentLanguage];
