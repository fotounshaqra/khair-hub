import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Hi. I'm Safina.",
    welcomeSub: "No name needed. Just tell me how your heart feels today.",
    startJourney: "Start Your Journey",
    howFeeling: "How are you feeling today?",
    dailyCheckin: "Daily Check-in",
    yourJourney: "Your Journey",
    resiliencePathway: "Resilience Pathway",
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
    jobSearchJourney: "Job Search Journey",
    trackProgress: "Track applications, interviews & emotional milestones",
    applications: "Applications",
    interviews: "Interviews",
    rejections: "Rejections",
    offers: "Offers",
    addMilestone: "Add Milestone",
    yourBadges: "Your Resilience Badges",
    reframingPrompt: "Reframing Prompt",
    whatLearned: "What did you learn? What's one small win?",
    microAction: "Micro-Action",
    tweakCoverLetter: "Let's tweak your cover letter together — just 5 minutes.",
    viewPrompt: "View Prompt",
    takeAction: "Take Action",
    courageousApplicant: "Courageous Applicant",
    feedbackSeeker: "Feedback Seeker",
    persistentDreamer: "Persistent Dreamer",
    resilientSpirit: "Resilient Spirit",
  },
  ar: {
    welcome: "مرحباً. أنا سفينة.",
    welcomeSub: "لا حاجة للاسم. فقط أخبرني كيف يشعر قلبك اليوم.",
    startJourney: "ابدأ رحلتك",
    howFeeling: "كيف تشعر اليوم؟",
    dailyCheckin: "تسجيل يومي",
    yourJourney: "رحلتك",
    resiliencePathway: "مسار المرونة",
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
    jobSearchJourney: "رحلة البحث عن عمل",
    trackProgress: "تتبع الطلبات والمقابلات والإنجازات العاطفية",
    applications: "الطلبات",
    interviews: "المقابلات",
    rejections: "الرفض",
    offers: "العروض",
    addMilestone: "إضافة معلم",
    yourBadges: "شارات المرونة الخاصة بك",
    reframingPrompt: "إعادة صياغة الموقف",
    whatLearned: "ماذا تعلمت؟ ما هو إنجاز صغير حققته؟",
    microAction: "إجراء صغير",
    tweakCoverLetter: "لنعدل رسالة الغلاف معًا - خمس دقائق فقط.",
    viewPrompt: "عرض المطالبة",
    takeAction: "اتخاذ إجراء",
    courageousApplicant: "متقدم شجاع",
    feedbackSeeker: "باحث عن الملاحظات",
    persistentDreamer: "حالم مثابر",
    resilientSpirit: "روح مرنة",
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
