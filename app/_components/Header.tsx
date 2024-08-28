import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import ALOGO from "@/public/ALogo.svg"

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      {/* <Image src={ALOGO} alt="logo" width={150} height={100} priority /> */}
      <h1 className="font-bold text-primary text-2xl italic">AI Course Generator</h1>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
