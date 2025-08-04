import { component$ } from "@builder.io/qwik";
import { LuCopy } from "@qwikest/icons/lucide";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { QuestionRendererProps } from "./types";

export const QuestionRenderer = component$<QuestionRendererProps>(
  ({ question }) => (
    <>
      {question}
      <button
        class="btn btn-xs btn-ghost ml-1"
        onClick$={async () => {
          await writeText(question);
        }}
        preventdefault:click
        stoppropagation:click
        title="copy"
      >
        <LuCopy />
      </button>
    </>
  ),
);
