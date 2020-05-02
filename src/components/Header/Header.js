import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <div className={styles.Header}>
        <div>
            <h1>Get your best foods</h1>
        </div>
        <div className={styles.callText}>
            <h2>Live a <span>healthy</span> life</h2>
            <h2>with <span>us</span> </h2>
        </div>     
    </div>
);

export default Header;