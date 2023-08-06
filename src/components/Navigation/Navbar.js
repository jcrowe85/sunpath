import React, { Component, useState } from 'react';
import classes from './Navbar.module.scss';

import MenuItems from './MenuItems';
import MobileLogo from '../../assets/imgs/full-size-logo-blk.png';
import DesktopLogo from '../../assets/imgs/full-size-logo-wht.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const toggleMobileMenuHandler = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <div className={`${classes.navbar}`}>
            <div className={classes.brand}><img className={classes.mobileLogo} src={MobileLogo} onClick={() => navigate('/')}></img></div>
            <div className={classes.brand}><img className={classes.desktopLogo} src={DesktopLogo} onClick={() => navigate('/')}></img></div>
            <div className={classes.menuIcon} onClick={toggleMobileMenuHandler} >
                <i className={toggle ? `fas fa-times ${classes.faTimes}` : `fas fa-bars ${classes.faBars}`} />
            </div>
            <ul className={toggle ? `${classes.navMenu} + '' + ${classes.active}` : classes.navMenu}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={classes.navLinks} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )

}

export default Navbar;