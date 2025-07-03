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
    "Clara VerseN is a hardfork of the awesome Clara Verse. Why you want to use Clara VerseN? Because the tech stack based on modern and lightweight technologies: Tauri, Qwik, NodeJS LTS, DaisyUI",
  );

  useVisibleTask$(() => {
    console.debug("activePage", activePage.value);
  });

  return <ClaraAssistant onPageChange={setActivePage} />;
});

export const head: DocumentHead = {
  title: "Clara VerseN - AI Assistant",
  meta: [
    {
      name: "description",
      content:
        "Clara VerseN is a hardfork of the awesome Clara Verse with modern tech stack and mobile first",
    },
  ],
};
