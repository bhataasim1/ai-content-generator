import { CourseType } from "@/types/types";
import Image from "next/image";
import { MdMenuBook } from "react-icons/md";

type CourseCardProps = {
  course: CourseType;
};

const CourseCard = ({ course }: CourseCardProps) => {
  // console.log(course);
  return (
    <div className="shadow-sm rounded-lg border p-2 hover:border-primary hover:scale-105 transition-all cursor-pointer mt-4">
      <Image
        src={course.courseBanner!}
        alt={course.courseName}
        width={300}
        height={200}
        priority
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="p-2">
        <h2 className="font-medium text-lg">{course.courseOutput.topic}</h2>
        <p className="text-sm text-gray-400 my-1">{course.category}</p>

        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 p-1 bg-purple-50 text-primary text-sm rounded-sm">
            <MdMenuBook /> {course.courseOutput.chapters.length} Chapters
          </h2>
          <h2 className="text-sm p-1 bg-purple-50 text-primary rounded-sm">
            {course.level} Level
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
