import { component$ } from "@builder.io/qwik";

export const ChatContentArea = component$(() => {
  return (
    <section class="flex-1 space-y-4 overflow-y-auto p-6">
      <div class="chat chat-start">
        <div class="chat-bubble">
          Hier ist ein kurzer Text (Loem) mit 30 Zeichen…
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble bg-primary text-primary-content">
          Mit lautet der HTML-Tag dafür…
        </div>
      </div>
    </section>
  );
});
