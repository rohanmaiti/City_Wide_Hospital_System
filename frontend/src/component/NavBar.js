import {React , useState} from "react";
import styles from "../css/Navbar.module.css";

export default function Navbar({ links, isLoggedIn, scrollToSection, refs, isScrolled }) {
    const [showLoginOptions , setShowLoginOptions] = useState(false);
    const toogleDropDown = ()=>{
        setShowLoginOptions(!showLoginOptions);
    }
    const handleClick = ()=>{
        
    }
    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
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
                    <button className={styles.logoutButton}>
                        <img src="https://img.icons8.com/?size=100&id=vGj0AluRnTSa&format=png&color=000000" alt="Logout" className={styles.loginIcon} />
                        Logout
                    </button>
                ) : (
                    <div className={styles.parentOfLogin} >
                        <button  onClick={toogleDropDown} className={styles.loginButton}>
                        <img src="https://img.icons8.com/?size=100&id=26211&format=png&color=000000" alt="Login" className={styles.loginIcon} />
                        Login
                       
                    </button>
                    {
                          showLoginOptions ? 
                          <div onMouseOver={()=>setShowLoginOptions(true)} onMouseOut={()=>setShowLoginOptions(false)} className={styles.dropDown}>
                            <ul>
                                <li onClick={()=> handleClick("user")} >User</li>
                                <li onClick={()=> handleClick("doctor")} >Doctor</li>
                                <li onClick={()=> handleClick("inventory_manager")} >Inventary Manager</li>
                                <li onClick={()=> handleClick("hospital_admin")} >Hospital Admin</li>
                                <li onClick={()=> handleClick("super_admin")} >Super Admin</li>
                            </ul>
                          </div> :
                          <></>
                        }
                    </div>
                    
                )}
            </div>
        </nav>
    );
}