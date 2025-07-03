import { component$ } from "@builder.io/qwik";

export const ChatHistory = component$(() => {
  return (
    <div class="flex-1 overflow-y-auto">
      <ul class="menu">
        <li>
          <a class="active">erstelle ein meta description...</a>
        </li>
        <li>
          <a>Chat 2</a>
        </li>
        <li>
          <a>Chat 3</a>
        </li>
      </ul>
    </div>
  );
});
