export type ChatAnswer = {
  chunk: string;
};

export type ChatEvent = {
  payload: ChatAnswer;
  id: number;
}

export interface ChatStore {
  chats: string[][];
}
