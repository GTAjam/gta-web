import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    /*Navbar*/
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="">GTA</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/team">Our Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
