import { component$ } from "@builder.io/qwik";
import { LuMessageSquare, LuPlus } from "@qwikest/icons/lucide";

export const ChatHistory = component$(() => {
  // flex-1 move next element to the end (options)
  return (
    <div class="flex-1">
      <div class="@container">
        {/* New Chat Button */}
        <button class="hover:bg-accent bg-secondary ml-2 flex w-14 items-center justify-center rounded-lg py-2 text-white transition-colors @min-[135px]:ml-0 @min-[135px]:w-full @min-[135px]:justify-start @min-[135px]:gap-2 @min-[135px]:px-4">
          <LuPlus class="h-5 w-5" />
          <span class="hidden @min-[135px]:block">New Chat</span>
        </button>

        <ul class="menu">
          <li>
            <a class="active" title="erstelle eine meta description">
              <LuMessageSquare class="text-md" />
              <span class="hidden @min-[135px]:block">
                erstelle eine meta description
              </span>
            </a>
          </li>
          <li>
            <a title="Chat 2">
              <LuMessageSquare class="text-md" />
              <span class="hidden @min-[135px]:block">Chat 2</span>
            </a>
          </li>
          <li>
            <a title="Chat 3">
              <LuMessageSquare class="text-md" />
              <span class="hidden @min-[135px]:block">Chat 3</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
