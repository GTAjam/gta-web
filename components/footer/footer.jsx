import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHome } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const Footer = () => {
  return (
    <>
      {/* <p>footer component</p> */}

      <div style={{ fontFamily: "Roboto Condensed" }}>
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#212428" }}>

          <div className="container pt-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>GTA (Game To Aim)</h5>
                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores possimus aliquid libero, commodi exercitationem facilis veritatis reiciendis veniam est.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>Quick Links</h5>
                  <p className="text">
                    <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Home</a>
                  </p>
                  <p className="text">
                    <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> About</a>
                  </p>
                  <p className="text">
                    <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Team</a>
                  </p>
                  <p className="text">
                    <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Projects</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>Contact Us</h5>
                  <p className="text"><FontAwesomeIcon icon={faHome} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; NIT Rourkela, Odisha, India</p>
                  <p className="text"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; gtaclub2020@gmail.com</p>
                  <p className="text"><FontAwesomeIcon icon={faPhone} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; + 01 234 567 89</p>
                  <p className="text"><FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; + 01 234 567 89</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>Follow Us</h5>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#3b5998", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#55acee", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#dd4b39", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  </a>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#ac2bac", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#0082ca", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                  </a>

                  <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#333333", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            2021 © Copyright : <a className="text-white" href="https://gta-web.vercel.app/"> GTA-Web.vercel.app</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
