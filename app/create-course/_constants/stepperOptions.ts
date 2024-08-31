import { IconType } from "react-icons/lib";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";

type StepperOption = {
  id: number;
  name: string;
  icon: IconType;
};

export const stepperOptions: StepperOption[] = [
  {
    id: 1,
    name: "Category",
    icon: HiOutlineSquare3Stack3D,
  },
  {
    id: 2,
    name: "Topic and Desc",
    icon: FiTarget,
  },
  {
    id: 3,
    name: "Options",
    icon: IoMdOptions,
  },
];
