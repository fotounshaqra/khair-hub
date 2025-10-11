import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Hi. I'm Amal.",
    welcomeSub: "No name needed. Just tell me how your heart feels today.",
    startJourney: "Start Your Journey",
    howFeeling: "How are you feeling today?",
    dailyCheckin: "Daily Check-in",
    yourJourney: "Your Journey",
    stories: "Stories",
    resources: "Resources",
    speakHeart: "Speak from your heart...",
    emojiFeeling: "Or choose an emoji",
    blossomMap: "Your Blossom",
    resilience: "Resilience",
    growth: "Growth Journey",
    realStories: "Real Stories",
    anonymousVoices: "From youth like you",
    opportunities: "Opportunities",
    forYou: "Personalized for you",
  },
  ar: {
    welcome: "مرحباً. أنا أمل.",
    welcomeSub: "لا حاجة للاسم. فقط أخبرني كيف يشعر قلبك اليوم.",
    startJourney: "ابدأ رحلتك",
    howFeeling: "كيف تشعر اليوم؟",
    dailyCheckin: "تسجيل يومي",
    yourJourney: "رحلتك",
    stories: "قصص",
    resources: "موارد",
    speakHeart: "تحدث من قلبك...",
    emojiFeeling: "أو اختر رمز تعبيري",
    blossomMap: "زهرتك",
    resilience: "المرونة",
    growth: "رحلة النمو",
    realStories: "قصص حقيقية",
    anonymousVoices: "من شباب مثلك",
    opportunities: "فرص",
    forYou: "مخصصة لك",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
