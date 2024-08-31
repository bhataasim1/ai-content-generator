"use client";
import React, { useState } from "react";
import { stepperOptions } from "./_constants/stepperOptions";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";

const CreateCoursePage = () => {
  const [step, setStep] = useState<number>(0);
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
        {step === 0 && <SelectCategory />}


        <div className="flex justify-between mt-10">
          <Button
            variant={"outline"}
            onClick={() => setStep(step - 1)}
            disabled={step == 0}
          >
            Previous
          </Button>
          {stepperOptions.length - 1 == step ? (
            <Button>Generate Course</Button>
          ) : (
            <Button onClick={() => setStep(step + 1)}>Next</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
