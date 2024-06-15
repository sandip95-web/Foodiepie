'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({href,children}) => {
    const path=usePathname();
  return (
    <div>
      <Link href={href}
      className={path.startsWith(href) ? 'block md:inline-block text-yellow-500 hover:text-gray-200 px-3 py-2':'block md:inline-block text-white hover:text-gray-200 px-3 py-2'}
      >{children}</Link>
    </div>
  );
};  

export default NavLinks;
