import { component$ } from "@builder.io/qwik";

export const ChatHistory = component$(() => {
  // flex-1 move next element to the end (options)
  return (
    <div class="flex-1">
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
