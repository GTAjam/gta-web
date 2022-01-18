import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const test = () => {

    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 150) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };


    return (
        <div className="bg-dark" style={{ height: "150vh" }}>

            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                </button>
            )}
        </div>
    );











    {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
    // </div >
    // )
}

export default test









// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll";
// // import Link from "next/link";
// import Image from "next/image";
// // import Logo from "../public/streamlineLogo.png";

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div>
//             <nav className="shadow-sm fixed w-full z-10 bg-black">
//                 <div className="w-full">
//                     <div className="flex items-center h-16 w-full">
//                         <div className="flex items-center  mx-20  justify-between w-full">
//                             <div className="flex justify-center items-center flex-shrink-0 ">
//                                 <h1 className=" font-bold text-xl cursor-pointer text-white">
//                                     GameToAim <span className="text-orange-400">(GTA)</span>
//                                 </h1>
//                             </div>
//                             <div className="hidden md:block">
//                                 <div className="ml-10 flex items-baseline space-x-4">
//                                     <Link
//                                         // href="/team"
//                                         activeClass="Home"
//                                         to="/team"
//                                         smooth={true}
//                                         offset={50}
//                                         duration={500}
//                                         className="cursor-pointer text-orange-400 font-semibold px-3 py-2 text-md hover:font-black"
//                                         style={{ color: "#fb923c" }}
//                                     >
//                                         Home
//                                     </Link>
//                                     <Link
//                                         activeClass="about"
//                                         to="about"
//                                         smooth={true}
//                                         offset={50}
//                                         duration={500}
//                                         className="cursor-pointer hover:bg-orange-400 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                     >
//                                         About
//                                     </Link>
//                                     <Link
//                                         activeClass="work"
//                                         to="work"
//                                         smooth={true}
//                                         offset={50}
//                                         duration={500}
//                                         className="cursor-pointer hover:bg-orange-400 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                     >
//                                         Projects
//                                     </Link>

//                                     <Link
//                                         // href="/team"
//                                         activeClass="Services"
//                                         to="work"
//                                         smooth={true}
//                                         offset={50}
//                                         duration={500}
//                                         className="cursor-pointer hover:bg-orange-400 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                     >
//                                         Team
//                                     </Link>

//                                     <Link
//                                         activeClass="contact"
//                                         to="contact"
//                                         smooth={true}
//                                         offset={50}
//                                         duration={500}
//                                         className="cursor-pointer bg-orange-400 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-white"
//                                     >
//                                         Contact
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="mr-10 flex md:hidden ">
//                             <button
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 type="button"
//                                 className="bg-orange-400 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white"
//                                 aria-controls="mobile-menu"
//                                 aria-expanded="false"
//                             >
//                                 <span className="sr-only">Open main menu</span>
//                                 {!isOpen ? (
//                                     <svg
//                                         className="block h-6 w-6"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         aria-hidden="true"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         className="block h-6 w-6"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         aria-hidden="true"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <Transition
//                     show={isOpen}
//                     enter="transition ease-out duration-100 transform"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="transition ease-in duration-75 transform"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                 >
//                     {(ref) => (
//                         <div className="md:hidden" id="mobile-menu">
//                             <div
//                                 ref={ref}
//                                 className="bg-white text-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
//                             >
//                                 <Link
//                                     // href="/home"
//                                     activeClass="home"
//                                     to="home"
//                                     smooth={true}
//                                     offset={50}
//                                     duration={500}
//                                     className="cursor-pointer hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 >
//                                     Home
//                                 </Link>
//                                 <Link
//                                     // href="/about"
//                                     activeClass="about"
//                                     to="about"
//                                     smooth={true}
//                                     offset={50}
//                                     duration={500}
//                                     className="cursor-pointer hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 >
//                                     About
//                                 </Link>

//                                 <Link
//                                     // href="/work"
//                                     activeClass="work"
//                                     to="work"
//                                     smooth={true}
//                                     offset={50}
//                                     duration={500}
//                                     className="cursor-pointer hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 >
//                                     Projects
//                                 </Link>
//                                 <Link
//                                     // href="/services"
//                                     activeClass="services"
//                                     to="services"
//                                     smooth={true}
//                                     offset={50}
//                                     duration={500}
//                                     className="cursor-pointer hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 >
//                                     Services
//                                 </Link>

//                                 <Link
//                                     // href="/contact"
//                                     activeClass="work"
//                                     to="work"
//                                     smooth={true}
//                                     offset={50}
//                                     duration={500}
//                                     className="cursor-pointer hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 >
//                                     Contact
//                                 </Link>
//                             </div>
//                         </div>
//                     )}
//                 </Transition>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;

