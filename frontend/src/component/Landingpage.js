import React from "react"
import {useState , useEffect,useRef} from "react"
import {useNavigate, useLocation} from "react-router-dom";
import Navbar from "./NavBar";
import styles from "../css/landingPage.module.css"

export default function Landingpage(){
    const links = ["Home", "About", "Services", "Contact"];
    const isLoggedIn = false; // Change this to true to test the logout button

    // Create refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar links={links} isLoggedIn={true} scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, servicesRef, contactRef }} />
            <div ref={homeRef} className={styles.section} style={{ backgroundColor: '#f0f0f0' }}>
                <h1>Home</h1>
                <p>Welcome to our website! Here's some dummy text for the home section.</p>
                <img src="https://via.placeholder.com/400" alt="Home" />
            </div>
            <div ref={aboutRef} className={styles.section} style={{ backgroundColor: '#e0e0e0' }}>
                <h1>About</h1>
                <p>This is the about section. Here's some more dummy text to fill this area.</p>
                <img src="https://via.placeholder.com/400" alt="About" />
            </div>
            <div ref={servicesRef} className={styles.section} style={{ backgroundColor: '#d0d0d0' }}>
                <h1>Services</h1>
                <p>In this section, we describe our services. More dummy text goes here.</p>
                <img src="https://via.placeholder.com/400" alt="Services" />
            </div>
            <div ref={contactRef} className={styles.section} style={{ backgroundColor: '#c0c0c0' }}>
                <h1>Contact</h1>
                <p>Feel free to reach out to us! Here's how you can contact us.</p>
                <img src="https://via.placeholder.com/400" alt="Contact" />
            </div>
        </div>
    );
}