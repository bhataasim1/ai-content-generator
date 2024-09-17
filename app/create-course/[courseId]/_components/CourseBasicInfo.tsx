"use client";

import Image from "next/image";
import { LuPuzzle } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import EditCourseBasicInfo from "./_edit/EditCourseBasicInfo";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { uploadFilesToFirebase } from "../_utils/uploadFilesToFirebase";
import { CourseType } from "@/types/types";
import Link from "next/link";

type CourseBasicInfoProps = {
  courseInfo: CourseType | null;
  onRefresh: (refresh: boolean) => void;
  edit?: boolean;
};

const CourseBasicInfo = ({
  courseInfo,
  onRefresh,
  edit = true,
}: CourseBasicInfoProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null | undefined>(
    null
  );

  useEffect(() => {
    setSelectedImage(courseInfo?.courseBanner);
  }, [courseInfo]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0) as Blob;
    setSelectedImage(URL.createObjectURL(file));
    uploadFilesToFirebase(file, courseInfo!);
  };

  // console.log("Course Info", courseInfo);

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <h2 className="font-bold text-3xl">
            {courseInfo?.courseOutput.topic}
            {edit && (
              <EditCourseBasicInfo
                courseInfo={courseInfo}
                onRefresh={() => onRefresh(true)}
              />
            )}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {courseInfo?.courseOutput.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <LuPuzzle /> {courseInfo?.category}
          </h2>

          {!edit && (
            <Link href={`/course/${courseInfo?.courseId}/start`}>
              <Button className="w-full mt-5">Start</Button>
            </Link>
          )}
        </div>
        <div>
          <label htmlFor="image-upload">
            <Image
              src={selectedImage ? selectedImage : "/thumbnail.png"}
              alt="image"
              width={200}
              height={200}
              className={`w-full rounded-xl h-[250px] object-cover ${
                edit && "cursor-pointer"
              }`}
            />
          </label>
          {edit && (
            <Input
              type="file"
              accept="image/*"
              id="image-upload"
              className="opacity-0"
              onChange={handleImageUpload}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
