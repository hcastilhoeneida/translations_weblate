"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/globe.svg"
        alt="Language"
        width={20}
        height={20}
        className="dark:invert"
      />
      <select
        value={locale}
        onChange={handleLanguageChange}
        disabled={isPending}
        className="bg-transparent border rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
