import { LuTimer, LuCheckCircle2 } from "react-icons/lu";
import { ChapterType } from "../page";

type ChapterListProps = {
  chapterList: ChapterType[] | undefined;
};

const ChapterList = ({ chapterList }: ChapterListProps) => {
  if (!chapterList || chapterList.length === 0) {
    return <p>No chapters available.</p>;
  }

  return (
    <div className="mt-3">
      <h2 className="font-medium text-2xl">Chapters</h2>
      <div className="mt-2">
        {chapterList?.map((chapter, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg mb-2 flex items-center justify-between"
          >
            <div className="flex gap-5 items-center">
              <h2 className="bg-primary h-10 w-10 flex-none text-white rounded-full text-center p-2">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-medium text-lg">{chapter?.chapter_name}</h2>
                <p className="text-sm text-gray-500">{chapter.description}</p>
                <p className="flex gap-2 text-primary items-center">
                  <LuTimer /> {chapter.duration}
                </p>
              </div>
            </div>
            <LuCheckCircle2 className="text-4xl text-gray-300 flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;