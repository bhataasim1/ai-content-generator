import { ChapterContentType, ChapterType } from "@/types/types";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactMarkdown from "react-markdown";

type ChapterContentProps = {
  chapter: ChapterType | null;
  content: ChapterContentType | null;
};

const videoOpts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter, content }: ChapterContentProps) => {
//   console.log(content);


  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.chapter_name}</h2>
      <p className="text-gray-500">{chapter?.description}</p>

      {/* video */}
      <div className="flex justify-center my-6">
        <YouTube
          videoId={content?.videoId}
          opts={videoOpts}
          onReady={onPlayerReady}
        />
      </div>

      <div>
        {content &&
          content.content.map((item, index) => (
            <div key={index} className="my-5 bg-sky-50 rounded-lg p-5">
              <h2 className="font-medium text-lg">{item.title}</h2>
              <ReactMarkdown className={"mt-3"}>
                {item.explanation}
              </ReactMarkdown>
              {item.code_examples && item.code_examples.length > 0 && (
                <div className="bg-black text-white p-10 mt-3 rounded-md">
                  {item.code_examples.map((example, idx) => (
                    <pre key={idx}>
                      {/* <code>{example.code}</code> */}
                      <code>
                        {Array.isArray(example.code)
                          ? example.code
                              .join("")
                              .replace("<precode>", "")
                              .replace("</precode>", "")
                          : (example.code as string)
                              .replace("<precode>", "")
                              .replace("</precode>", "")}
                      </code>
                    </pre>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChapterContent;
