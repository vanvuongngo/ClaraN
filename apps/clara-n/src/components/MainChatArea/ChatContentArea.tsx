import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { listen } from "@tauri-apps/api/event";
import { MarkdownRenderer } from "~/integrations/react/MarkdownRenderer/MarkdownRenderer";
import { QuestionRenderer } from "./QuestionRenderer";
import { ChatAnswer, ChatEvent, ChatStore } from "./types";

const scrollFunction = () => {
  const content = document.getElementById("drawerContent");
  content?.scrollTo({ top: content.scrollHeight, left: 0, behavior: "smooth" });
};

export const ChatContentArea = component$(() => {
  const store = useStore<ChatStore>({ chats: [] });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    listen<string>("ollama_prompted", (event) => {
      store.chats.push([event.payload, ""]);
    });

    listen<ChatAnswer>("ollama_chunked", ({ payload /*, id*/ }: ChatEvent) => {
      store.chats[store.chats.length - 1][1] += payload.chunk;

      const id = setTimeout(scrollFunction, 200);
      cleanup(() => clearTimeout(id));
    });
  });

  return (
    <section class="flex-1 space-y-2 p-8">
      {store.chats.map(([question, answer]) => (
        <>
          <div class="chat chat-start">
            <div class="chat-bubble bg-info">
              <QuestionRenderer question={question} />
            </div>
          </div>
          <div class="prose max-w-none pb-4">
            <MarkdownRenderer content={answer} />
          </div>
        </>
      ))}
    </section>
  );
});
