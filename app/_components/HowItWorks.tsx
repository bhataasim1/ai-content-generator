import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";
import { LuBookOpen, LuFileVideo, LuShare2, LuUser2 } from "react-icons/lu";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: LuUser2,
    title: "Register for an Account",
    description:
      "Sign up for a free account to access the course creation tools. Once registered, you’ll be able to log in and start building your personalized courses",
  },
  {
    icon: LuBookOpen,
    title: "Create Your First Course",
    description:
      "Use our intuitive interface to generate a course. Simply provide a topic, and Gemini AI will automatically generate the course content for you.",
  },
  {
    icon: LuFileVideo,
    title: "Automatically Attach Related Videos",
    description:
      "After your course is generated, our system will find and attach relevant YouTube videos that complement your course material, saving you the hassle of finding additional resources",
  },
  {
    icon: LuShare2,
    title: "Customize and Share",
    description:
      "Customize your course to fit your needs, and once you’re satisfied, publish and share it with your students. Our platform makes it easy to manage and distribute your course content.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="get-started" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How To{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Get{" "}
        </span>
        Started
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Create Smarter, Learn Faster – AI-Powered Courses at Your Fingertips
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {React.createElement(icon, { size: 40 })}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
