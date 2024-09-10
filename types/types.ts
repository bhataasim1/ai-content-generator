export type UserInputType = {
    category?: string;
    difficulty?: string;
    duration?: string;
    video?: string;
    totalChapters?: number;
    topic?: string;
    description?: string;
  };

export type ChapterType = {
  chapter_name: string;
  description: string;
  duration: string;
};

export type courseOutputType = {
  category: string;
  chapters: ChapterType[];
  duration: string;
  level: string;
  topic: string;
  description: string;
};

export type CourseType = {
  id: number;
  courseId: string;
  courseName: string;
  category: string;
  level: string;
  courseOutput: courseOutputType;
  isVideo: string;
  username: string | null;
  userprofileimage: string | null;
  createdBy: string | null;
  courseBanner: string | null;
  isPublished: boolean;
};
