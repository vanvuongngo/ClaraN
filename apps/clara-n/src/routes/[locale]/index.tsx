import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { ClaraAssistant } from "~/components/ClaraAssistant";
import { SUPPORTED_LOCALES } from "../../locales/consts/locale";

// https://robisim74.gitbook.io/qwik-speak/library/adapters#static-site-generation-ssg
// https://qwik.dev/docs/guides/static-site-generation/#dynamic-ssg-routes
export const onStaticGenerate: StaticGenerateHandler = () => ({
  params: SUPPORTED_LOCALES.map(locale => ({ locale })),
});

export default component$(() => {
  return <ClaraAssistant />;
});

export const head: DocumentHead = {
  title: "ClaraN - AI " + $localize`Assistant`,
  meta: [
    {
      name: "description",
      content: $localize`ClaraN is a hardfork of the awesome ClaraVerse with modern tech stack and mobile device first`,
    },
  ],
};
