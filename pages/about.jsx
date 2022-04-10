import React from "react";
import styles from "../styles/about.module.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const About = () => {
    const faq1 = [
        {
            slNo: 1,
            question: "GAME DEVELOPMENT TEAM",
            desc: "The Game Development team consists of enthusiastic coders and developers who are passionate about creating games, testing it, and successfully releasing them on various platforms."
        },
        {
            slNo: 2,
            question: "WEB DEVELOPMENT TEAM",
            desc: "The Web Development team particularly consists of Developers who are enthusiastic about website designing and other stuff related to Dev-Ops."
        },
        {
            slNo: 3,
            question: "3D MODELING TEAM",
            desc: "The 3D Modeling team basically constitutes of creators who have a zeal of converting real life objects into virtually created 3-Dimensional Models using Blender, which is no different from real life."
        },
    ];

    const faq2 = [
        {
            slNo: 1,
            question: "GRAPHICS DESIGN TEAM",
            desc: "The Graphics Designing team consists of budding artists who have skills in creativity and design and have a passion towards poster making and designing."
        },
        {
            slNo: 2,
            question: "VIDEO EDITING TEAM",
            desc: "The Video Editing team consists of Editors who are ardent about editing footages and clips giving the normal video a boost, providing an eye pleasing experience."
        },
        {
            slNo: 3,
            question: "CONTENT TEAM",
            desc: "The Content Writing team consists of budding writers who have a fervor for article writing, caption writing, and all the stuff related to writing skills."
        },
    ];

    return (
        <div className={styles.body}>
            <h1 className={styles.heading}>About Us</h1>

            <div className="" style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontFamily: "Roboto Condensed", fontSize: "1.5rem", fontWeight: "600", margin: "1.25rem 0" }}>
                    BEHIND EVERY GAME SCREEN, THERE IS SOMEONE CONTROLLING YOU. AND HE IS NOT YOUR GUARDIAN.<p className="text-orange-400">THAT SOMEONE IS US; GAME DEVELOPERS.</p>
                </div>
                <hr style={{ borderTop: "2px solid #eee" }} />
                <div style={{ color: "#fff", fontFamily: "Roboto Condensed", fontSize: "1.2rem", margin: "1.25rem 0" }}>
                    Game To Aim (GTA), the game development club of NIT, Rourkela, was approved by the Student Activity Center (SAC) in the year 2020 and co-founded by Ishu Goyal and Sandipta Sahoo. Initially, starting with only 40 members in the club, our club has more than 100 members now ! Not only that, the craze of our club became viral, when the much-awaited campus simulation game "XPLOR NITR" shook the institute with about 600 downloads !
                </div>
                <hr style={{ borderTop: "2px solid #eee" }} />
                <div style={{ color: "#fff", fontFamily: "Roboto Condensed", fontSize: "1.2rem", margin: "1.25rem 0" }}>
                    We all love playing games, don't we? But, if you're passionate about making games, this is where you should visit. We inspire students aspiring towards Game Development. Not only do we have a strong game development team, we have a flourishing Web development, 3D Modeling, Graphics Designing, Video Editing and Content Team.
                </div>
            </div>

            <div className={styles.container}>

                <div className={styles.wrapper}>
                    {faq1.map((faq) => {
                        return (
                            <Accordion style={{ width: "90%", margin: "0.5rem 0rem" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                    <Typography className={styles.question}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={styles.answer}>{faq.desc}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </div>

                <div className={styles.wrapper}>
                    {faq2.map((faq) => {
                        return (
                            <Accordion style={{ width: "90%", margin: "0.5rem 0rem" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                    <Typography className={styles.question}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={styles.answer}>{faq.desc}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default About;