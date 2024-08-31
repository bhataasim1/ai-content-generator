import { createContext, Dispatch, SetStateAction } from "react";

export type UserInputType = {
  category?: string;
  difficulty?: string;
  duration?: string;
  video?: string;
  chapters?: number;
  topic?: string;
  description?: string;
};

type UserInputContextType = {
  userInput: UserInputType;
  setUserInput: Dispatch<SetStateAction<UserInputType>>;
};

export const UserInputContext = createContext<UserInputContextType>({
  userInput: {},
  setUserInput: () => {},
});
