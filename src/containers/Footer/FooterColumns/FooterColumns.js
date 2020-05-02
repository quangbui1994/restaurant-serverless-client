import React from 'react';
import styles from './FooterColumns.module.css';

const FooterColumns = ({ heading, links}) => (
    <div className={styles.FooterColumns}>
        <div className={styles.heading}>{heading}</div>
        <ul>
            {
                links.map(link => (
                    <li><a href="">{link}</a></li>
                ))
            }
        </ul>     
    </div>   
);

export default FooterColumns;