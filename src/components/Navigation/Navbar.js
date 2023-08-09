import React, { Component, useEffect, useState } from 'react';
import classes from './Navbar.module.scss';

import MenuItems from './MenuItems';
import MobileLogo from '../../assets/imgs/full-size-logo-blk.png';
import DesktopLogo from '../../assets/imgs/full-size-logo-wht.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [mobile, setMobile] = useState(false);

    const toggleMobileMenuHandler = () => {
        setToggle(prevState => !prevState);
    }

    useEffect(() => {

        const onResize = () => {
            if (window.innerWidth < "992") {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        const resize = addEventListener('resize', onResize);

        return () => {removeEventListener('resize', onResize)}
    }, [])

    return (
        <div className={`${classes.navbar}`}>
            {mobile && <div className={classes.brand}><img className={classes.mobileLogo} src={MobileLogo} onClick={() => navigate('/')}></img></div>}
            {mobile && <div className={classes.menuIcon} onClick={toggleMobileMenuHandler} >
                <i className={toggle ? `fas fa-times ${classes.faTimes}` : `fas fa-bars ${classes.faBars}`} />
            </div>}
            <div className={classes.brand}>
                <img className={classes.desktopLogo} src={DesktopLogo} onClick={() => navigate('/')} />
            </div>
            <ul className={toggle ? `${classes.navMenu} ${classes.active}` : classes.navMenu}>
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