"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English", flag: "/usa.png" },
  { code: "bn", label: "Bangla", flag: "/bd.png" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ✅ get current lang from URL: /en/..., /bn/...
  const currentCode = pathname.split("/")[1]; // "en" or "bn"

  const selectedLanguage = useMemo(() => {
    return languages.find((l) => l.code === currentCode) || languages[0];
  }, [currentCode]);

  const handleLanguageChange = (newLang) => {
    setOpen(false);

    // ✅ replace only the first segment (lang) and keep the rest of the path
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/") || `/${newLang}`;

    router.push(newPath);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="text-sm font-medium">{selectedLanguage.label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-md bg-white p-2 z-50 shadow-lg border">
          {languages.map((entry) => (
            <button
              key={entry.code}
              onClick={() => handleLanguageChange(entry.code)}
              className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
              <Image
                src={entry.flag}
                alt={entry.label}
                width={20}
                height={20}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span className="text-sm">{entry.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
