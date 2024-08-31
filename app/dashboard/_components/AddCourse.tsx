"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";

const AddCourse = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-xs text-gray-500">
          Create new course with AI, share with friends and Earn some penny
        </p>
      </div>
      <Link href="/create-course">
        <Button className="gap-2">
          <FaWandMagicSparkles />
          Create AI course
        </Button>
      </Link>
    </div>
  );
};

export default AddCourse;
