"use client";

import { Button } from "./Button";
import { useEffect, useState } from "react";
import { getLanguage, setLanguage } from "@/text";

export function LanguageToggle() {
  // サーバーでのレンダリング時は空の状態から始める
  const [language, setLang] = useState('');

  // クライアントサイドでのみ実行される
  // 依存配列を空にして、初期マウント時にのみ実行
  useEffect(() => {
    const currentLang = getLanguage();
    console.log("Current language:", currentLang);
    setLang(currentLang);
  }, []);

  const toggleLanguage = () => {
    try {
      const newLang = language === 'en' ? 'ja' : 'en';
      console.log("Changing language to:", newLang);
      // 言語を切り替え
      setLanguage(newLang);
      // ステートを更新
      setLang(newLang);
      // 明示的にlocalStorageに保存
      localStorage.setItem('mhwilds-calculator-language', newLang);
      // リロードして言語を適用
      window.location.reload();
    } catch (error) {
      console.error("Error toggling language:", error);
    }
  };

  // 言語が設定されるまで何も表示しない（ハイドレーションエラー回避）
  if (!language) {
    return null;
  }

  return (
    <Button 
      size="sm" 
      onClick={toggleLanguage}
      className="text-xs"
    >
      {language === 'en' ? '日本語' : 'English'}
    </Button>
  );
} 