import React from "react";
import Link from "next/link";

const ProjectTrailer = () => {
  return (
    <div className="main">
      <h1 style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>Projects</h1>
      <div className="contain">
       <div className="project">
          <div className="project-image"><img src="" alt="img" /></div>
          <h2 style={{color: "#b56d19" , fontFamily: "Marcellus SC"}}>Project One</h2>
          <p style={{fontFamily: "Roboto Condensed"}}>This is an awesome project and it is very interesting too.</p>
        </div>
        <div className="project">
          <div className="project-image"><img src="" alt="img" /></div>
          <h2 style={{color: "#b56d19" , fontFamily: "Marcellus SC"}}>Project Two</h2>
          <p style={{fontFamily: "Roboto Condensed"}}>This is an awesome project and it is very interesting too.</p>
        </div>
        <div className="project">
          <div className="project-image"><img src="" alt="img" /></div>
          <h2 style={{color: "#b56d19" , fontFamily: "Marcellus SC"}}>Project Three</h2>
          <p style={{fontFamily: "Roboto Condensed"}}>This is an awesome project and it is very interesting too.</p>
        </div>
      </div>
      <div className="text-center">
        <Link href="/projects">
          <a className="button btn btn-lg btn-dark text-light" style={{ backgroundColor: "black", fontFamily: "Marcellus SC", border: "none", borderRadius: "0" }}>
            <span className="btn btn-outline-light px-5" style={{ backgroundColor: "", color: "#b56d19", borderColor: "#b56d19" }}>
              view all 
            </span>
          </a>
        </Link>
    </div>
    </div>
  );
};

export default ProjectTrailer;
