import React, { useState } from "react";
import classes from "./Home.module.css";
import Navbar from "../../components/Navigation/Navbar";
import { Link } from "react-router-dom";
import joshNewport from "../../assets/imgs/josh-newport.jpg";
import crossIconExt from '../../assets/imgs/cross-icon-extension-navy.png';
import boating from '../../assets/imgs/boating.png';
import coupleRome from '../../assets/imgs/couple-rome.jpg';
import coupleCamping from '../../assets/imgs/couple-camping.jpeg';
import couplePyramids from '../../assets/imgs/couple-pyramids.jpg';
import familyDinner from '../../assets/imgs/family-dinner.jpg';
import laternFestival from '../../assets/imgs/lantern-festival.jpg';
import friendsTraveling from '../../assets/imgs/friends-traveling.jpg';
import friendsTrain from '../../assets/imgs/train-friends.jpg';
import workingWithClients from '../../assets/imgs/working-with-clients.jpg';
import testimonial from '../../assets/imgs/testimonial.jpg';
import flemmingsRanchoJosh from '../../assets/imgs/flemmings-rancho-josh.jpg'
import flemmingsRanchoJoshCloseUp from '../../assets/imgs/flemmings-rancho-josh-close-up.jpg'
import flemmingsRanchoJoshBackRoom from '../../assets/imgs/flemmings-rancho-josh-back-room-left.jpg'
import roysAnaheimTim from '../../assets/imgs/roys-anaheim-tim.jpg'
import officeNewportDisplay from '../../assets/imgs/office-newport-display.jpg'
import roysAnaheimTim2 from '../../assets/imgs/roys-anaheim-tim-2.jpg'
import flemmingsRanchoJoshCrowd from '../../assets/imgs/flemmings-rancho-josh-crowd.jpg'
import officeNewportKitchen from '../../assets/imgs/office-newport-kitchen.jpg'
import officeNewportTim from '../../assets/imgs/office-newport-tim-2.jpg'
import office1 from '../../assets/imgs/office1.jpg'
import office2 from '../../assets/imgs/office2.jpg'
import office3 from '../../assets/imgs/office3.jpg'
import office4 from '../../assets/imgs/office4.jpg'
import webinars from '../../assets/imgs/webinars.png';
import CookieConsent from "react-cookie-consent";
import EventLocationMap from "../../components/LandingPages/EventLocationMap/EventLocationMap";


