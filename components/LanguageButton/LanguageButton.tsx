"use client";
import { useEffect, useState } from "react";
import s from "./LanguageButton.module.scss";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import Link from "next/link";

const languages = {
  en: "English",
  ua: "Українська",
};

export default function LanguageButton() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={s.container}>
      <div className={s.languages}>
        {i18n.locales.map((locale) => {
          return (
            <p className={s.item} key={locale}>
              <Link href={redirectedPathName(locale)}>{languages[locale]}</Link>
            </p>
          );
        })}
      </div>
      <i className="fa-solid fa-language fa-2xl"></i>
    </div>
  );
}
