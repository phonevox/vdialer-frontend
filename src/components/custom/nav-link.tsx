"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
}

const NavLink = ({ className, children, href, label }: Props) => {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      // className={`flex p-2 pl-[3] transition-all gap-1 items-center rounded-md hover:bg-zinc-200/60 ${isActive ? "hover:ring-1 hover:ring-phonevox-secondary" : ""}`}
      className={`flex p-2 pl-[3] relative transition-all gap-1 items-center hover:bg-zinc-200/35`}
    >
      <div className={`${isActive ? "absolute -left-[0.5px] h-full border-l-[3px] border-phonevox-accent" : ''}`}></div>
      {children} {/** should be the icon */}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
