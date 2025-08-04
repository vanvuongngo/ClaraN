import { languageMap } from "../consts/languages";

export const getReadableLanguageName = (language: string): string  =>  
  languageMap[language] || language.charAt(0).toUpperCase() + language.slice(1)
