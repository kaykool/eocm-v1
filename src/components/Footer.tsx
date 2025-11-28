import Image from "next/image";
import Link from "next/link";

const links1 = [
  { href: "/", label: "Homepage" },
  { href: "/contact", label: "Contact" },
  { href: "/tos", label: "Term of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];
const links2 = [
  { href: "/", label: "All Products" },
  { href: "/privacy-policy", label: "On Sale" },
  { href: "/contact", label: "New Arrival" },
  { href: "/tos", label: "Best Seller" },
];
const links3 = [
  { href: "/", label: "About" },
  { href: "/contact", label: "Carriers" },
  { href: "/tos", label: "Blog" },
  { href: "/privacy-policy", label: "Affiliate Program" },
];

const linkGroups = [links1, links2, links3];

const Footer = () => {
  return (
    <footer className="main-container  bg-gray-800 md:rounded-lg p-6 md:p-8 lg:px-16 flex-col md:flex-row items-center md:items-start justify-evenly md:justify-between gap-4 md:gap-0">
      <div className="md:flex md:flex-col md:gap-6 flex flex-col items-center md:items-start gap-2">
        <Link className="flex items-center " href="/">
          <Image
            src="/logo.png"
            alt={"trendsetter logo"}
            width={40}
            height={40}
          />
          <div className="font-bold text-lg text-background">TRENDSETTER</div>
        </Link>

        <div className="text-gray-300">@ 2025 Trendsetter</div>
        <div className="text-gray-300">All Right Reserved</div>
      </div>
      {linkGroups.map((links, index) => (
        <div
          key={index}
          className=" gap-2 flex flex-col items-center md:items-start md:flex-col md:gap-6 "
        >
          {links.map((link) => (
            <Link
              key={link.label}
              className="text-gray-300 hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
