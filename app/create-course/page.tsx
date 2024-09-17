"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { stepperOptions } from "./_constants/stepperOptions";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDesc from "./_components/TopicDesc";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { generateCourseLayout } from "@/configs/ai-models";
import LoadingDialog from "./_components/LoadingDialog";
import { useUser } from "@clerk/nextjs";
import { storeDataInDatabase } from "./_utils/saveDataInDb";
import uuid4 from "uuid4";
import { useRouter } from "next/navigation";

//may be we need to remove these imports if we found any other best way
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { eq } from "drizzle-orm";
import { CourseType } from "@/types/types";
import { UserCourseListContext } from "../_context/UserCourseList.context";

const CreateCoursePage = () => {
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { userInput } = useContext(UserInputContext);

  // Don't Know im doing wrong here
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  const getUserCourses = async () => {
    const res = await db
      .select()
      .from(CourseList)
      .where(
        eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress ?? "")
      );
    setUserCourseList(res as CourseType[]);
  };

  const { user } = useUser();

  const router = useRouter();

  const allowNextStep = () => {
    if (step === 0) {
      return userInput?.category?.length ?? 0 > 0;
    } else if (step === 1) {
      return !!userInput?.topic && !!userInput?.description;
    } else if (step === 2) {
      return (
        !!userInput?.difficulty &&
        !!userInput?.duration &&
        !!userInput?.video &&
        !!userInput?.totalChapters
      );
    }
    return false;
  };

  const generateCourse = async () => {
    const BASIC_PROMPT = `Generate a course tutorial on following details with field name, description, along with the chapter name about and duration: Category '${userInput?.category}' Topic '${userInput?.topic}' Description '${userInput.description}' Level '${userInput?.difficulty}' Duration '${userInput?.duration}' chapters '${userInput?.totalChapters}' in JSON format.\n`;
    setLoading(true);
    try {
      let id = uuid4();
      const result = await generateCourseLayout.sendMessage(BASIC_PROMPT);
      const data = JSON.parse(result.response.text());
      // console.log("Data", data);
      await storeDataInDatabase(id, userInput, data, user);
      router.replace(`/create-course/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    user && getUserCourses();
    if (userCourseList.length > 5) {
      router.replace("/dashboard/upgrade");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, userCourseList]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex mt-10">
          {stepperOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    step >= index && "bg-purple-500"
                  }`}
                >
                  <option.icon />
                </div>
                <p className="hidden md:block md:text-sm">{option.name}</p>
              </div>
              {index != stepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md-w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                    step > index && "bg-purple-500"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg-px-44 mt-10 ">
        {step === 0 ? (
          <SelectCategory />
        ) : step === 1 ? (
          <TopicDesc />
        ) : (
          <SelectOption />
        )}

        <div className="flex justify-between mt-10">
          <Button
            variant={"outline"}
            onClick={() => setStep(step - 1)}
            disabled={step == 0}
          >
            Previous
          </Button>
          {stepperOptions.length - 1 == step ? (
            <Button
              disabled={!allowNextStep() || loading}
              onClick={generateCourse}
              className={`gap-2`}
            >
              <FaWandMagicSparkles /> Generate Course
            </Button>
          ) : (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!allowNextStep()}
            >
              Next
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
};

export default CreateCoursePage;
