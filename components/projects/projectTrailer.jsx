// // import React from "react";
// // import Link from "next/link";

// // const ProjectTrailer = () => {
// //   return (
// //     <div className="main">
// //       <h1 style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>Projects</h1>
// //       <div className="contain">
// //         <div className="project">
// //           <div className="project-image"><img src="images/_post_1.jpg" alt="img" /></div>
// //           <h2 style={{ color: "#b56d19", fontFamily: "Marcellus SC" }}>Project One</h2>
// //           <p style={{ fontFamily: "Roboto Condensed" }}>This is an awesome project and it is very interesting too.</p>
// //         </div>
// //         <div className="project">
// //           <div className="project-image"><img src="images/_post_1.jpg" alt="img" /></div>
// //           <h2 style={{ color: "#b56d19", fontFamily: "Marcellus SC" }}>Project Two</h2>
// //           <p style={{ fontFamily: "Roboto Condensed" }}>This is an awesome project and it is very interesting too.</p>
// //         </div>
// //         <div className="project">
// //           <div className="project-image"><img src="images/_post_1.jpg" alt="img" /></div>
// //           <h2 style={{ color: "#b56d19", fontFamily: "Marcellus SC" }}>Project Three</h2>
// //           <p style={{ fontFamily: "Roboto Condensed" }}>This is an awesome project and it is very interesting too.</p>
// //         </div>
// //       </div>
// //       <div className="text-center">
// //         <Link href="/projects">
// //           <a className="button btn btn-lg btn-dark text-light" style={{ backgroundColor: "black", fontFamily: "Marcellus SC", border: "none", borderRadius: "0" }}>
// //             <span className="btn btn-outline-light px-5" style={{ backgroundColor: "", color: "#b56d19", borderColor: "#b56d19" }}>
// //               view all
// //             </span>
// //           </a>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectTrailer;



// import React, { useState } from "react";
// import Image from "next/image"
// import Link from "next/link";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
// import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need


// const ProjectTrailer = (props) => {

//   const [projects, setprojects] = useState([
//     {
//       slNo: 1,
//       img: "/images/_post_1.jpg",
//       desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
//     },
//     {
//       slNo: 2,
//       img: "/images/_post_1.jpg",
//       desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
//     },
//     {
//       slNo: 3,
//       img: "/images/_post_1.jpg",
//       desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
//     }
//   ]);

//   return (
//     <div className="" style={{ backgroundColor: "#212428", padding: "4.2rem 0rem" }}>

//       <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
//         Our Projects
//       </h2>

//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <div className="container">
//           <div className="row mb-4 flip-boxes">

//             {projects.map((projects) => {
//               return (
//                 <div className=" mt-3 col-lg-4 col-md-6 col-10 flip-box">
//                   <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350)", overflow: "hidden" }}>
//                     {/* <img src={projects.img} style={{ position: "absolute" }} /> */}
//                     <div className="content text-center" style={{ fontFamily: "Marcellus SC", fontWeight: "bolder" }}>
//                       Project <span style={{ color: "#fb8c00" }}>{projects.slNo}</span><br />
//                     </div>
//                   </div>
//                   <div className="back text-center align-items-center">
//                     <div className="content container" style={{ color: "#fb8c00", fontWeight: "bold" }}>
//                       {projects.desc}
//                       <div className="my-4 gitIcon">
//                         <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Button */}
//           <div className="text-center">
//             <Link href="/team">
//               <a className="button btn btn-lg btn-dark text-light" style={{ backgroundColor: "black", fontFamily: "Marcellus SC", border: "none", borderRadius: "0" }}>
//                 <span className="btn btn-outline-light px-5" style={{ backgroundColor: "", color: "#b56d19", borderColor: "#b56d19" }}>
//                   See More &nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
//                 </span>
//               </a>
//             </Link>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
const Project = ()=>{

    const [projects, setprojects] = useState([
        {
          slNo: 1,
          img: "/images/_post_1.jpg",
          git: 'link',
          arrStyle:"arr_container center",
          arrStyleActive:"arr_container active_arr center",
          leftContainerStyle:"left_container off center",
          leftContainerStyleActive:"left_container active center",
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        },
        {
          slNo: 2,
          img: "/images/_post_1.jpg",
          git: 'link',
          arrStyle:"arr_container center",
          arrStyleActive:"arr_container active_arr center",
          leftContainerStyle:"left_container off center",
          leftContainerStyleActive:"left_container active center",
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        },
        {
          slNo: 3,
          img: "/images/_post_1.jpg",
          git: 'link',
          arrStyle:"arr_container center",
          arrStyleActive:"arr_container active_arr center",
          leftContainerStyle:"left_container off center",
          leftContainerStyleActive:"left_container active center",
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        }
      ]);
      const [x, setX] = useState(0);
      const [y, setY] = useState(0);
     
     
      return(
        <div className="center" style={{ backgroundColor: "#212428", flexDirection:"column" }}>

            <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
              Our Projects
            </h2>
            <div className="projectTrailer-main center">
                {projects.map((projects)=>{
                    return(
                        <div className="box center">
                                <img src={projects.img} alt="image" />
                                <div>
                                <h2>Project {projects.slNo}</h2> 
                                </div>
                                <div className={(x==projects.slNo? projects.arrStyleActive:projects.arrStyle) ||(y==projects.slNo? projects.arrStyle:projects.arrStyleActive)} onClick={()=> {
                                  setX(projects.slNo);
                                  // arr(projects.slNo);
                                }}>
                                <FontAwesomeIcon className='i' icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <div className={(x==projects.slNo? projects.leftContainerStyleActive:projects.leftContainerStyle) ||(y==projects.slNo? projects.leftContainerStyle:projects.leftCoontainerStyleActive)}>
                                    <h2>Project</h2>
                                    <p>{projects.desc}</p>
                                    <div className="icons">
                                    <a href={projects.git}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                    <a href="/">Live</a>
                                    </div>
                                    <div className="cancel center" onClick={()=> {
                                      setY(projects.slNo);
                                      setX(0)
                                      }}>
                                    <FontAwesomeIcon className="i" color='#b56d19' icon={faTimes} />
                                    </div>
                                </div>    
                        </div>
                    );
                })}    
            </div>
        </div>
      );
}


export default ProjectTrailer;
