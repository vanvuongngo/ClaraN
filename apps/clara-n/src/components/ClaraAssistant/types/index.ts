import { QRL } from "@builder.io/qwik";

export interface ClaraAssistantProps {
  onPageChange: QRL<(activePage: string) => void>;
}
