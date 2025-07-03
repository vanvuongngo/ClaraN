import { component$, QRL } from "@builder.io/qwik";
import { SideBar } from "~/components/SideBar";
import { MainChatArea } from "../MainChatArea";

interface ClaraAssistantProps {
  onPageChange: QRL<(activePage: string) => void>;
}

// from https://github.com/badboysm890/ClaraVerse/blob/main/src/components/ClaraAssistant.tsx
export const ClaraAssistant = component$<ClaraAssistantProps>(
  // ({ onPageChange }) => {
  () => {
    return (
      <>
        <aside
          class="bg-base-200 flex w-64 flex-col transition-all duration-300 ease-in-out"
          id="sidebar"
        >
          <SideBar />
        </aside>

        <main class="bg-base-100 flex flex-1 flex-col">
          <MainChatArea />
        </main>
      </>
    );
  },
);
