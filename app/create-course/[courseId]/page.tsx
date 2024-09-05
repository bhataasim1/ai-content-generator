"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";

type ParamsType = {
  courseId: string;
};

export type ChapterType = {
  chapter_name: string;
  description: string;
  duration: string;
};

type courseOutputType = {
  category: string;
  chapters: ChapterType[];
  duration: string;
  level: string;
  topic: string;
  description: string;
};

export type CourseType = {
  id: number;
  courseId: string;
  courseName: string;
  category: string;
  level: string;
  courseOutput: courseOutputType;
  isVideo: string;
  username: string | null;
  userprofileimage: string | null;
  createdBy: string | null;
};

const CoursePageLayout = ({ params }: { params: ParamsType }) => {
  const { user } = useUser();
  const [course, setCourse] = useState<CourseType | null>(null);

  useEffect(() => {
    params && getCourse();
  }, [params, user]);

  const getCourse = async () => {
    const res = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params.courseId),
          eq(
            CourseList.createdBy,
            user?.primaryEmailAddress?.emailAddress ?? ""
          )
        )
      );
    setCourse(res[0] as CourseType);
    // console.log(res);
  };

  console.log(course);

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>

      {/* Basic Info */}
      <CourseBasicInfo courseInfo={course} />

      {/* Course Details */}
      <CourseDetail courseDetail={course} />

      {/* List Of Lessons */}
      <ChapterList chapterList={course?.courseOutput.chapters} />
    </div>
  );
};

export default CoursePageLayout;
