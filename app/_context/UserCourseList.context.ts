import { CourseType } from "@/types/types";
import { createContext } from "react";

export type UserCourseListContextType = {
  userCourseList: CourseType[];
  setUserCourseList: (value: CourseType[]) => void;
};

export const UserCourseListContext = createContext<UserCourseListContextType>({
  userCourseList: [],
  setUserCourseList: () => {},
});
