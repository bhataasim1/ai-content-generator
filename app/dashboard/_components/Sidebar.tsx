"use client";

import React, { useContext } from "react";
import { navList } from "../_constants/navList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { UserCourseListContext } from "@/app/_context/UserCourseList.context";
import WordRotate from "@/components/ui/word-rotate";

const Sidebar = () => {
  const path = usePathname();
  const { userCourseList } = useContext(UserCourseListContext);
  // console.log("User Context Courses", userCourseList);
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <WordRotate
        className="text-4xl font-bold text-black dark:text-white text-center"
        words={["AI", "Course", "Generator"]}
      />
      <hr className="my-5" />

      <ul>
        {navList.map((item) => (
          <Link href={item.route} key={item.id}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.route === path && "bg-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">
                <item.icon />
              </div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList.length / 5) * 100} />
        <h2 className="text-sm my-2">
          {userCourseList.length} out of 5 Courses created
        </h2>
        <Link href="/upgrade">
          <h2 className="text-xs text-gray-500">
            Upgrade your Plan for Unlimited
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
