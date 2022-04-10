import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const Project = () => {

  const [projects, setprojects] = useState([
    {
      slNo: 1,
      img: "/Project Images/metaverse.jpg",
      git: 'link',
      arrStyle: "arr_container center",
      arrStyleActive: "arr_container active_arr center",
      leftContainerStyle: "left_container off center",
      leftContainerStyleActive: "left_container active center",
      name: "Metaverse",
      desc: "With the metaverse, we are transitioning from viewing a 2D world looking at the Internet to living inside the Internet in a 3D world of NITR.",
    },
    {
      slNo: 2,
      img: "/Project Images/xplorNitr.jpg",
      git: 'link',
      arrStyle: "arr_container center",
      arrStyleActive: "arr_container active_arr center",
      leftContainerStyle: "left_container off center",
      leftContainerStyleActive: "left_container active center",
      name: "Xplor NITR",
      desc: "Tired of sitting at home for the past one year? We mean, who doesn't ! Want to explore the beautiful lush green campus of NIT Rourkela all by yourself in the comfort of your hands? Of course, we do !",
    },
    {
      slNo: 3,
      img: "/Project Images/hellDungeon.jpg",
      git: 'link',
      arrStyle: "arr_container center",
      arrStyleActive: "arr_container active_arr center",
      leftContainerStyle: "left_container off center",
      leftContainerStyleActive: "left_container active center",
      name: "Hell Dungeon",
      desc: "Game To Aim, the game development club of NIT Rourkela is all set to start the Game Carnival with a bang! Our team of talented in-house developers brings to you a retro themed horror RPG aptly titled 'Hell Dungeon' !",
    },
    {
      slNo: 4,
      img: "/Project Images/loop.jpg",
      git: 'link',
      arrStyle: "arr_container center",
      arrStyleActive: "arr_container active_arr center",
      leftContainerStyle: "left_container off center",
      leftContainerStyleActive: "left_container active center",
      name: "Loop",
      desc: "Do you ever feel like your life is a continuous loop that you're trapped in. Don't try to get yourself out of it but let's give a try in virtuality. Hello Gamers!!! Game To Aim club of NIT Rourkela presents you our new PC game 'THE LOOP'.",
    },
    {
      slNo: 5,
      img: "/Project Images/chase.jpg",
      git: 'link',
      arrStyle: "arr_container center",
      arrStyleActive: "arr_container active_arr center",
      leftContainerStyle: "left_container off center",
      leftContainerStyleActive: "left_container active center",
      name: "Chase",
      desc: "Hello gamers! Prepare yourselves for the second game to be released as part of Game To Aim's flagship event Game Carnival! Find the link to download the adrenaline infused high speed chase game, aptly titled 'Chase'",
    }
  ]);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div style={{ backgroundColor: "#212428", flexDirection: "column", padding: "75px 0rem 3rem 0rem" }}>

      <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Our Projects
      </h2>

      <div className="main center">

        {projects.map((projects) => {
          return (
            <div className="boxProject center">
              <img src={projects.img} alt="image" />

              <div className={(x == projects.slNo ? projects.arrStyleActive : projects.arrStyle) || (y == projects.slNo ? projects.arrStyle : projects.arrStyleActive)} onClick={() => { setX(projects.slNo); }}>
                <FontAwesomeIcon className='i' icon={faArrowRight}></FontAwesomeIcon>
              </div>

              <div className={(x == projects.slNo ? projects.leftContainerStyleActive : projects.leftContainerStyle) || (y == projects.slNo ? projects.leftContainerStyle : projects.leftCoontainerStyleActive)}>
                <h2 style={{ fontFamily: "Marcellus SC" }}>{projects.name}</h2>
                <p style={{ textAlign: "justify", fontFamily: "Roboto Condensed", lineHeight: "1.45rem" }}>{projects.desc}</p>
                <div className="icons">
                  <a href={projects.git}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                  <a href="/">Live</a>
                </div>

                <div className="cancel center" onClick={() => {
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

export default Project;