import React, { useState, useEffect, useRef } from "react";
import Navbar from "./NavBar"; 
import styles from "../css/landingPage.module.css"; 
import HospitalRegistrationForm from "./hospitalRegistrationForm";
import Home from "./Home";

export default function LandingPage() {
    const links = ["Home", "About", "Services", "Contact" , "ApplyForHospital"];
    const isLoggedIn = false; // Change this to true to test the logout button
    // Create refs for each section  
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const applyforhospitalRef = useRef(null);
 
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (ref) => {
        if (ref) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar 
                links={links} 
                isLoggedIn={isLoggedIn} 
                scrollToSection={scrollToSection} 
                refs={{ homeRef, aboutRef, servicesRef, contactRef ,applyforhospitalRef}} 
                isScrolled={isScrolled} 
            />
            <div ref={homeRef} className={styles.section} style={{ backgroundColor: '#1a1f26' }}>
                <Home/>
                {/* <h1>Home</h1>
                <p>Welcome to our website! Here's some dummy text for the home section.</p>
                <img src="https://via.placeholder.com/400" alt="Home" /> */}
            </div>
            <div ref={aboutRef} className={styles.section} style={{ backgroundColor: '#1a1f26' }}>
                <h1>About</h1>
                <p>This is the about section. Here's some more dummy text to fill this area.</p>
                <img src="https://via.placeholder.com/400" alt="About" />
            </div>
            <div ref={servicesRef} className={styles.section} style={{ backgroundColor: '#d0d0d0' }}>
                <h1>Services</h1>
                <p>In this section, we describe our services. More dummy text goes here.</p>
                <img src="https://via.placeholder.com/400" alt="Services" />
            </div>
            <div ref={applyforhospitalRef} className={styles.section} style={{ backgroundColor: '#c0c0c0' }}>
                {/* <h1>Apply For Hospital</h1>
                <p>Feel free to reach out to us! Here's how you can contact us.</p>
                <img src="https://via.placeholder.com/400" alt="Contact" /> */}
                <HospitalRegistrationForm/>
            </div>
            <div ref={contactRef} className={styles.section} style={{ backgroundColor: '#c0c0c0' }}>
                <h1>Contact</h1>
                <p>Feel free to reach out to us! Here's how you can contact us.</p>
                <img src="https://via.placeholder.com/400" alt="Contact" />
            </div>
        </div>
    );
}