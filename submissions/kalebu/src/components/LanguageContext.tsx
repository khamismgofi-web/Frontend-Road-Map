// src/components/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

export const translations = {
  sw: {
    // Navbar
    navHome: "Nyumbani",
    navAbout: "Kuhusu",
    navFeedback: "Maoni",
    navReport: "Ripoti",
    navMyReports: "Ripoti Zangu",
    flag: "🇹🇿",
    name: "Kiswahili",
    reportNow: "Ripoti sasa",

    // Dashboard Content
    welcomeTitle: "Habari! Karibu tena",
    welcomeSubtitle: "Tazama takwimu za matukio yote",
    writeChat: "Andika",
    activePending: "ZINAZOSUBIRI",
    resolved: "ZILIZOTATULIWA",
    anonymous: "BILA JINA",
    totalReports: "JUMLA YA RIPOTI",

    // Statistics Section
    statsTitle: "Takwimu za Matukio",
    statsOverview: "Muhtasari wa Ripoti",
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About",
    navFeedback: "Feedback",
    navReport: "Report",
    navMyReports: "My Reports",
    flag: "🇬🇧",
    name: "English",
    reportNow: "Report now",

    // Dashboard Content
    welcomeTitle: "Hello! Welcome back",
    welcomeSubtitle: "View the statistics of all incidents",
    writeChat: "Chat",
    activePending: "ACTIVE / PENDING",
    resolved: "RESOLVED",
    anonymous: "ANONYMOUS",
    totalReports: "TOTAL REPORTS",

    // Statistics Section
    statsTitle: "Incident Statistics",
    statsOverview: "Reports Overview",
  },
} as const;

type Language = keyof typeof translations;
type TranslationKeys = keyof (typeof translations)["sw"];

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Set default state to 'sw' (Swahili)
  const [language, setLanguage] = useState<Language>("sw");

  const toggleLanguage = () =>
    setLanguage((current) => (current === "sw" ? "en" : "sw"));

  const t = (key: TranslationKeys) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
