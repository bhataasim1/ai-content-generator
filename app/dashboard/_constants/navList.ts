import { IconType } from "react-icons/lib";
import {
  LuLayoutDashboard,
  LuAtom,
  LuShieldCheck,
  LuLogOut,
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
  {
    id: 4,
    name: "Logout",
    icon: LuLogOut,
    route: "/dashboard/logout",
  },
];
