import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
}

const NavLink = ({ className, children, href, label }: Props) => {
  return (
    <Link
      href={href}
      className="flex p-2 pl-[3] transition-all gap-1 items-center rounded-md hover:bg-zinc-200/60"
    >
      {children} {/** should be the icon */}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
