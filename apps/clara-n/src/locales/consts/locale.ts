export const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "de"];

export const config = {
  supportedLocales: SUPPORTED_LOCALES.map(locale => ({ locale })),
  defaultLocale: DEFAULT_LOCALE,
};
