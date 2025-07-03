import { component$, QRL } from "@builder.io/qwik";

interface ClaraAssistantProps {
  onPageChange: QRL<(activePage: string) => void>;
}

// from https://github.com/badboysm890/ClaraVerse/blob/main/src/components/ClaraAssistant.tsx
export const ClaraAssistant = component$(
  ({ onPageChange }: ClaraAssistantProps) => {
    return <></>;
  },
);
