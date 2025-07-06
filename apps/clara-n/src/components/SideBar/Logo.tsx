import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <>
      <div class="flex items-center justify-between p-4">
        <input id="collapse-toggle" type="checkbox" class="drawer-toggle" />
        <div class="text-xl font-bold">
          🧠 <span class="peer-checked:hidden">ClaraN</span>
        </div>

        <label for="sidebar-toggle" class="btn btn-ghost btn-square">
          ☰
        </label>

        <label for="collapse-toggle" class="btn btn-sm btn-ghost">
          <span class="transition-transform peer-checked:rotate-180">⏴</span>
        </label>
      </div>
    </>
  );
});
