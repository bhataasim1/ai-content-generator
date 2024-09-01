import { UserInputType } from "@/app/_context/UserInputContext";
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import uuid4 from "uuid4";

type UserInput = Pick<UserInputType, "topic" | "difficulty" | "category">;

type CourseData = {
  courseId: string;
  courseName: string;
  level: string;
  category: string;
  courseOutput: JSON;
  createdBy?: string;
  username?: string;
  userprofileimage?: string;
};

export async function storeDataInDatabase(
  id: string,
  userInput: UserInput,
  data: JSON,
  user: any
) {
  try {
    const result = await db.insert(CourseList).values({
      courseId: id,
      courseName: userInput.topic,
      category: userInput.category,
      level: userInput.difficulty,
      courseOutput: data,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      username: user?.fullName,
      userprofileimage: user?.imageUrl,
    } as CourseData);
    return result;
  } catch (error) {
    console.log(error);
  }
}
