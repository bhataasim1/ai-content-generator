"use client";

import Link from "next/link";
import { GradientTextAnimation } from "./textAnimations/GradientTextAnimation";
import PulsatingButton from "@/components/ui/pulsating-button";
import WordPullUp from "@/components/ui/word-pull-up";
import { useUser } from "@clerk/nextjs";
import ShinyButton from "@/components/ui/shiny-button";

const Hero = () => {
  const { user } = useUser();
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <GradientTextAnimation title="Introducting AI Course Generator" />
          <WordPullUp
            className="text-4xl font-bold tracking-[-0.02em] text-black md:text-7xl md:leading-[5rem] dark:text-white"
            words="AI Course Generator"
          />

          <p className="mt-10 sm:text-xl/relaxed">
            Revolutionize your Course creation with our AI-powered App.
            Delevering, engaging and high quality courses in minutes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 z-10">
            {!user ? (
              <Link href="/sign-in">
                <PulsatingButton
                  text="Get Started"
                  pulseColor="150, 0, 255"
                  backgroundColor="#9945FF"
                  textColor="#ffffff"
                  animationDuration="1.5s"
                  buttonWidth="200px"
                  buttonHeight="50px"
                />
              </Link>
            ) : (
              <Link href="/dashboard">
                <ShinyButton text="Go to Dashboard" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
