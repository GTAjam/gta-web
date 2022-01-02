import React from "react";
import bv from "./video/bv.mp4";

const Element = () => {
    
    return(
        <div className = "sec1" >
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: "-1",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    objectFit: "cover",
                }}>
                <source src={bv} type="video/mp4" />
            </video>

        </div>

    );


};

export default Element;
