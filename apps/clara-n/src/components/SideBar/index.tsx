import { component$ } from "@builder.io/qwik";
import { ChatHistory } from "./ChatHistory";
import { Logo } from "./Logo";
import { Options } from "./Options";

export const SideBar = component$(() => {
  return (
    <>
      <Logo />
      <ChatHistory />
      <Options />
    </>
  );
});
