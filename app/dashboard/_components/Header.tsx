import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <Image src={"/vercel.svg"} alt="logo" width={100} height={100} priority />
      <UserButton />
    </div>
  );
};

export default Header;
