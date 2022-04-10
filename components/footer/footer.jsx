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
            <section>
              <div className="row mb-2" style={{ alignItems: "center" }}>

                {/* <hr className="clearfix d-md-none" style={{ width: "90%", margin: "auto" }} /> */}

                {/* <hr className="clearfix d-md-none" style={{ width: "90%", margin: "auto" }} /> */}

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>Contact Us</h5>
                  <p className="text"><FontAwesomeIcon icon={faHome} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; NIT Rourkela, Odisha, India</p>
                  <p className="text"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; gtaclub2020@gmail.com</p>
                  {/* <p className="text"><FontAwesomeIcon icon={faPhone} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; + 01 234 567 89</p>
                  <p className="text"><FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#c4cfde" }}></FontAwesomeIcon> &nbsp; + 01 234 567 89</p> */}
                </div>

                <hr className="clearfix d-md-none" style={{ width: "90%", margin: "auto" }} />

                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
                  <h5 className="footerHeading mb-4" style={{ fontFamily: "Marcellus SC", fontWeight: "600", color: "#c4cfde" }}>Follow Us</h5>
                  <div>
                    <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#3b5998", clipPath: "circle(40%)" }} href="https://www.facebook.com/gametoaim" role="button" target="_blank">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#000", clipPath: "circle(40%)", overflow: "hidden" }} href="https://gamejolt.com/@GTA2020/games" role="button" target="_blank">
                      {/* <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> */}
                      <img src="/GTA logo/gameJolt.png" style={{ height: "18px", width: "18px" }} />
                    </a>
                  </div>
                  {/* <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#dd4b39", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  </a> */}
                  <div>
                    <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#dd4b39", clipPath: "circle(40%)" }} href="https://www.instagram.com/game.to.aim/" role="button" target="_blank">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#0082ca", clipPath: "circle(40%)" }} href="https://www.linkedin.com/company/game-to-aim/" role="button" target="_blank">
                      <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                  </div>
                  {/* <a className="icon btn btn-dark btn-floating m-1" style={{ backgroundColor: "#333333", clipPath: "circle(40%)" }} href="#!" role="button">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a> */}
                </div>

                <hr className="clearfix d-md-none" style={{ width: "90%", margin: "auto" }} />

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
