import React from 'react';
import styles from './Footer.module.css';
import FooterColumns from './FooterColumns/FooterColumns';
import Logo from '../../assets/img/logo-white.png'
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
    const footerLink = [
        {
            heading: 'Our Services',
            links: ['Order', 'Menu', 'Fast Delivery']
        },
        {
            heading: 'Menu',
            links: ['Vegetarian', 'Dessert', 'Fast Food']
        },
        {
            heading: 'Social Media',
            links: ['Facebook', 'Instagram', 'Twitter']
        }
    ]

    return (
        <div className={styles.Footer}>
            <div className={styles.footer__info}>
                {footerLink.map((link, i)=> <FooterColumns key={i} heading={link.heading} links={link.links}/>)}
            </div>
            <div onClick={() => props.history.push('/')} className={styles.footer__logo}><img src={Logo} alt="logo-footer"/></div>
        </div>
    )
};

export default withRouter(Footer);