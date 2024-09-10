import { generateCourseChapters } from "@/configs/ai-models";
import { getYoutubeVideos } from "@/configs/service";
import { db } from "@/configs/db";
import { CourseChapters } from "@/schema/schema";
import { CourseType } from "@/types/types";

export const generateCourseContent = async (
  course: CourseType,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);

  try {
    const chapters = course?.courseOutput.chapters;

    const chapterPromises = chapters?.map(async (chapter, index) => {
      const PROMPT = `Explain the concepts in detail on Topic: ${course?.courseName}, Chapter: ${chapter.chapter_name}, in JSON Format with list of array with fields as Title, explanation of given chapter in detail, code examples (code field <precode> format) if applicable.`;

      try {
        const query = course!.courseName + ":" + chapter.chapter_name;

        // Fetch video ID
        const resp = await getYoutubeVideos(query);
        console.log("Videos", resp);
        const videoId = resp[0].id.videoId;

        // Generate course content
        const result = await generateCourseChapters.sendMessage(PROMPT);
        const content = await JSON.parse(result?.response?.text()!);

        // Insert into the database
        await db.insert(CourseChapters).values({
          chapterId: index,
          courseId: course.courseId,
          content: content,
          videoId: videoId,
        });
      } catch (error) {
        console.log(`Error in processing chapter ${index}:`, error);
      }
    });

    await Promise.all(chapterPromises!);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
