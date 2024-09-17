import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={150} height={100} priority className="object-cover" />
      <UserButton />
    </div>
  );
};

export default Header;
