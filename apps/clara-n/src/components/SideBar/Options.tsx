import { component$ } from "@builder.io/qwik";

export const Options = component$(() => {
  return (
    <div class="border-base-content/20 space-y-1 border-t p-2">
      <ul class="menu">
        <li>
          <a>
            ⭐ <span class="peer-checked:hidden">Starred</span>
          </a>
        </li>
        <li>
          <a>📦 Archived</a>
        </li>
        <li>
          <a>🗑 Trash</a>
        </li>
        <li>
          <a>🧪 What's New</a>
        </li>
        <li>
          <a>⚙️ Settings</a>
        </li>
      </ul>
    </div>
  );
});
