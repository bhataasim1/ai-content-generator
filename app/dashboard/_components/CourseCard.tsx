import { CourseType } from "@/types/types";
import Image from "next/image";
import { MdMenuBook } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DropDownOptions from "./DropDownOptions";
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type CourseCardProps = {
  course: CourseType;
  onRefresh: () => void;
  displayUser?: boolean;
};

const CourseCard = ({
  course,
  onRefresh,
  displayUser = false,
}: CourseCardProps) => {
  // console.log(course);

  const handleOnDelete = async () => {
    const res = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course.id))
      .returning({
        id: CourseList.id,
        courseName: CourseList.courseName,
      });

    if (res) {
      onRefresh();
    }
  };

  // hover:border-primary hover:scale-105 transition-all cursor-pointer mt-4
  return (
    <div className="shadow-sm rounded-lg border p-2 ">
      <Link href={`/course/${course.courseId}`}>
        <Image
          src={course?.courseBanner ?? "/thumbnail.png"}
          alt={course?.courseName ?? "Ai Course Generator"}
          width={300}
          height={200}
          priority
          className="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-all cursor-pointer"
        />
      </Link>

      <div className="p-2">
        <h2 className="font-medium text-lg flex items-center justify-between">
          {course.courseOutput.topic}
          {!displayUser && (
            <DropDownOptions handleDeleteCourse={() => handleOnDelete()}>
              <HiOutlineDotsVertical
                size={20}
                className="cursor-pointer p-1 bg-purple-50 text-primary text-sm rounded-sm"
              />
            </DropDownOptions>
          )}
        </h2>
        <p className="text-sm text-gray-400 my-1">{course.category}</p>

        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 p-1 bg-purple-50 text-primary text-sm rounded-sm">
            <MdMenuBook /> {course.courseOutput.chapters.length} Chapters
          </h2>
          <h2 className="text-sm p-1 bg-purple-50 text-primary rounded-sm">
            {course.level} Level
          </h2>
        </div>

        {displayUser && (
          <div className="flex justify-start items-center gap-3 mt-2">
            <Image
              src={course?.userprofileimage || "/userProfile.png"}
              alt={course?.username || "Ai Course Generator"}
              width={30}
              height={30}
              priority
              className="rounded-full "
            />
            <Badge variant={"outline"}>{course.username}</Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
