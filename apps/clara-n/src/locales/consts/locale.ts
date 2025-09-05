export const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "de-DE"];

export const config = {
  supportedLocales: SUPPORTED_LOCALES.map(locale => ({ locale })),
};
