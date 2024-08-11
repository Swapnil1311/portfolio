import React from "react";
import logo from "../assets/Logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-7 h-[125px]">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-full w-40 mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-700" />
        <FaGithub className="" />
        <FaInstagram className="hover: bg-gradient-to-b hover:from-pink-700 hover:via-orange-500 hover:to-purple-700 hover:bg-clip-content " />
        <FaSquareXTwitter className="" />
      </div>
    </nav>
  );
};

export default Navbar;
