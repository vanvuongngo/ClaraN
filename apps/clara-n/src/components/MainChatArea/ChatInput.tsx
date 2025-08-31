import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { invoke } from "@tauri-apps/api/core";

export const ChatInput = component$(() => {
  const input = useSignal("");

  const chat = $(() => {
    const prompt = input.value;
    input.value = "";
    invoke("ask_ollama", {
      prompt,
    }).catch((error: string) => console.error(error)); //TODO: show alert
  });

  useOnDocument(
    "keypress",
    $((event) => {
      const { key } = event as KeyboardEvent;

      if (key === "Enter") {
        chat();
        return;
      }
    }),
  );

  return (
    <footer class="border-base-content/10 p-4">
      <div class="join w-full">
        <input
          class="input input-bordered join-item w-full"
          placeholder={$localize`Ask me anything…`}
          bind:value={input}
        />
        <button class="btn btn-primary join-item" onClick$={chat}>
          ➡
        </button>
      </div>
    </footer>
  );
});
