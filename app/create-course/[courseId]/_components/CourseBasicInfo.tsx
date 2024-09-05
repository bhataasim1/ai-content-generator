import Image from "next/image";
import { CourseType } from "../page";
import { LuPuzzle } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import EditCourseBasicInfo from "./_edit/EditCourseBasicInfo";

type CourseBasicInfoProps = {
  courseInfo: CourseType | null;
  onRefresh: (refresh: boolean) => void;
};

const CourseBasicInfo = ({ courseInfo, onRefresh }: CourseBasicInfoProps) => {
  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <h2 className="font-bold text-3xl">
            {courseInfo?.courseOutput.topic}
            <EditCourseBasicInfo
              courseInfo={courseInfo}
              onRefresh={() => onRefresh(true)}
            />
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {courseInfo?.courseOutput.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <LuPuzzle /> {courseInfo?.category}
          </h2>

          <Button className="w-full mt-5">Start</Button>
        </div>
        <div>
          <Image
            src={"/vercel.svg"}
            alt="image"
            width={200}
            height={200}
            className="w-full rounded-xl h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
