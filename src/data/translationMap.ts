import { WeaponSkills, ArmorSkills, SetSkills } from "./skills";

// 武器スキルの英和対応
export const WeaponSkillsTranslation: Record<string, string> = {
  "Attack Boost": "攻撃",
  "Offensive Guard": "攻めの守勢",
  "Critical Eye": "見切り",
  "Critical Boost": "超会心",
  "Critical Draw": "抜刀術【技】",
  "Element Attack": "属性攻撃強化",
  "Critical Element": "会心撃【属性】",
  "Critical Status": "会心撃【特殊】",
  "Charge Master": "チャージマスター",
  "Normal Shots": "通常弾・通常矢強化",
  "Piercing Shots": "貫通弾・竜の矢強化",
  "Special Ammo Boost": "特殊射撃強化",
  "Rapid Fire Up": "速射強化",
  "Opening Shot": "ファーストショット",
  "Artillery": "砲術"
};

// 防具スキルの英和対応
export const ArmorSkillsTranslation: Record<string, string> = {
  "Adrenaline Rush": "巧撃",
  "Agitator": "挑戦者",
  "Ambush": "急襲",
  "Antivirus": "無我の境地",
  "Burst": "連撃",
  "Coalescence": "災禍転福",
  "Convert Element": "属性変換",
  "Counterstrike": "逆襲",
  "Elemental Absorption": "属性吸収",
  "Foray": "攻勢",
  "Heroics": "火事場力",
  "Latent Power": "力の解放",
  "Maximum Might": "渾身",
  "Peak Performance": "フルチャージ",
  "Resentment": "逆恨み",
  "Weakness Exploit": "弱点特効"
};

// セットスキルの英和対応
export const SetSkillsTranslation: Record<string, string> = {
  "Doshaguma's Might": "闢獣の力",
  "Powerhouse I": "鍔迫り合い、または相殺が成功した時、一定時間、基礎攻撃力＋１０",
  "Powerhouse II": "鍔迫り合い、または相殺が成功した時、一定時間、基礎攻撃力＋２５",
  "Ebony Odogaron's Power": "兇爪竜の力",
  "Burst Boost I": "「連撃」スキルの効果発動時、有効時間を延長し、基礎攻撃力＋３",
  "Burst Boost II": "「連撃」スキルの効果発動時、有効時間をさらに延長し、基礎攻撃力＋１０",
  "Gore Magala's Tyranny": "黒蝕竜の力",
  "Black Eclipse I": "大型モンスターと対峙した時、狂竜症に感染する。",
  "Black Eclipse II": "大型モンスターと対峙した時、狂竜症に感染し、攻撃力が上昇する。克服時、さらに攻撃力が上昇する。",
  "Jin Dahaad's Revolt": "凍峰竜の反逆",
  "Binding Counter I": "糸拘束状態、凍結状態の回復時、または拘束攻撃から解放された時、鍔迫り合いの後、一定時間、攻撃力が上昇",
  "Binding Counter II": "糸拘束状態、凍結状態の回復時、または拘束攻撃から解放された時、鍔迫り合いの後、一定時間、攻撃力が大きく上昇",
  "Lord's Fury": "ヌシの憤激",
  "Lords Fury I": "状態異常中、攻撃力が上昇する",
  "Xu Wu's Vigor": "暗器蛸の力",
  "Protein Fiend I": "こんがり肉などのアイテムを食べた時、一定時間、基礎攻撃力＋１５",
  "Protein Fiend II": "こんがり肉などのアイテムを食べた時、一定時間、基礎攻撃力＋２５"
};