const Home = () => {

  const [worthLivingImgActive, setWorthLivingImgActive] = useState(boating);
  const [eventsImgActive, setEventsImgActive] = useState(flemmingsRanchoJoshCloseUp);

  const updateWorthLivingImgHandler = (event) => {
    setWorthLivingImgActive(event.target.dataset.url);
  }

  const updateEventsImgHandler = (event) => {
    setEventsImgActive(event.target.dataset.url);
  }

  return (
    <div className={classes.home}>
      <div className="bootstrap-wrapper">
        <div className={`${classes.wrapNavy} ${classes.mainSection}`}>
          <Navbar />
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-6`}>
                <h1 className={classes.large}>Newport Beach Retirement & Tax Planners</h1>
                <div className="row">
                  <div className="col-2 hidden-md-down" style={{ lineHeight: "0rem" }}>________</div>
                  <div className="col-lg-8" style={{ position: "relative" }}>
                    <p style={{ marginTop: "0", fontSize: "1.2rem" }}>Are you ready for retirement? Find out by scheduling a free consultation.</p>
                    <p>You'll speak with one of our registered and licensed retirement fiduciaries at no charge. Get started today!</p>
                    <Link to='/'><button className="whtBlkWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                  </div>
                </div>
              </div>
              <div className={`column col-12 col-lg-6 ${classes.mainImg}`}>
                <img src={joshNewport} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.retirementWorthLivingSection}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-6 order-lg-2`}>
                <p style={{ margin: "0" }}>A Well Managed Plan Makes a Dream Reality!</p>
                <h1 className={classes.large} style={{ marginTop: "15px", marginBottom: "15px" }}>Let Us Help You Live a Fulfilled Retirement!</h1>
                <div style={{ position: "relative" }}>
                  <p style={{ margin: "0" }}>You've spent the past 35+ years working, it's time to enjoy the fruits of your labor. Let us handle the burden of your finances, so that you can begin the life you worked so hard for.</p>

                </div>
                <div className={`row ${classes['worthLivingImages']}`} style={{ display: "flex" }}>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={boating}>
                    <img src={boating} data-url={boating} />
                  </div>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={coupleCamping}>
                    <img src={coupleCamping} data-url={coupleCamping} />
                  </div>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={coupleRome}>
                    <img src={coupleRome} data-url={coupleRome} />
                  </div>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={couplePyramids}>
                    <img src={couplePyramids} data-url={couplePyramids} />
                  </div>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={friendsTraveling}>
                    <img src={friendsTraveling} data-url={friendsTraveling} />
                  </div>
                  <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={friendsTrain}>
                    <img src={friendsTrain} data-url={friendsTrain} />
                  </div>
                </div>
                <div className="row" style={{ padding: "0", marginTop: "1.5rem" }}>
                  <div className="col-7">
                    <Link to='/'><button className="navyWhtWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                  </div>
                  {/* <div className="col-5">
                      <button className="blkBlkWhtBtn">LEARN MORE</button>
                    </div> */}
                </div>
              </div>
              <div className="column col-12 col-lg-6" >
                <div className={classes.worthLivingMainImg}>
                  <img src={worthLivingImgActive}></img>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 hidden-md-down">
                    {/* <img src={crossIcon} className={classes.crossIcon}></img> */}
                  </div>
                  <div className="col-12 col-lg-8 order-lg-1" style={{ fontStyle: "italic", borderLeft: "5px solid lightgray" }}>
                    <p>“I wanted to know where I was, if I had enough. These guys are the experts. They put together a detailed plan, and explained it to me in words I understood.</p>
                    <p>I pulled the trigger on retirement in 2014, not a day goes by that I don’t miss work, but I have found plenty of things to keep me busy.</p>
                    <p>Nowadays, I worry more about what I am going to do tomorrow than I do my finances...I trust these guys..and I never quite like finances anyhow.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapNavy + ' ' + classes.fiduciaryAdvisorSection}>
          <div className={`container`}>
            <div className="row">
              <div className="column col-12 col-lg-6" >
                <h1 className={classes.large}>Registered Fiduciaries Put Your Interest First</h1>
                <p style={{ marginTop: "0", color: "white", fontSize: "1rem" }}>Sunpath's Fiduciaries Represent the Gold Standard</p>
                <p>As a registered investment advisory firm, Sunpath Financial's fiduciary advisors represent the highest ethical standards, so you can rest assured knowing you're in good hands.</p>
                <div className="row" style={{ padding: "0" }}>
                  <div className="col-7">
                    <Link to='/'><button className="whtBlkWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                  </div>
                  {/* <div className="col-5">
                        <button className="blkBlkWhtBtn">LEARN MORE</button>
                      </div> */}
                </div>
              </div>
              <div className={`${classes.workingWithClients} column col-12 col-lg-6`}><img src={workingWithClients} style={{ width: "100%" }} /></div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.ourServicesSection}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-7 order-lg-2 ${classes.textRight}`} style={{ zIndex: "4" }}>
                <div className={classes.textRight}>
                  <p>Comprehensive Income, Tax, and Investment Planning</p>
                  <h1 className={classes.large}>We Help Our Clients Build and Maintain Their Finances.</h1>
                  <div style={{ position: "relative" }}>
                    <p>Building and maintaing a retirement plan is challenging, but if you equip yourself with the right team of advisors, you can turn a burden into your dream retirement.</p>
                    {/* <p>It works by using a math equation to figure how much you’d need to save each month to reach your retirement income shortfall, and divides it by how much you’re actually contributing.</p> */}
                    <p>Sunpath's fiduciaries are ready to help you tackle your retirement challenges, so that you can spend time enjoying the fruits of your labor.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <Link to='/'><button className="navyWhtWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                  </div>
                  <div className="col-5">
                    {/* <button className="whtWhtBlkBtn">LEARN MORE</button> */}
                  </div>
                </div>
              </div>
              <div className={`column col-12 col-lg-5 order-lg-1 ${classes.serviceList}`} style={{ zIndex: "4" }} >
                <div className={`${classes.ourServicesFeatures}`}>
                  <h2>Social Security and Pensions</h2>
                  {/* <img style={{width: '100%'}}></img> */}
                  {/* <p>The process for filing and collecting your social security and pension benefits is confusing yet critical, and your decision is irreversible. Our income planning process ensures you get the right education to make the absolute best decision.</p> */}
                  <p>Applying for your social security and pension benefit is complex and irreversible. Our professionals can help you maximize your benefit and complete your application.</p>
                </div>
                <div className={`${classes.ourServicesFeatures}`}>
                  <h2>Tax Management</h2>
                  {/* <img  style={{width: '100%'}}></img> */}
                  <p>With sophisticated software and years of experience, we're able to work with clients and our/their CPAs to dramtically decrease their lifetime tax liability.</p>
                </div>
                <div className={`${classes.ourServicesFeatures}`}>
                  <h2>Investments: 401k, IRA, Roth</h2>
                  {/* <img  style={{width: "100%"}}></img> */}
                  <p>We assist our clients with tax-free rollovers, income distributions, and build well diversified, customized portfolios to balance their risk reward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapNavy + ' ' + classes.testimonialSection}>
          <div className="container">
            <div className="row">
              <div className={`column col-12 col-lg-5`}>
                <h1 className={classes.large}>Hear It For Yourself.</h1>
                <div style={{ position: "relative" }}>
                  <p>We work hard to help our clients meet their financial goals, we strive to protect the financial freedom they worked so hard for.</p>
                  <p>The work is challenging, but the compliments we receive from our clientele helps us to persevere.</p>
                  <p>We would love to hear your story, your challenges, to see if we can help you like we've done so many.</p>
                  <div className="row" style={{ padding: "0" }}>
                    <div className="col-7">
                      <Link to='/'><button className="whtBlkWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column col-12 col-lg-7" style={{ margin: "auto" }}>
                <a href="https://www.youtube.com/watch?v=nfeWhmYUUY0" target="_blank"><img src={testimonial}></img></a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.eventSection}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-6 order-lg-2`}>
                <p style={{ margin: "0" }}>Successful Retirees Seek an Education!</p>
                <h1 className={classes.large} style={{ marginTop: "15px", marginBottom: "15px" }}>Join Our Live Educational Dinner Events!</h1>
                <div style={{ position: "relative" }}>
                  <p style={{ margin: "0" }}>Our educational dinner events were designed to help retirees understand the fundamentals of retirement. From social security and pensions, to tax planning, medicare and estate planning, Sunpath covers all the major topics of retirement.</p>
                </div>
                <div className={`row ${classes['eventImages']}`} style={{ display: "flex" }}>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={flemmingsRanchoJoshCloseUp}>
                    <img src={flemmingsRanchoJoshCloseUp} data-url={flemmingsRanchoJoshCloseUp} />
                  </div>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={roysAnaheimTim2}>
                    <img src={roysAnaheimTim2} data-url={roysAnaheimTim2} />
                  </div>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={flemmingsRanchoJoshBackRoom}>
                    <img src={flemmingsRanchoJoshBackRoom} data-url={flemmingsRanchoJoshBackRoom} />
                  </div>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={officeNewportKitchen}>
                    <img src={officeNewportKitchen} data-url={officeNewportKitchen} />
                  </div>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={officeNewportDisplay}>
                    <img src={officeNewportDisplay} data-url={officeNewportDisplay} />
                  </div>
                  <div className="col-4" onClick={updateEventsImgHandler} data-url={officeNewportTim}>
                    <img src={officeNewportTim} data-url={officeNewportTim} />
                  </div>
                </div>
                <div className="row" style={{ padding: "0", marginTop: "1.5rem" }}>
                  <div className="col-7">
                    <Link to='/'><button className="navyWhtWhtBtn" onClick={() => alert("We do not have any events scheduled at this time. Please try back soon.")}>Register for Event</button></Link>
                  </div>
                  {/* <div className="col-5">
                      <button className="blkBlkWhtBtn">LEARN MORE</button>
                    </div> */}
                </div>
              </div>
              <div className="column col-12 col-lg-6" style={{ margin: "auto" }}>
                <div className={classes.eventsMainImg}>
                  <img src={eventsImgActive}></img>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 hidden-md-down">
                    {/* <img src={crossIcon} className={classes.crossIcon}></img> */}
                  </div>
                  {/* <div className="col-12 col-lg-8 order-lg-1" style={{fontStyle: "italic", borderLeft: "5px solid lightgray"}}>
                    <p>“I wanted to know where I was, if I had enough. These guys are the pros. They put together a detailed plan, and explained it to me in words I understood.</p>
                    <p>I pulled the trigger on retirement in 2014, not a day goes by that I don’t miss work, but I have found plenty of things to keep me busy.</p>
                    <p>Nowadays, I worry more about what I am going to do tomorrow than I do my finances...I trust these guys..and I never quite like finances anyhow.”</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapNavy + ' ' + classes.location}>
          <div className={`container`}>
            <div className="row">
              <div className="column col-12 col-lg-6" >
                <h1 className={classes.large}>Located in Beautiful Newport Beach</h1>
                <p>Neslted against Newport Backbay, across the street from Fletcher Jones Mercedes Benz, off SR-73 and Jamboree, Sunpath's headquarter is a central lcoation and makes serving Southern California a breeze.</p>
                <p style={{ borderLeft: "1px solid white", paddingLeft: "1rem" }}><span style={{ fontWeight: "bold" }}>Sunpath Financial, Inc.</span><span className="paragraphBreak">100 Bayview Circle, Suite 100</span><span className="paragraphBreak">Newport Beach, Ca 92660</span></p>
                {/* <div className="row" style={{padding: "1.5rem 0rem"}}>
                  <div className="col-6">
                   <img src={office1} style={{width: "100%"}}></img>
                  </div>
                  <div className="col-6">
                    <img src={office2} style={{width: "100%"}}></img>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-7">
                    <Link to='/'><button className="whtBlkWhtBtn" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                  </div>
                </div>
              </div>
                <div className='col-12 col-lg-5'>
                    <div className='row'>
                      <div className='col-6'>
                        <img src={office1} />
                      </div>
                      <div className='col-6'>
                        <img src={office2} />
                      </div>
                    </div>
                    <div className='row' style={{margin: "1rem 0"}}>
                      <EventLocationMap mapCoordinates={{ center: { lat: 33.65605544419939, lng: -117.86781907081604 }, zoom: 14 }} />
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                        <img src={office3} />
                      </div>
                      <div className='col-6'>
                        <img src={office4} />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.footerSection}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <p> © 2023 Sunpath Financial, Inc. and its related entities, Sunpath Financial Group, Sunpath Financial & Insurance Agency, the Sunpath logo are service marks of Sunpath Financial and its related entities, are registered jurisdictions.</p>
            </div>
          </div>
        </div>
      </div>
      <CookieConsent style={{ fontSize: ".8rem" }}>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  )
}

export default Home;