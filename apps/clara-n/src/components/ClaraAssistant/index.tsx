import { component$, QRL } from "@builder.io/qwik";
import { LuMenu } from "@qwikest/icons/lucide";
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
      <div class="drawer lg:drawer-open">
        {/* mobile overlay-sidebar toggler */}
        <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content flex flex-col">
          <div class="navbar bg-base-300 w-full lg:hidden">
            {/* icon for mobile when popup is closed */}
            <label for="sidebar-toggle" class="btn btn-ghost btn-square">
              <LuMenu />
            </label>

            <span class="ml-2 font-bold">ClaraN</span>
          </div>

          <main class="bg-base-100 flex flex-1 flex-col">
            <MainChatArea />
          </main>
        </div>

        <div class="drawer-side h-full">
          <SideBar />
        </div>
      </div>
    );
  },
);
