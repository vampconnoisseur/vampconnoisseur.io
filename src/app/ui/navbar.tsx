import Image from "next/image";
import Link from "next/link";
import { NavLinkProps } from "../lib/definitions";
import { BeVietnamProRegular } from "../lib/fonts";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image className="h-8 w-auto mr-2" src="" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink href="/" title="Home" />
        <NavLink href="/" title="Projects" />
        <NavLink href="/" title="About" />
      </div>
    </nav>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className={`${BeVietnamProRegular.className} text-white-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
    >
      {title}
    </Link>
  );
};
