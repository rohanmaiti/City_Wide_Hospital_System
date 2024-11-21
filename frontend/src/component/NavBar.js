import React from "react";
import styles from "../css/Navbar.module.css"; // Import CSS Module

// import React from "react";
// import styles from "./Navbar.module.css"; // Import CSS Module

export default function Navbar({ links, isLoggedIn, scrollToSection, refs }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="/path/to/logo.png" alt="Company Logo" className={styles.logo} />
            </div>
            <div className={styles.navbarLinks}>
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={`#${link}`} 
                        className={styles.navbarLink} 
                        onClick={() => scrollToSection(refs[`${link.toLowerCase()}Ref`])} // Scroll to section
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className={styles.loginContainer}>
                {isLoggedIn ? (
                    <button className={styles.loginButton}>
                        <img src="/path/to/logout-icon.png" alt="Logout" className={styles.loginIcon} />
                        Logout
                    </button>
                ) : (
                    <button className={styles.loginButton}>
                        <img src="/path/to/login-icon.png" alt="Login" className={styles.loginIcon} />
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}