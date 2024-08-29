"use client";
import Image from "next/image";
import React from "react";
import { navList } from "../_constants/navList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/vercel.svg"} alt="logo" width={160} height={100} priority />
      <hr className="my-5" />

      <ul>
        {navList.map((item) => (
          <Link href={item.route} key={item.id}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.route === path && "bg-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">{React.createElement(item.icon)}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%]">
        <Progress value={50} />
        <h2 className="text-sm my-2">3 out of 5 Courses created</h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your Plan for Unlimited
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
