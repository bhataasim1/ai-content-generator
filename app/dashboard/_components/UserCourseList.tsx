"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { CourseType } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const UserCourseList = () => {
  const { user } = useUser();
  const [courses, setCourses] = useState<CourseType[] | null>(null);

  useEffect(() => {
    user && getUserCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getUserCourses = async () => {
    const res = await db
      .select()
      .from(CourseList)
      .where(
        eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress ?? "")
      );

    setCourses(res as CourseType[]);
    // console.log(res);
  };

  if (!courses) return <div>Loading...</div>;
  if (courses.length === 0) return <div>No courses found</div>;
  return (
    <div className="mt-10">
      <h2 className="font-medium text-lg">My AI Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses &&
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
      </div>
    </div>
  );
};

export default UserCourseList;
