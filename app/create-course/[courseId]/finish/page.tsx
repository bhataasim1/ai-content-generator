"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { and, eq } from "drizzle-orm";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { BaseEnvironment } from "@/configs/BaseEnvironment";
import { IoCopyOutline } from "react-icons/io5";
import { CourseType } from "@/types/types";
import { ParamsType } from "../page";
import Link from "next/link";

const FinsihScreen = ({ params }: { params: ParamsType }) => {
  const { user } = useUser();
  const [course, setCourse] = useState<CourseType | null>(null);

  const router = useRouter();
  const { HOST_URL } = new BaseEnvironment();
  const COURSE_LINK = `${HOST_URL}/course/${course?.courseId}/start`;

  useEffect(() => {
    params && getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-primary">
        Congrats! Your course is Ready
      </h2>

      <CourseBasicInfo
        courseInfo={course}
        onRefresh={() => console.log("Refershing")}
      />

      {/* Add aslo the share button here */}
      <h2 className="mt-3">Course URL</h2>
      <h2 className="text-center font-bold text-gray-400 border p-2 rounded flex gap-5 items-center">
        <Link href={COURSE_LINK} className="cursor-pointer hover:text-primary transition-all delay-75">{COURSE_LINK}</Link>
        <IoCopyOutline
          className="h-5 w-5 cursor-pointer hover:text-primary transition-all delay-75 hover:scale-110"
          onClick={async () => await navigator.clipboard.writeText(COURSE_LINK)}
        />
      </h2>
    </div>
  );
};

export default FinsihScreen;
