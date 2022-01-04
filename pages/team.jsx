import React, { useState } from "react";
import Image from "next/image";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';



const Tab = styled(TabUnstyled)`
  clip-path: polygon(11% 0, 98% 0, 89% 100%, 2% 100%);
  font-family: Roboto Condensed;
  color: #faf4f2; //inactive text color
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 8px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #ff8a65; //hover bg color
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: #ffab91;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #faf4f2; //active bg
    color: #ff3d00; //active text color
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  color: #fff;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #ff7043; //bg color
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


const Team = () => {

  const [part1, setPart1] = useState([
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

  const [part2, setpart2] = useState([
    {
      img: "/images/ishu.png",
      text: "Ishu Goyal",
      designation: "Founder",
    },
    {
      img: "/images/sandeepta.png",
      text: "Sandeepta Sahoo",
      designation: "Founder",
    },
    {
      img: "/images/siddharth.png",
      text: "Siddharth Routray",
      designation: "Senior Mentor",
    }
  ]);

  const [part3, setpart3] = useState([
    {
      img: "/images/hanisha.png",
      text: "Sakalabhaktula Hanisha",
      designation: "Web Dev Coordinator",
    },
    {
      img: "/images/mihir.png",
      text: "Mihir Bibhuty",
      designation: "Web Dev Coordinator",
    },
    {
      img: "/images/samarth.png",
      text: "Samarth Mishra",
      designation: "Code Coordinator",
    },
    {
      img: "/images/saksham.png",
      text: "Saksham Devkota",
      designation: "Code Coordinator",
    },
    {
      img: "/images/sanjay.png",
      text: "Kodidela Sanjay Reddy",
      designation: "3D Modelling Coordinator",
    },
    {
      img: "/images/saurav.png",
      text: "Sai Saurav",
      designation: "Video Editing Coordinator",
    },
    {
      img: "/images/amreet.png",
      text: "Amreet kumar khuntia",
      designation: "Design Coordinator",
    },
    {
      img: "/images/shreeansh.png",
      text: "Shreeansh Praharaj",
      designation: "Design Coordinator",
    },
    {
      img: "/images/rittwik.png",
      text: "Rittwik Devdatta Das",
      designation: "Content Coordinator",
    }
  ]);

  const [part4, setpart4] = useState([
    {
      img: "/images/omisa.png",
      text: "Omisa Panda",
      designation: "Code Team",
    },
    {
      img: "/images/ritesh.png",
      text: "Ritesh Naik",
      designation: "Code Team",
    },
    {
      img: "/images/nitesh.png",
      text: "R Nitesh Kumar",
      designation: "Code Team",
    },
    {
      img: "/images/kritartha.png",
      text: "Kritartha Nath ",
      designation: "Code Team",
    },
    {
      img: "/images/cyrus.png",
      text: "Cyrus Roy",
      designation: "Code Team",
    },
    {
      img: "/images/faeq.png",
      text: "Faeq Hussain",
      designation: "Code Team",
    },
    {
      img: "/images/harsh.png",
      text: "Harsh Prajapati",
      designation: "Code Team",
    },
    {
      img: "/images/vamshi.png",
      text: "P. Vamshi",
      designation: "Code Team",
    },
    {
      img: "/images/prashant.png",
      text: "Prashant Singh",
      designation: "Code Team",
    },
    {
      img: "/images/ahan.png",
      text: "Ahan Anupam",
      designation: "Code Team",
    },
    {
      img: "/images/ankur.png",
      text: "Ankur Kaushik",
      designation: "Code Team",
    },
    {
      img: "/images/rahul.png",
      text: "Rahul Meher",
      designation: "Code Team",
    },
    {
      img: "/images/sura.png",
      text: "Sura Prasad Pradhan",
      designation: "Code Team",
    }
  ]);

  const [part5, setpart5] = useState([
    {
      img: "/images/upasana.png",
      text: "Upasna Chaudhary",
      designation: "Web Developer",
    },
    {
      img: "/images/megha.png",
      text: "Megha Sinha",
      designation: "Web Developer",
    },
    {
      img: "/images/aabhas.png",
      text: "Aabhas Sao",
      designation: "Web Developer",
    },
    {
      img: "/images/anubhav.png",
      text: "Anubhav Maharana",
      designation: "Web Developer",
    },
    {
      img: "/images/ayush.png",
      text: "Aayush Jha",
      designation: "Web Developer",
    },
    {
      img: "/images/jagrit.png",
      text: "Jagrit Sahu",
      designation: "Web Developer",
    }
  ]);

  const [part6, setpart6] = useState([
    {
      img: "/images/anit.png",
      text: "Anit Kumar Pradhan",
      designation: "3D Modelling and Animation",
    },
    {
      img: "/images/subham.png",
      text: "Subham Das",
      designation: "3D Modelling and Design Team",
    },
    {
      img: "/images/hemesh.png",
      text: "Koneru hemesh",
      designation: "3D & 2D Designer",
    },
    {
      img: "/images/joti.png",
      text: "Jyotirmoy Majhi",
      designation: "Designer",
    },
  ]);

  const [part7, setpart7] = useState([
    {
      img: "/images/ramanjot.png",
      text: "Ramanjot Singh",
      designation: "Content Writer",
    },
    {
      img: "/images/pratika.png",
      text: "Pratika Mishra",
      designation: "Content Writer",
    },
  ]);


  const cardStyle = {
    width: "18rem",
    // border: "2px solid #403f3f",
    background: "linear-gradient(145deg, #23272b, #1e2024)",
    display: "inline-block",
    boxShadow:
      "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e, inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225, 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
  };

  return (
    <div style={{ backgroundColor: "#212428", padding: "2rem 0rem 4rem 0rem" }}>


      <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", marginBottom: "2.5rem", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Team Members
      </h2>




      <TabsUnstyled className="container" defaultValue={0}>

        <TabsList style={{ borderRadius: "0", clipPath: "polygon(3.5% 0, 100% 0, 96.5% 100%, 0% 100%)", marginBottom: "2rem" }}>
          <Tab>Executive Body</Tab>
          <Tab>Co-ordinators</Tab>
          <Tab>Teams</Tab>
        </TabsList>

        <TabPanel value={0}>

          {/* Part 1 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Leaders
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part1.map((images) => {
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

          {/* Part 2 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Mentors
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part2.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>

        </TabPanel>

        <TabPanel value={1}>

          {/* Part 3 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Co-ordinators
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part3.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>

        </TabPanel>



        <TabPanel value={2}>

          {/* Part 4 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Code Team
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part4.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>


          {/* Part 5 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Web Dev Team
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part5.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>


          {/* Part 6 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Design Team
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "2.5rem" }}>
            {part6.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>


          {/* Part 7 */}
          <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
            Content Team
          </h2>

          <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {part7.map((images) => {
              return (
                <>
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
                </>
              );
            })}
          </div>


        </TabPanel>


      </TabsUnstyled>


    </div>

  );
};

export default Team;
