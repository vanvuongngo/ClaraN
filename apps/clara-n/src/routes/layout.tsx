import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { DEFAULT_LOCALE } from "../locales/consts/locale";
import { useI18n } from "./i18n-utils";

/**
 * This middleware function must only contain the logic to set the locale,
 * because it is invoked on every request to the server.
 * Avoid redirecting or throwing errors here, and prefer layouts or pages
 * https://robisim74.gitbook.io/qwik-speak/library/tutorial-routing
 */
export const onRequest: RequestHandler = async ({ locale }) => {
  locale(DEFAULT_LOCALE);
};

export default component$(() => {
  useI18n();

  return <Slot />;
});
