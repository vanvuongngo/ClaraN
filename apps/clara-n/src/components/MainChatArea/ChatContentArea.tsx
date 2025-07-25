import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { listen } from "@tauri-apps/api/event";
import { ChatAnswer, ChatEvent, ChatStore } from "./types";

export const ChatContentArea = component$(() => {
  const store = useStore<ChatStore>({ chats: [] });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    listen<string>("ollama-prompted", (event) => {
      store.chats.push([event.payload, ""]);
    });

    listen<ChatAnswer>("ollama-chunked", ({ payload /*, id*/ }: ChatEvent) => {
      store.chats[store.chats.length - 1][1] += payload.chunk;
    });
  });

  return (
    <section class="flex-1 space-y-4 overflow-y-auto p-6">
      {store.chats.map(([question, answer]) => (
        <>
          <div class="chat chat-start">
            <div class="chat-bubble">{question}</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble bg-primary text-primary-content">
              {answer}
            </div>
          </div>
        </>
      ))}
    </section>
  );
});
