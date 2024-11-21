import React, { useState } from "react";
import styles from "../css/navBar.module.css"; // CSS module for styling
import { FaUserCircle } from "react-icons/fa"; // For account logo

const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleAccountClick = () => {
    setShowLogout((prev) => !prev);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <h2>HealthCare</h2>
      </div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Hospitals</li>
        <li>Approved Hospitals</li>
      </ul>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
      <div className={styles.account} onClick={handleAccountClick}>
        <FaUserCircle size={30} />
        {showLogout && <div className={styles.logout}>Log Out</div>}
      </div>
    </nav>
  );
};

export default NavBar;
