import NavLink from "@/components/custom/nav-link";
import { VscHome } from "react-icons/vsc";
import { BsTelephonePlus } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { TbBrandCampaignmonitor } from "react-icons/tb";

import { SiAsterisk } from "react-icons/si";

interface Props {
  className?: string;
}

const SideNav = ({ className }: Props) => {
  return (
    <div className="flex flex-col bg-zinc-50 border-r-[1px] border-zinc-300 w-64">
      {/** top part of the sidebar */}
      <div className="flex flex-col items-center justify-center min-h-16 max-h-16 border-b-[1px] border-zinc-300 ">
        <span className="font-extrabold">Discador</span>
      </div>

      {/** sidebar items here */}
      <div className="flex flex-col gap-2.5 h-full p-2 ">
        <NavLink href="/dashboard" label="Dashboard">
          <VscHome />
        </NavLink>
        <NavLink href="/reports" label="Relatório">
          <LuClipboardList />
        </NavLink>
        <NavLink href="/manager" label="Chamada">
          <BsTelephonePlus />
        </NavLink>
        <NavLink href="/campaigns" label="Campanha">
          <TbBrandCampaignmonitor />
        </NavLink>
        <NavLink href="/managers" label="Manager">
          <SiAsterisk />
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
