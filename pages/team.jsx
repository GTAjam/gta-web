import React, { useState } from "react";
import Image from "next/image";
// import Saswat from "./images/saswat.png";

const Team = () => {
  const [data, setData] = useState([
    {
      img: "/images/saswat.png",
      text: "Saswat Sahoo",
      designation: "President",
    },
    {
      img: "/images/saswat.png",
      text: "Abc",
      designation: "Vice-President",
    },
    {
      img: "/images/saswat.png",
      text: "Xyz",
      designation: "Vice-Vice-President",
    },
    {
      img: "/images/saswat.png",
      text: "123",
      designation: "Vice-Vice-Vice-President",
    },
  ]);

  const cardStyle = {
    width: "18rem",
    // border: "2px solid #403f3f",
    background: "linear-gradient(145deg, #23272b, #1e2024)",
    // border: "2px solid #000000",
    display: "inline-block",
    boxShadow:
      "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e, inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225, 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
    "&:hover": {
      cursor: "pointer",
      border: "10px solid red",
    },
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#212428" }}>
      {/* <img src={require('./images/saswat.png').default} alt="..." /> */}
      {/* <Saswat src="/saswat.png" alt="me" /> */}

      <h2
        className="text-center"
        style={{
          fontSize: "3rem",
          fontFamily: "Marcellus SC",
          marginBottom: "1rem",
          fontWeight: "600",
          lineHeight: 1.2,
          color: "#c4cfde",
        }}
      >
        Team Members
      </h2>
      <div
        id="imgDiv"
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data.map((images) => {
          return (
            <>
              <div
                id="idNo"
                className="card my-3 mx-4"
                id="imgCard"
                style={cardStyle}
              >
                <Image
                  src={images.img}
                  className="card-img-top"
                  alt="Image"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="card-body">
                  <h3
                    className="text-center text-light"
                    style={{ fontFamily: "Marcellus SC" }}
                  >
                    {images.text}
                  </h3>
                  <p
                    className="card-text text-center"
                    style={{
                      fontSize: "1.1rem",
                      fontFamily: "Roboto Condensed",
                      color: "#b56d19",
                      fontWeight: "600",
                    }}
                  >
                    ({images.designation})
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
