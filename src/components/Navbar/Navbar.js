import React, { useState, useEffect } from 'react';
import * as styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import LogoWhite from '../../assets/img/logo-white.png';
import Logo from '../../assets/img/logo.png';

const Navbar = ({ userAuthenticated, logoutHandler }) => {
    const [changedNavBar, setChangeNavBar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    });

    const listenToScroll = () => {
        const winScroll = document.documentElement.scrollTop;
    
        if (winScroll > window.innerHeight) {
        return setChangeNavBar(true);
        };

        return setChangeNavBar(false);
    }

    return (
        <div className={changedNavBar ? styles.changedNavBar : styles.Navbar}>
            <NavLink className={styles.logo} to="/"><img src={changedNavBar ? Logo : LogoWhite} alt="logo-white"/></NavLink> 
            {!userAuthenticated 
                ?   (
                        <>
                            <NavLink exact activeClassName={styles.active} to="/login" className={styles.link}>Login</NavLink>
                            <NavLink exact activeClassName={styles.active} to="/signup" className={styles.link}>Signup</NavLink>
                        </>
                    )
                :   <NavLink onClick={logoutHandler} exact to="/logout" className={styles.link}>Log out</NavLink>
            }
        </div>
    )
};

export default Navbar;