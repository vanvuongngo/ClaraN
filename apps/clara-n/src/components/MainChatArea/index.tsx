import { component$ } from "@builder.io/qwik";
import { ChatContentArea } from "./ChatContentArea";
import { ChatInput } from "./ChatInput";
import { TopBar } from "./TopBar";

export const MainChatArea = component$(() => {
  return (
    <>
      <TopBar />

      <ChatContentArea />

      <ChatInput />
    </>
  );
});
