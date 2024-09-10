import {
  UserInputContext,
} from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInputType } from "@/types/types";
import React, { useContext } from "react";

const TopicDesc = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName: keyof UserInputType, value: string) => {
    setUserInput((prev) => ({ ...prev, [fieldName]: value }));
  };
  return (
    <div className="mx-20 lg:mx-44">
      <div className="mt-5">
        <label htmlFor="">
          Write the Topic for which you want to generate a course
        </label>
        <Input
          placeholder="Enter the topic"
          defaultValue={userInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="">
          Tell us more about your course, what you want to include in the
          course.
        </label>
        <Textarea
          placeholder="About your course"
          defaultValue={userInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDesc;
