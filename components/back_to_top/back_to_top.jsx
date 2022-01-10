import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const navTest = () => {

    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };


    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                </button>
            )}
        </>
    );

}

export default navTest