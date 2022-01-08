import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li><Link href="/team">our team</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
