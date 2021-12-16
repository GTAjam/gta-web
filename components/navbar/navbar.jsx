import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.st}>
      <ul>
        <li className={styles.bt}>home</li>
        <li>about</li>
        <li>our team</li>
      </ul>
    </nav>
  );
};

export default Navbar;
