import { getLanguage } from "@/text";
import {
  WeaponSkillsTranslation,
  ArmorSkillsTranslation,
  SetSkillsTranslation,
  SkillLevelTranslation,
  WeaponNameTranslation,
  SharpnessTranslation,
  ComboModeTranslation,
  ComboModeDescriptionTranslation,
  WeaponDescriptionTranslation
} from "@/data/translationMap";

/**
 * スキル名を翻訳する関数
 */
export const translateSkillName = (name: string): string => {
  if (getLanguage() === 'en') return name;
  
  // WeaponSkills, ArmorSkills, SetSkillsから翻訳を探す
  const translatedName = 
    WeaponSkillsTranslation[name] ||
    ArmorSkillsTranslation[name] ||
    SetSkillsTranslation[name];
  
  return translatedName || name;
};

/**
 * スキルレベル名を翻訳する関数
 */
export const translateSkillLevel = (name: string): string => {
  if (getLanguage() === 'en') return name;
  
  return SkillLevelTranslation[name] || name;
};

/**
 * 武器名を翻訳する関数
 */
export const translateWeaponName = (name: string): string => {
  if (getLanguage() === 'en') return name;
  
  return WeaponNameTranslation[name] || name;
};

/**
 * 斬れ味を翻訳する関数
 */
export const translateSharpness = (name: string): string => {
  if (getLanguage() === 'en') return name;
  
  return SharpnessTranslation[name] || name;
};

/**
 * コンボモードを翻訳する関数
 */
export const translateComboMode = (name: string): string => {
  if (getLanguage() === 'en') return name;
  
  return ComboModeTranslation[name] || name;
};

/**
 * コンボモードの説明を翻訳する関数
 */
export const translateComboModeDescription = (description: string): string => {
  if (getLanguage() === 'en') return description;
  
  return ComboModeDescriptionTranslation[description] || description;
};

/**
 * 武器説明を翻訳する関数
 */
export const translateWeaponDescription = (description: string): string => {
  if (getLanguage() === 'en') return description;
  
  return WeaponDescriptionTranslation[description] || description;
}; 