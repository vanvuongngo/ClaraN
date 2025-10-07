import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { debug, error, warn } from "@tauri-apps/plugin-log";
import { locale } from "@tauri-apps/plugin-os";
import { ClaraAssistant } from "~/components/ClaraAssistant";
import { DEFAULT_LOCALE } from "~/locales/consts/locale";
import { transfromOS } from "./i18n-utils";

export default component$(() => {
  const { url } = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const osLocale = await locale();
    if (!osLocale) {
      return await warn(
        "OS plugin: locale() does not return a value. So it is not possible to switch to a prefered language.",
      );
    }

    const maybeRedirectTo = transfromOS(osLocale);;
    if (maybeRedirectTo !== DEFAULT_LOCALE) {
      try {
        const redirectUrl = `${url}${maybeRedirectTo}/`;
        await debug(`redirect to locale: ${redirectUrl}`);
        await navigate(redirectUrl);
        window.location.reload();
      } catch (err) {
        //TODO show message/ toast
        error(`Failed to navigate to another language: ${err}`);
      }
    }
  });

  return <ClaraAssistant />;
});
