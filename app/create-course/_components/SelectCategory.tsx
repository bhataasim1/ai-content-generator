import React from "react";
import { categoryList } from "../_shared/CategoryList";
import Image from "next/image";

const SelectCategory = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-10 md:px-20">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer"
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
  );
};

export default SelectCategory;
