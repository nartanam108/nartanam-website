import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link to="/" className={styles.headerLink} onClick={closeMenu}>
          <h1 className={styles.title}>NARTANAM DANCE ACADEMY</h1>
        </Link>
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
        <li><NavLink to="/" exact activeClassName={styles.active} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/details" activeClassName={styles.active} onClick={closeMenu}>Details</NavLink></li>
        <li><NavLink to="/siddhendra-aradhana" activeClassName={styles.active} onClick={closeMenu}>Siddhendra Aradhana</NavLink></li>
        <li><NavLink to="/contact" activeClassName={styles.active} onClick={closeMenu}>Contact</NavLink></li>
        <li><NavLink to="/arangetrams" activeClassName={styles.active} onClick={closeMenu}>Arangetrams</NavLink></li>
        <li><NavLink to="/rangaanubhavam-2023" activeClassName={styles.active} onClick={closeMenu}>Rangaanubhavam 2023</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navbar;