// スキルレベルの英和対応
export const SkillLevelTranslation: Record<string, string> = {
  "Attack Boost 1": "攻撃Lv1",
  "Attack Boost 2": "攻撃Lv2",
  "Attack Boost 3": "攻撃Lv3",
  "Attack Boost 4": "攻撃Lv4",
  "Attack Boost 5": "攻撃Lv5",
  "Critical Eye 1": "見切りLv1",
  "Critical Eye 2": "見切りLv2",
  "Critical Eye 3": "見切りLv3",
  "Critical Eye 4": "見切りLv4",
  "Critical Eye 5": "見切りLv5",
  "Weakness Exploit 1": "弱点特効Lv1",
  "Weakness Exploit 2": "弱点特効Lv2",
  "Weakness Exploit 3": "弱点特効Lv3",
  "Weakness Exploit 4": "弱点特効Lv4",
  "Weakness Exploit 5": "弱点特効Lv5",
  "Critical Boost 1": "超会心Lv1",
  "Critical Boost 2": "超会心Lv2",
  "Critical Boost 3": "超会心Lv3",
  "Critical Boost 4": "超会心Lv4",
  "Critical Boost 5": "超会心Lv5",
  "Element Attack 1": "属性攻撃強化Lv1",
  "Element Attack 2": "属性攻撃強化Lv2",
  "Element Attack 3": "属性攻撃強化Lv3",
  "Critical Element 1": "会心撃【属性】Lv1",
  "Critical Element 2": "会心撃【属性】Lv2",
  "Critical Element 3": "会心撃【属性】Lv3",
  "Agitator 1": "挑戦者Lv1",
  "Agitator 2": "挑戦者Lv2",
  "Agitator 3": "挑戦者Lv3",
  "Agitator 4": "挑戦者Lv4",
  "Agitator 5": "挑戦者Lv5",
  "Maximum Might 1": "渾身Lv1",
  "Maximum Might 2": "渾身Lv2",
  "Maximum Might 3": "渾身Lv3",
  "Latent Power 1": "力の解放Lv1",
  "Latent Power 2": "力の解放Lv2",
  "Latent Power 3": "力の解放Lv3",
  "Latent Power 4": "力の解放Lv4",
  "Latent Power 5": "力の解放Lv5",
  "Resentment 1": "逆恨みLv1",
  "Resentment 2": "逆恨みLv2",
  "Resentment 3": "逆恨みLv3",
  "Resentment 4": "逆恨みLv4",
  "Resentment 5": "逆恨みLv5",
  "Peak Performance 1": "フルチャージLv1",
  "Peak Performance 2": "フルチャージLv2",
  "Peak Performance 3": "フルチャージLv3",
  "Peak Performance 4": "フルチャージLv4",
  "Peak Performance 5": "フルチャージLv5",
  "Antivirus 1": "無我の境地Lv1",
  "Antivirus 2": "無我の境地Lv2",
  "Antivirus 3": "無我の境地Lv3",
  "Offensive Guard 1": "攻めの守勢Lv1",
  "Offensive Guard 2": "攻めの守勢Lv2",
  "Offensive Guard 3": "攻めの守勢Lv3",
  "Adrenaline Rush 1": "巧撃Lv1",
  "Adrenaline Rush 2": "巧撃Lv2",
  "Adrenaline Rush 3": "巧撃Lv3",
  "Adrenaline Rush 4": "巧撃Lv4",
  "Adrenaline Rush 5": "巧撃Lv5",
  "Critical Draw 1": "抜刀術【技】Lv1",
  "Critical Draw 2": "抜刀術【技】Lv2",
  "Critical Draw 3": "抜刀術【技】Lv3"
};

// 武器名の英和対応
export const WeaponNameTranslation: Record<string, string> = {
  "Great Sword": "大剣",
  "Long Sword": "太刀",
  "Sword and Shield": "片手剣",
  "Dual Blades": "双剣",
  "Hammer": "ハンマー",
  "Hunting Horn": "狩猟笛",
  "Lance": "ランス",
  "Gunlance": "ガンランス",
  "Switch Axe": "スラッシュアックス",
  "Charge Blade": "チャージアックス",
  "Insect Glaive": "操虫棍",
  "Bow": "弓",
  "Light Bowgun": "ライトボウガン",
  "Heavy Bowgun": "ヘビィボウガン"
};

// 斬れ味の英和対応
export const SharpnessTranslation: Record<string, string> = {
  "Red": "赤",
  "Orange": "橙",
  "Yellow": "黄",
  "Green": "緑",
  "Blue": "青",
  "White": "白",
  "Purple": "紫",
  "Ranged": "射撃"
};

// コンボモードの英和対応
export const ComboModeTranslation: Record<string, string> = {
  "Dynamic": "動的",
  "Snapshot": "スナップショット"
};

// コンボモードの説明文
export const ComboModeDescriptionTranslation: Record<string, string> = {
  "Captures the damage of an attack when it is added.": "攻撃を追加した時点でのダメージを記録します。",
  "Re-calculates damage of all attacks when inputs change.": "入力が変更されるとすべての攻撃のダメージを再計算します。"
};

// 武器説明テキスト
export const WeaponDescriptionTranslation: Record<string, string> = {
  "Enable \"Display Without Coefficient\" in game options. Don't divide Element by 10.": "ゲーム設定の「係数省略表示」をオンにしてください。属性値を10で割らないでください。"
}; 