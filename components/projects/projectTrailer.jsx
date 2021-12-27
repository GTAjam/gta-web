import React from "react";
import Link from "next/link";

const ProjectTrailer = () => {
  return (
    <div className="main">
      <h1>Projects</h1>
      <div className="container">
        <div className="p1">
          <h2>Project One</h2>
          <img src="" alt="img" />
          <p>This is an awesome project and it is very interesting too.</p>
        </div>
        <div className="p2">
          <h2>Project Two</h2>
          <img src="" alt="img" />
          <p>This is an awesome project and it is very interesting too.</p>
        </div>
      </div>
      <div className="btn">
        <button className="butn"><a href="/projects" className="link">view all</a></button>
      </div>
    </div>
  );
};

export default ProjectTrailer;
