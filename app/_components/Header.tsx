import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Image src={'/vercel.svg'} alt="logo" width={150} height={100} priority />
      {/* <h1 className="font-bold text-primary text-2xl italic">AI Course Generator</h1> */}
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
