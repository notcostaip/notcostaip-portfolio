"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/data/translations";

interface LanguageContextType {
    currentLang: { code: Language; label: string };
    setLanguage: (langCode: Language) => void;
    t: typeof translations["PT"];
    language: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languagesList = [
    { code: "PT" as Language, label: "Português" },
    { code: "EN" as Language, label: "English" },
    { code: "ES" as Language, label: "Español" },
    { code: "FR" as Language, label: "Français" },
    { code: "ZH" as Language, label: "中文" },
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [currentLangCode, setCurrentLangCode] = useState<Language>("PT");

    // Load language from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && ["PT", "EN", "ES", "FR", "ZH"].includes(saved)) {
            setCurrentLangCode(saved);
            document.documentElement.lang = saved === "PT" ? "pt-BR" : saved === "ZH" ? "zh-CN" : saved.toLowerCase();
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = currentLangCode === "PT" ? "pt-BR" : currentLangCode === "ZH" ? "zh-CN" : currentLangCode.toLowerCase();
    }, [currentLangCode]);

    const setLanguage = (code: Language) => {
        setCurrentLangCode(code);
        localStorage.setItem("language", code);
    };

    const t = translations[currentLangCode];
    const currentLang = languagesList.find(l => l.code === currentLangCode) || languagesList[0];

    return (
        <LanguageContext.Provider value={{ currentLang, setLanguage, t, language: currentLangCode }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
