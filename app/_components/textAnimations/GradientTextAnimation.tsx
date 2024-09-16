import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ny } from "@/lib/utils";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export function GradientTextAnimation({ title }: { title: string }) {
  return (
    <div className="z-10 flex min-h-5 items-center justify-center cursor-pointer mb-10">
      <Link href="#get-started">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={ny(
              `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            {title}
          </span>
          <LuChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </Link>
    </div>
  );
}
