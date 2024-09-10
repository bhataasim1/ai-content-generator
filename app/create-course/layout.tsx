"use client";
import { useState } from "react";
import { UserInputContext } from "../_context/UserInputContext";
import Header from "../dashboard/_components/Header";
import { UserInputType } from "@/types/types";

const CreateCourseLayout = ({ children }: { children: React.ReactNode }) => {
  const [userInput, setUserInput] = useState<UserInputType>({});
  return (
    <div>
      <UserInputContext.Provider value={{ userInput, setUserInput }}>
        <Header />
        {children}
      </UserInputContext.Provider>
    </div>
  );
};

export default CreateCourseLayout;
