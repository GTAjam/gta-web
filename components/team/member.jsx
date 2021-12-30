import React, { useState } from "react";
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const Member = (props) => {

  const [members, setmembers] = useState([
    {
      img: "/images/saswat.png",
      text: "Saswat Sahoo",
      designation: "President",
    },
    {
      img: "/images/omm.png",
      text: "Omm Samantaray",
      designation: "Vice-President",
    },
    {
      img: "/images/samit.png",
      text: "Samit Ranjan Patro",
      designation: "Design Head",
    },
    {
      img: "/images/sambit.png",
      text: "Sambit Kumar Pradhan",
      designation: "3D & Animation Head",
    },
    {
      img: "/images/sudhanshu.png",
      text: "Kumar Sudhanshu Singh",
      designation: "Coding Head",
    },
    {
      img: "/images/deepak.png",
      text: "Deepak Gurjar",
      designation: "PR Head",
    }
  ]);

  const cardStyle = {
    width: "18rem",
    // border: "2px solid #403f3f",
    background: "linear-gradient(145deg, #23272b, #1e2024)",
    display: "inline-block",
    boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e, inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225, 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
  }

  return (


    <div style={{ backgroundColor: "#212428", padding: "4rem 0rem" }}>

      <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Team Members
      </h2>

      {/* <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Leaders
      </h2> */}

      <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "1rem" }}>
        {members.map((images) => {
          return (
            <div id="idNo" className="box card my-3 mx-4" id="imgCard" style={cardStyle}>
              <Image src={images.img} className="card-img-top" alt="Image" width="100%" height="80%" layout="responsive" objectFit="cover" />
              <div className="card-body">
                <h3 className="text-center text-light" style={{ fontFamily: "Marcellus SC" }}>
                  {images.text}
                </h3>
                <p className="card-text text-center" style={{ fontSize: "1.1rem", fontFamily: "Roboto Condensed", color: "#b56d19", fontWeight: "600" }}>
                  ({images.designation})
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center">
        <a href="/team" className="button btn btn-lg btn-dark text-light" style={{ backgroundColor: "black", fontFamily: "Marcellus SC", border: "none", borderRadius: "0" }}>
          <span className="btn btn-outline-light px-5" style={{ backgroundColor: "", color: "#b56d19", borderColor: "#b56d19" }}>
            See More &nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </a>
      </div>

    </div >
  );
};

export default Member;
