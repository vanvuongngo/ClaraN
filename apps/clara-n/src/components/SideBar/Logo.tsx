import { component$, QRL } from "@builder.io/qwik";

export interface LogoProps {
  toggleSidebar: QRL<() => void>;
}

export const Logo = component$<LogoProps>(({ toggleSidebar }) => {
  return (
    <div class="flex items-center justify-between p-4">
      <span class="text-xl font-bold">🧠 Clara</span>
      <button class="btn btn-sm btn-ghost" onClick$={toggleSidebar}>
        ⟨
      </button>
    </div>
  );
});
