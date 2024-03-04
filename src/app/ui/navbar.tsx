import Link from "next/link";
import { NavLinkProps } from "../lib/definitions";
import { BeVietnamProRegular, PlayfairDisplayHeading } from "../lib/fonts";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-6 bg-white opacity-90 shadow">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <h1 className={`${PlayfairDisplayHeading.className}`}>
            vampconnoisseur.
          </h1>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink href="/" title="HOME" />
        <NavLink href="/projects" title="PROJECTS" />
      </div>
    </nav>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className={`${BeVietnamProRegular.className} hover:bg-gray-300 px-3 py-2 text-sm font-medium`}
    >
      {title}
    </Link>
  );
};
