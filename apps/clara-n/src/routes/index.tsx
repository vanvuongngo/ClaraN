import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocalStorage } from "qwik-localstorage";
import { ClaraAssistant } from "~/components/ClaraAssistant";

// from https://github.com/badboysm890/ClaraVerse/blob/main/src/App.tsx
export default component$(() => {
  const { data: activePage, set: setActivePage } = useLocalStorage<string>(
    "page",
    "dashboard",
  );

  console.debug(
    "ClaraN is a hardfork of the awesome Clara. Why you want to use ClaraN? Because the tech stack based on modern and lightweight technologies: Tauri, Qwik, NodeJS LTS, DaisyUI",
  );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    console.debug("activePage", activePage.value);
  });

  return <ClaraAssistant onPageChange={setActivePage} />;
});

export const head: DocumentHead = {
  title: "ClaraN - AI Assistant",
  meta: [
    {
      name: "description",
      content:
        "ClaraN is a hardfork of the awesome Clara with modern tech stack and mobile first",
    },
  ],
};
