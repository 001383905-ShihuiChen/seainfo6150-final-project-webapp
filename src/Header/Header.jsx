import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div >
            <h1 className={styles.container}>Wonderful Recipe</h1>
            <nav>
                <ul className={styles.list}>
            {/* these links should show you how to connect up a link to a specific route */}
                    <li className={styles.navContainer}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navContainer}>
                        <Link to="/category">Category</Link>
                    </li>
                    <li className={styles.navContainer}>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li className={styles.navContainer}>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li className={styles.navContainer}>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
            <br></br>
        </div>
    )}
export default Header;