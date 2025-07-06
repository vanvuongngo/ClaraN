import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <>
      <button class="btn btn-ghost">
        <spon>🏠</spon>
        <span class="hidden md:inline">Back to Home</span>
      </button>
      <div class="flex gap-2">
        <button class="btn btn-ghost btn-circle">
          <span>📘</span>
          <span class="hidden md:inline">Knowledge Base</span>
        </button>
        <button class="btn btn-ghost btn-circle">
          <span>🧰</span>
          <span class="hidden md:inline">Tools</span>
        </button>
        <button class="btn btn-ghost btn-circle">🌓</button>
        <button class="btn btn-ghost btn-circle">
          <span>☰</span>
          <span class="hidden md:inline">Max Power</span>
        </button>
      </div>
    </>
  );
});
