import { component$ } from "@builder.io/qwik";
import { LuMenu } from "@qwikest/icons/lucide";
import { SideBar } from "~/components/SideBar";
import { MainChatArea } from "../MainChatArea";

// from https://github.com/badboysm890/ClaraVerse/blob/main/src/components/ClaraAssistant.tsx
export const ClaraAssistant = component$(() => {
  return (
    <div class="drawer lg:drawer-open">
      {/* mobile overlay-sidebar toggler */}
      <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />
      <div
        id="drawerContent"
        class="drawer-content flex flex-col overflow-y-auto"
      >
        <div class="navbar bg-base-300 w-full pt-5 lg:hidden">
          {/* icon for mobile when popup is closed */}
          <label for="sidebar-toggle" class="btn btn-ghost btn-square">
            <LuMenu />
          </label>

          <span class="ml-2 font-bold">ClaraN</span>
        </div>

        <main class="bg-base-200 flex flex-1 flex-col pb-12 md:pb-0">
          <MainChatArea />
        </main>
      </div>
      <div class="drawer-side h-full">
        <SideBar />
      </div>
    </div>
  );
});
