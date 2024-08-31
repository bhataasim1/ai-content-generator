import React, { useContext } from "react";
import { categoryList } from "../_shared/CategoryList";
import Image from "next/image";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectCategory = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);

  const handleCategorySelect = (category: string) => {
    setUserInput((prev) => ({ ...prev, category }));
  };

  return (
    <div className=" px-10 md:px-20">
      <h2 className="my-5">Select the course category</h2>

      <div className="grid grid-cols-3 gap-10">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer ${
              userInput?.category === category.name && "border-primary bg-blue-50"
            }`}
            onClick={() => handleCategorySelect(category.name)}
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={100}
              height={100}
              priority
            />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
