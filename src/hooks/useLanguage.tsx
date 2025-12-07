import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, ru: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from URL param if present
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'ru' || langParam === 'en') {
      return langParam;
    }
    return 'en';
  });

  const t = (en: string, ru: string) => (language === 'en' ? en : ru);

  // Sync state to URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') !== language) {
      params.set('lang', language);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
