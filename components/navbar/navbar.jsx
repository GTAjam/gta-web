import React from 'react'
import { useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCircle, faStream } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const toggle = (e) => {
  // console.log(e.current);
  var E = e.current;

  if (E != undefined) {
    E.checked = false;
  }
}

const navbar = () => {

  const myContainer = useRef();

  return (
    <div style={{ display: "block" }}>
      <nav>

        {/* Logo and Text for computer */}
        <div className="logoForComp">
          <div className="logo" style={{ fontFamily: "Marcellus SC", flexGrow: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/GTA logo/pink_transparent.png" style={{ width: "40px", height: "40px" }} />
            <span className="text-orange-400 ml-2 mr-3">GTA</span>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ height: "60%", width: "2px", backgroundColor: "#f2f2f2", borderRadius: "5px" }}></div>

        {/* Hamburger Menus */}
        <input type="checkbox" id="click" ref={myContainer} />
        <label for="click" className="menu-btn">
          <FontAwesomeIcon icon={faStream} className="hamburger"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTimes} className="hamburger2"></FontAwesomeIcon>
        </label>

        {/* Logo and Text for phone */}
        <div className="logoForMob" style={{ display: "none" }}>
          <div className="logo logoForMob" style={{ fontFamily: "Marcellus SC", flexGrow: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/GTA logo/pink_transparent.png" style={{ width: "40px", height: "40px" }} />
          </div>
        </div>

        {/* Menus */}
        <ul style={{ fontFamily: "Roboto Condensed", alignItems: "center", justifyContent: "start", flexGrow: "10" }}>
          <Link href="/"><li><a href="#">Home</a></li></Link>
          <Link href="/about"><li><a href="#">About</a></li></Link>
          <Link href="/projects"><li><a href="#">Projects</a></li></Link>
          <Link href="/team" onClick={toggle(myContainer)}><li><a href="/team">Team</a></li></Link>
          <li onClick={toggle(myContainer)}><a href="mailto:gtaclub2020@gmail.com">Contact</a></li>
        </ul>

        {/* Login */}
        <div className="loginComp" style={{ display: "flex", justifyContent: "end", flexGrow: "0" }}>
          <Link href="/loginPage/login"><a href="#" className="loginBtn">Login</a></Link>
        </div>

        <Link href="/loginPage/login"><FontAwesomeIcon icon={faUserCheck} className="user" style={{ display: "none" }}></FontAwesomeIcon></Link>

      </nav>
    </div>
  )
}

export default navbar
