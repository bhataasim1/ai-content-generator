"use client";

import { db } from "@/configs/db";
import { CourseChapters, CourseList } from "@/schema/schema";
import { ChapterContentType, ChapterType, CourseType } from "@/types/types";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";

type CourseStartProps = {
  params: { courseId: string };
};

const CourseStart = ({ params }: CourseStartProps) => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<ChapterType | null>(
    null
  );
  const [chapterContent, setChapterContent] =
    useState<ChapterContentType | null>(null);

  const getCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.courseId, params.courseId));

      setCourse(result[0] as CourseType);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    params && getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  if (!course) return <div>Loading...</div>;

  const getChapterContent = async (chapterId: number) => {
    const res = await db
      .select()
      .from(CourseChapters)
      .where(
        and(
          eq(CourseChapters.chapterId, chapterId),
          eq(CourseChapters.courseId, course.courseId)
        )
      );

    // console.log("content", res);

    setChapterContent(res[0] as ChapterContentType);
  };

  //   console.log("chapterContent", chapterContent);

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block h-screen border-r shadow-sm">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput.topic}
        </h2>
        <div>
          {course?.courseOutput.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-100 ${
                selectedChapter?.chapter_name === chapter.chapter_name &&
                "bg-purple-50"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                getChapterContent(index);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="md:ml-64">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
};

export default CourseStart;
