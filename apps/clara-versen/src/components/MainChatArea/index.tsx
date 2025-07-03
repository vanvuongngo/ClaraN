import { component$ } from "@builder.io/qwik";
import { ChatContentArea } from "./ChatContentArea";
import { ChatInput } from "./ChatInput";
import { Header } from "./Header";

export const MainChatArea = component$(() => {
  return (
    <>
      <header class="navbar bg-base-300 px-4 shadow-sm">
        <Header />
      </header>

      <section class="flex-1 space-y-4 overflow-y-auto p-6">
        <ChatContentArea />
      </section>

      <footer class="border-base-content/10 border-t p-4">
        <ChatInput />
      </footer>
    </>
  );
});
