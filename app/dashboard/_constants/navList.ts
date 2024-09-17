import { IconType } from "react-icons/lib";
import {
  LuLayoutDashboard,
  LuAtom,
  LuShieldCheck,
} from "react-icons/lu";

type NavListType = {
  id: number;
  name: string;
  icon: IconType;
  route: string;
};

export const navList: NavListType[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: LuLayoutDashboard,
    route: "/dashboard",
  },
  {
    id: 2,
    name: "Explore",
    icon: LuAtom,
    route: "/dashboard/explore",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: LuShieldCheck,
    route: "/dashboard/upgrade",
  },
];
