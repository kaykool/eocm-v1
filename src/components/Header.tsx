"use client";
import { Bell, House, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="main-container py-4 z-20 shadow-sm justify-between top-0 sticky bg-white">
      <Link className="flex items-center " href="/">
        <Image src="/logo.png" alt={"trendsetter"} width={35} height={35} />
        <div className="font-bold text-lg">TRENDSETTER</div>
      </Link>

      <div className="flex items-center">
        <div className="flex md:hidden">
          <button className="" aria-label="Open Menu">
            <Menu />
          </button>
        </div>

        <div className="hidden md:flex md:gap-5">
          <div className="flex ring ring-gray-400 rounded-md p-1 px-2 gap-2 ">
            <button
              role="search-icon"
              tabIndex={-1}
              aria-label="search-icon"
              className="focus:outline-none"
            >
              <Search size={18} className="text-gray-400" />
            </button>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full focus:outline-none"
            />
          </div>
          <button>
            <House size={24} />
          </button>
          <button className="">
            <Bell size={24} />
          </button>
          <button className="relative inline-flex justify-center items-center ">
            <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-yellow-400  text-black">
              2
            </span>
            <ShoppingCart size={24} />
          </button>

          <Link
            className="flex items-center font-bold bg-yellow-400 px-4 py-2 rounded-md text-black"
            href={"/sign-in"}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
