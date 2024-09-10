import { db } from "@/configs/db";
import { firebaseStorage } from "@/configs/firebase.config";
import { CourseList } from "@/schema/schema";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { eq } from "drizzle-orm";
import { CourseType } from "@/types/types";

export const uploadFilesToFirebase = async (
  file: Blob,
  courseInfo: CourseType
) => {
  const fileName = `${Date.now()}-${courseInfo?.courseId!}-${
    courseInfo?.category
  }.jpg`;
  const storageRef = ref(firebaseStorage, "ai-content-generator/" + fileName);
  await uploadBytes(storageRef, file)
    // .then((snapshot) => {
    //     console.log("Image Uploaded Successfully", snapshot);
    // })
    .then(() => {
      getDownloadURL(storageRef).then(async (url) => {
        // console.log("File available at", url);
        await db
          .update(CourseList)
          .set({
            courseBanner: url,
          })
          .where(eq(CourseList.id, courseInfo?.id!));
      });
    });
};
