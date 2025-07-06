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
        <div class="drawer lg:drawer-open">
          <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />

          <div class="drawer-content flex flex-col">
            <div class="navbar bg-base-300 w-full lg:hidden">
              <label for="sidebar-toggle" class="btn btn-ghost btn-square">
                ☰
              </label>
              <span class="ml-2 font-bold">ClaraN</span>
            </div>

            <main class="bg-base-100 flex flex-1 flex-col">
              <MainChatArea />
            </main>
          </div>

          <div class="drawer-side h-full">
            <label for="sidebar-toggle" class="drawer-overlay"></label>

            <aside class="menu bg-base-200 text-base-content flex h-full w-64 flex-col p-4 transition-all duration-300 peer-checked:w-16">
              <SideBar />
            </aside>
          </div>
        </div>
      </>
    );
  },
);
