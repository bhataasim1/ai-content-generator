"use client";

import { useState } from "react";
import { UserCourseListContext } from "../_context/UserCourseList.context";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { CourseType } from "@/types/types";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [userCourseList, setUserCourseList] = useState<CourseType[]>([]);
  return (
    <UserCourseListContext.Provider
      value={{ userCourseList, setUserCourseList }}
    >
      <div>
        <div className="md:w-64 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:ml-64">
          <Header />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  );
};

export default DashboardLayout;
