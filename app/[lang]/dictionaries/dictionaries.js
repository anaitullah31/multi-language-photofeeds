import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!locale || !dictionaries[locale]) {
    // fallback to English (or throw / notFound)
    return dictionaries.en();
  }
  return dictionaries[locale]();
};
