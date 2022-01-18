import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <div>

      <nav>
        <div className="logo" style={{ fontFamily: "Marcellus SC" }}>GameToAim <span className="text-orange-400">(GTA)</span></div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <FontAwesomeIcon icon={faStream} className="hamburger"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTimes} className="hamburger2"></FontAwesomeIcon>
        </label>
        <ul style={{ fontFamily: "Roboto Condensed" }}>
          <Link href="/"><li><a className="active" href="#">Home</a></li></Link>
          <Link href="/about"><li><a href="#">About</a></li></Link>
          <Link href="/projects"><li><a href="#">Projects</a></li></Link>
          <Link href="/team"><li><a href="/team">Team</a></li></Link>
          <li><a href="mailto:gtaclub2020@gmail.com">Contact</a></li>
        </ul>
      </nav>

    </div >
  )
}

export default navbar
