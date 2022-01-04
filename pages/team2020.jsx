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
    background-color: #ffab91; //hover bg color
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: #ffab91;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #faf4f2; //active bg color
    color: #ff7043; //active text color
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
  background-color: #ff8a65; //bg color
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


const Team = () => {

    const [part1, setpart1] = useState([
        {
            img: "/images/ishu.png",
            text: "Ishu Goyal",
            designation: "President",
        },
        {
            img: "/images/sandeepta.png",
            text: "Sandeepta Sahoo",
            designation: "Vice-President",
        }
    ]);

    const [part2, setpart2] = useState([
        {
            img: "/images/aabhas.png",
            text: "Aabhas Sao",
            designation: "Developer",
        },
        {
            img: "/images/abhilash.png",
            text: "Abhilash Gajbhiye",
            designation: "Game Developer",
        },
        {
            img: "/images/ahan.png",
            text: "Ahan Anupam",
            designation: "Game Developer",
        },
        {
            img: "/images/anubhav.png",
            text: "Anubhav Maharana",
            designation: "Developer",
        },
        {
            img: "/images/archit.png",
            text: "Archit Nabaria",
            designation: "Game Developer",
        },
        {
            img: "/images/deepak.png",
            text: "Deepak Gurjar",
            designation: "Game Developer",
        },
        {
            img: "/images/faeq.png",
            text: "Faeq Hussain",
            designation: "Game Developer",
        },
        {
            img: "/images/kritartha.png",
            text: "Kritartha Nath",
            designation: "Game Developer",
        },
        {
            img: "/images/omm.png",
            text: "Omm Samantaray",
            designation: "Game Developer",
        },
        {
            img: "/images/prashant.png",
            text: "Prashant Singh",
            designation: "Game Developer",
        },
        {
            img: "/images/prithvi.png",
            text: "Prithvi Raj Dey",
            designation: "Game Developer",
        },
        {
            img: "/images/nitesh.png",
            text: "R Nitesh Kumar",
            designation: "Game Developer",
        },
        {
            img: "/images/saswat.png",
            text: "Saswat Sahoo",
            designation: "Game Developer",
        },
        {
            img: "/images/sudhanshu.png",
            text: "Kumar Sudhanshu Singh",
            designation: "Game Developer",
        },
        {
            img: "/images/siddharthPattnaik.png",
            text: "Siddharth Pattnaik",
            designation: "Game Developer",
        },
        {
            img: "/images/suyash.png",
            text: "Suyash verma",
            designation: "Game Developer",
        },
        {
            img: "/images/upasana.png",
            text: "Upasna Chaudhary",
            designation: "Developer",
        }
    ]);

    const [part3, setpart3] = useState([
        {
            img: "/images/ritesh.png",
            text: "Ritesh Naik",
            designation: "AR Developer",
        },
        {
            img: "/images/siddharth.png",
            text: "Siddharth Routray",
            designation: "AR Developer",
        }
    ]);

    const [part4, setpart4] = useState([
        {
            img: "/images/ankita.png",
            text: "Ankita Choudhary",
            designation: "Graphic Designer",
        },
        {
            img: "/images/bal.png",
            text: "Bal Krishna Agrawal",
            designation: "Graphic Designer",
        },
        {
            img: "/images/hemesh.png",
            text: "Koneru Hemesh",
            designation: "Graphic Designer",
        },
        {
            img: "/images/nihal.png",
            text: "Nihal Nassar",
            designation: "Graphic Designer",
        },
        {
            img: "/images/rajiv.png",
            text: "Rajiv Singh",
            designation: "Graphic Designer",
        },
        {
            img: "/images/rishi.png",
            text: "Rishi",
            designation: "Graphic Designer",
        },
        {
            img: "/images/samit.png",
            text: "Samit Ranjan Patro",
            designation: "Graphic Designer",
        }
    ]);

    const [part5, setpart5] = useState([
        {
            img: "/images/kartik.png",
            text: "Kartik",
            designation: "3D Animator",
        },
        {
            img: "/images/sambit.png",
            text: "Sambit Kumar Pradhan",
            designation: "3D Animator and Designer",
        }
    ]);

    const [part6, setpart6] = useState([
        {
            img: "/images/biplov.png",
            text: "Biplov Pokhrel",
            designation: "Video Editor",
        }
    ]);

    const [part7, setpart7] = useState([
        {
            img: "/images/rishikesh.png",
            text: "Rishikesh Pandey",
            designation: "Sound Engineer",
        }
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
                    <Tab>Developers Team</Tab>
                    <Tab>Designers Team</Tab>
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

                </TabPanel>


                <TabPanel value={1}>

                    {/* Part 2 */}
                    <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
                        Game Development Team
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

                    {/* Part 3 */}
                    <h2 className="text-center" style={{ fontSize: "2.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
                        AR Development Team
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
                        Graphic Desegning Team
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
                        Animation Team
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
                        Video Editing Team
                    </h2>

                    <div id="imgDiv" className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
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
                        Sound Editing Team
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
