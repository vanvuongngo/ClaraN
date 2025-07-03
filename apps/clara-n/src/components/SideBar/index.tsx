import { $, component$ } from "@builder.io/qwik";
import { ChatHistory } from "./ChatHistory";
import { Logo } from "./Logo";
import { Options } from "./Options";

const toggleSidebar = $(() => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("w-64");
    sidebar.classList.toggle("w-16");
  }
});

export const SideBar = component$(() => {
  return (
    <>
      <Logo toggleSidebar={toggleSidebar} />
      <ChatHistory />
      <Options />
    </>
  );
});
