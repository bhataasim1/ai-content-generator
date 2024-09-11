import { UserInputType } from "@/types/types";
import { createContext, Dispatch, SetStateAction } from "react";

type UserInputContextType = {
  userInput: UserInputType;
  setUserInput: Dispatch<SetStateAction<UserInputType>>;
};

export const UserInputContext = createContext<UserInputContextType>({
  userInput: {},
  setUserInput: () => {},
});
