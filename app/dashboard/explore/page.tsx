"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { CourseType } from "@/types/types";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SkeletonLoading from "../_components/SkeletonLoading";

const ExplorePage = () => {
  const [courseList, setCourseList] = useState<CourseType[] | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const getAllCourses = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .limit(8)
      .offset(pageIndex * 8);
    // console.log(result);
    setCourseList(result as CourseType[]);
  };

  // console.log(courseList);

  useEffect(() => {
    getAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  return (
    <div>
      <h2 className="font-bold text-3xl">Explore More Courses</h2>
      <p>Explore courses build with AI by Other Users</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {courseList ? (
          courseList?.map((course) => (
            <div key={course.courseId}>
              <CourseCard
                course={course}
                onRefresh={() => getAllCourses()}
                displayUser={true}
              />
            </div>
          ))
        ) : (
          <SkeletonLoading items={8} />
        )}
      </div>

      <div className="flex justify-between mt-5 items-center">
        <Button
          onClick={() => setPageIndex(pageIndex - 1)}
          disabled={pageIndex == 0}
        >
          Prev
        </Button>
        <Badge>Page : {pageIndex + 1}</Badge>
        <Button
          onClick={() => setPageIndex(pageIndex + 1)}
          disabled={courseList?.length !== 8}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExplorePage;
