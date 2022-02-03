import React, { Component } from 'react';
import classes from './Navbar.module.scss';

import MenuItems from './MenuItems';
import MobileLogo from '../../assets/imgs/full-size-logo-blk.png';
import DesktopLogo from '../../assets/imgs/full-size-logo-wht.png';

class Navbar extends Component {

    state = { toggle: false};

    toggleMobileMenuHandler = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div className={`${classes.navbar}`}>
                <div className={classes.brand}><img className={classes.mobileLogo} src={MobileLogo}></img></div>
                <div className={classes.brand}><img className={classes.desktopLogo} src={DesktopLogo}></img></div>
                <div className={classes.menuIcon} onClick={this.toggleMobileMenuHandler} >
                    <i className={this.state.toggle ? `fas fa-times ${classes.faTimes}` : `fas fa-bars ${classes.faBars}`} />
                </div>
                <ul className={this.state.toggle ? `${classes.navMenu} + '' + ${classes.active}` : classes.navMenu}>
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
  }

export default Navbar;