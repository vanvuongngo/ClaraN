import { component$ } from "@builder.io/qwik";
import { LuChevronLeft, LuChevronsRight } from "@qwikest/icons/lucide";
import { ChatHistory } from "./ChatHistory";
import { Logo } from "./Logo";
import { Options } from "./Options";

export const SideBar = component$(() => {
  return (
    <div class="bg-base-200 flex h-full flex-col">
      {/* toggler for desktop */}
      <input id="desktop-toggler" type="checkbox" class="peer hidden" />

      <aside class="menu bg-base-200 text-base-content flex h-full w-64 transition-all peer-checked:w-18 peer-checked:p-0 peer-checked:duration-300">
        <Logo />
        <ChatHistory />
        <Options />
      </aside>

      {/* toggler for desktop */}
      <label
        for="desktop-toggler"
        class="flex cursor-pointer justify-end pr-2 pb-4 text-xl peer-checked:hidden"
      >
        <LuChevronLeft />
      </label>
      <label
        for="desktop-toggler"
        class="hidden cursor-pointer pb-4 pl-4 text-xl peer-checked:inline"
      >
        <LuChevronsRight />
      </label>
    </div>
  );
});
