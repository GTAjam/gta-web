import React from "react";
import Link from "next/link";

const ProjectTrailer = () => {
  return (
    <div className="main">
      <h1>Projects</h1>
      <div className="contain">
        <div className="p1">
          <h2>Project One</h2>
          <p>This is an awesome project and it is very interesting too.</p>
        </div>
        <div className="project">
          <div className="project-image"><img src="" alt="img" /></div>
          <h2>Project Two</h2>
          <p>This is an awesome project and it is very interesting too.</p>
        </div>
        <div className="project">
          <div className="project-image"><img src="" alt="img" /></div>
          <h2>Project Three</h2>
          <p>This is an awesome project and it is very interesting too.</p>
        </div>
      </div>
      <div className="btn">
        <a href="/projects" className="link">view all</a>
      </div>
    </div>
  );
};

export default ProjectTrailer;
