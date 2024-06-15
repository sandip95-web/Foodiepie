"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import NavLinks from "../navlinks/NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <nav className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-5 bg-gradient-to-r from-teal-400 to-blue-500 shadow-md rounded-lg">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            className="h-16 w-16 rounded-full mr-3"
            priority
            alt="food logo"
          />
          <span className="text-white text-2xl font-bold">FooDiePie</span>
        </Link>
        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <MdOutlineMenu
              className={`toggle ${
                isOpen ? "hidden" : "block"
              } w-8 h-8 text-white`}
            />
            <FaRegWindowClose
              className={`toggle ${
                isOpen ? "block" : "hidden"
              } w-8 h-8 text-white`}
            />
          </button>
        </div>
        <div
          className={`toggle ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex text-right mt-5 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          <NavLinks href="/meals"> Browse Meals</NavLinks>
          <NavLinks href="/community"> Community</NavLinks>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
