import { component$ } from "@builder.io/qwik";

export const ChatInput = component$(() => {
  return (
    <footer class="border-base-content/10 border-t p-4">
      <div class="join w-full">
        <input
          class="input input-bordered join-item w-full"
          placeholder="Ask me anything…"
        />
        <button class="btn btn-primary join-item">➡</button>
      </div>
    </footer>
  );
});
