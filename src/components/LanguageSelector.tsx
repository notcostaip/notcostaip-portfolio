"use client";

import { ChevronDown, Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { languagesList, useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/data/translations";

type TranslateElementOptions = {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
};

type TranslateElementConstructor = new (
  options: TranslateElementOptions,
  elementId: string,
) => unknown;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: TranslateElementConstructor;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const googleCodes: Record<Language, string> = {
  PT: "pt",
  EN: "en",
  ES: "es",
  FR: "fr",
  ZH: "zh-CN",
};

function persistGoogleLanguage(code: Language) {
  const value = `/pt/${googleCodes[code]}`;
  const cookie = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`;
  document.cookie = cookie;

  const hostname = window.location.hostname.replace(/^www\./, "");
  if (hostname.includes(".") && hostname !== "localhost") {
    document.cookie = `${cookie};domain=.${hostname}`;
  }
}

export default function LanguageSelector() {
  const { currentLang, setLanguage } = useLanguage();
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const loadPromiseRef = useRef<Promise<void> | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  const initializeTranslator = useCallback(() => {
    const TranslateElement = window.google?.translate?.TranslateElement;
    const mountPoint = document.getElementById("google_translate_element");
    if (!TranslateElement || !mountPoint) return;

    if (!mountPoint.hasChildNodes()) {
      new TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr,zh-CN",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    }

  }, []);

  const applyTranslation = useCallback((code: Language) => {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!combo) return false;
    combo.value = googleCodes[code];
    combo.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }, []);

  const waitForTranslator = useCallback(() => new Promise<void>((resolve, reject) => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      initializeTranslator();
      if (document.querySelector(".goog-te-combo")) {
        window.clearInterval(timer);
        resolve();
      } else if (attempts >= 40) {
        window.clearInterval(timer);
        reject(new Error("Translation service unavailable"));
      }
    }, 75);
  }), [initializeTranslator]);

  const loadTranslator = useCallback(() => {
    if (document.querySelector(".goog-te-combo")) return Promise.resolve();
    if (loadPromiseRef.current) return loadPromiseRef.current;

    loadPromiseRef.current = new Promise<void>((resolve, reject) => {
      const startTranslator = () => {
        initializeTranslator();
        waitForTranslator().then(resolve).catch(reject);
      };

      window.googleTranslateElementInit = startTranslator;

      if (window.google?.translate?.TranslateElement) {
        startTranslator();
        return;
      }

      const existing = document.getElementById("google-translate-script") as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", startTranslator, { once: true });
        existing.addEventListener("error", () => reject(new Error("Translation script failed")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => reject(new Error("Translation script failed"));
      document.head.appendChild(script);
    });

    return loadPromiseRef.current;
  }, [initializeTranslator, waitForTranslator]);

  const translatePage = useCallback(async (code: Language) => {
    setIsTranslating(true);
    document.documentElement.classList.add("translation-pending");

    try {
      await loadTranslator();
      await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
      applyTranslation(code);
    } catch {
      loadPromiseRef.current = null;
    } finally {
      window.setTimeout(() => {
        document.documentElement.classList.remove("translation-pending");
        setIsTranslating(false);
      }, 450);
    }
  }, [applyTranslation, loadTranslator]);

  useEffect(() => {
    const hasTranslationCookie = document.cookie.includes("googtrans=");
    if (currentLang.code === "PT" && !hasTranslationCookie) return;
    const timer = window.setTimeout(() => void translatePage(currentLang.code), 80);
    return () => window.clearTimeout(timer);
  }, [currentLang.code, pathname, translatePage]);

  const chooseLanguage = (code: Language) => {
    setLanguage(code);
    persistGoogleLanguage(code);
    detailsRef.current?.removeAttribute("open");
    if (code === currentLang.code) void translatePage(code);
  };

  return (
    <div className="relative" aria-label="Selecionar idioma">
      <details ref={detailsRef} className="group/language relative">
        <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 text-xs font-semibold text-neutral-300 transition hover:border-red-500/50 hover:text-white [&::-webkit-details-marker]:hidden">
          <Globe2 size={15} aria-hidden="true" />
          <span>{isTranslating ? "…" : currentLang.code}</span>
          <ChevronDown size={13} className="transition group-open/language:rotate-180" aria-hidden="true" />
        </summary>
        <div className="absolute right-0 top-[calc(100%+.65rem)] z-[1100] w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/98 p-1.5 shadow-[0_22px_70px_rgba(0,0,0,.55)] backdrop-blur-2xl">
          {languagesList.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => chooseLanguage(language.code)}
              aria-label={`Traduzir para ${language.label}`}
              aria-pressed={currentLang.code === language.code}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition ${
                currentLang.code === language.code
                  ? "bg-red-500 text-white"
                  : "text-neutral-400 hover:bg-white/[.07] hover:text-white"
              }`}
            >
              <span>{language.label}</span>
              <span className="font-mono text-[9px] opacity-70">{language.code}</span>
            </button>
          ))}
        </div>
      </details>
      <div id="google_translate_element" aria-hidden="true" />
    </div>
  );
}
