import { component$ } from "@builder.io/qwik";
import { LuMenu, LuMessagesSquare } from "@qwikest/icons/lucide";

export const Logo = component$(() => {
  return (
    <div class="@container">
      <div class="flex p-4">
        <LuMessagesSquare class="text-xl" />

        <div class="ml-2 hidden text-xl font-bold @min-[135px]:block">
          ClaraN
        </div>

        {/* mobile and popup opened */}
        <label for="sidebar-toggle" class="btn btn-ghost btn-circle lg:hidden">
          <LuMenu />
        </label>
      </div>
    </div>
  );
});
