"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { CourseType } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseList.context";
import SkeletonLoading from "./SkeletonLoading";

const UserCourseList = () => {
  const { user } = useUser();
  const [courses, setCourses] = useState<CourseType[] | null>(null);
  const { setUserCourseList } = useContext(UserCourseListContext);

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
    setUserCourseList(res as CourseType[]);
    // console.log(res);
  };

  if (courses?.length === 0) return <div className="flex justify-center items-center mt-44">No courses found</div>;
  return (
    <div className="mt-10">
      <h2 className="font-medium text-lg">My AI Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onRefresh={() => getUserCourses()}
            />
          ))
        ) : (
          <SkeletonLoading items={5} />
        )}
      </div>
    </div>
  );
};

export default UserCourseList;
