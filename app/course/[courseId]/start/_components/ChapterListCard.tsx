import { ChapterType } from "@/types/types";
import React from "react";
import { LuTimer } from "react-icons/lu";

type ChapterListCardProps = {
  chapter: ChapterType;
  index: number;
};

const ChapterListCard = ({ chapter, index }: ChapterListCardProps) => {
  return (
    <div className="grid grid-cols-5 p-3 items-center border-b">
      <div>
        <h2 className="p-1 bg-primary text-white rounded-full w-8 h-8 text-center">{index +1}</h2>
      </div>
      <div className="col-span-4">
        <h2 className="font-medium">{chapter.chapter_name}</h2>
        <h2 className="text-sm text-primary flex items-center gap-2"> <LuTimer /> {chapter.duration}</h2>
      </div>
    </div>
  );
};

export default ChapterListCard;
