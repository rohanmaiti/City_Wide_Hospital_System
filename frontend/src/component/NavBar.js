import {React , useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "../css/Navbar.module.css";
import LoginButton from "./LoginButton";

export default function Navbar({ links, isLoggedIn, scrollToSection, refs, isScrolled }) {
    const navigate = useNavigate();
    const [showLoginOptions , setShowLoginOptions] = useState(false);
    const toogleDropDown = ()=>{
        setShowLoginOptions(!showLoginOptions);
    }
    const handleClick = (typeOfUser)=>{
    navigate("/login",{state:{typeOfUser:typeOfUser}})
    }
    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoContainer}>
            {/* /mnt/7EFE8628FE85D933/5th_semester/SIH_CityWide_Hospital/backend/photoes/logo2.png */}
                <img  src="http://localhost:4000/photoes/logo4.png" alt="Company Logo" className={styles.logo} />
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
                    <button className={styles.logoutButton}>
                        <img src="https://img.icons8.com/?size=100&id=vGj0AluRnTSa&format=png&color=000000" alt="Logout" className={styles.loginIcon} />
                        Logout
                    </button>
                ) : (
                    <div className={styles.parentOfLogin} >
                         <LoginButton/>
                    </div>
                    
                )}
            </div>
        </nav>
    );
}