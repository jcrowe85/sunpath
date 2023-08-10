import React, { Component, useEffect, useState } from 'react';
import classes from './Navbar.module.scss';

import MenuItems from './MenuItems';
import MobileLogo from '../../assets/imgs/full-size-logo-blk.png';
import DesktopLogo from '../../assets/imgs/full-size-logo-wht.png';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth < 992 && true);

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

        return () => { removeEventListener('resize', onResize) }
    }, [])

    return (
        <div className={`${classes.navbar}`}>
            {!mobile &&
                <div className={classes.desktopMenu}>
                    <div className={classes.brand}>
                        <img className={classes.desktopLogo} src={DesktopLogo} onClick={() => navigate('/')} />
                    </div>
                    <ul className={classes.navMenu}>
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
            }
            {mobile &&
                <>
                    <div className={classes.mobileMenu}>
                        <div className={classes.brand}>
                            <img className={classes.mobileLogo} src={DesktopLogo} onClick={() => navigate('/')} />
                        </div>
                        <RxHamburgerMenu onClick={toggleMobileMenuHandler} size="24px" />
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
                </>
            }
        </div>
    )

}

export default Navbar;