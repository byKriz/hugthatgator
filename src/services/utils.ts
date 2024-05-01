export const checkLanguage = (currentLocale: string) => {
  if (currentLocale === "en") return "en";
  return "es";
};

const allowedChars = new Set([
  "olivia",
  "inco",
  "damien",
  "liz",
  "ben",
  "mia",
  "iadakan",
]);

export const checkChar = (charId: string) => (allowedChars.has(charId) ? charId : "olivia")
