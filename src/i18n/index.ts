import { LANGUAGES } from "../enums/languages";
import { english } from "./en";
import { spanish } from "./es";



interface CurrentLocale {
  currentLocale: string | undefined;
}

export const getI18N = ({ currentLocale = LANGUAGES.SPANISH }: CurrentLocale) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
};
