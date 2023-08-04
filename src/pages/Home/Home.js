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
import React, { useState } from "react";

const Home = () => {

  const [worthLivingImgActive, setWorthLivingImgActive] = useState(boating);

  const updateWorthLivingImgHandler = (event) => {
    setWorthLivingImgActive(event.target.dataset.url);
  } 

  return (
    <div className={classes.home}>
      <div className="bootstrap-wrapper">
        <div className={`${classes.wrapNavy} ${classes.mainSection}`}>
        <Navbar />
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-6`}>
                {/* <p style={{color: "white", fontSize: "1rem", color: "black"}}>“A New Beginning Awaits: Find Your Retirement Freedom.”</p> */}
                {/* <h1 className={classes.large}>It All Starts With<span className="paragraphBreak">a Retirement Checkup</span></h1> */}
                <h1 className={classes.large}>Newport Beach Retirement & Tax Planners</h1>
                <div className="row">
                  <div className="col-2 hidden-md-down" style={{lineHeight: "0rem"}}>________</div>
                  <div className="col-lg-8" style={{ position: "relative" }}>
                    <p style={{ marginTop: "0", fontSize: "1.2rem"}}>Are you ready for retirement? Find out with our 5-minute questionnaire.</p>
                    <p>Our 5-minute questionnaire provides an unbiased retirement score that represents your progress towards retirement. The questionnaire takes 5 minutes to complete, on average. Get started today!</p>
                    <Link to='/'><button className="whtBlkWhtBtn">START MY CHECKUP</button></Link>
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
                <p style={{margin: "0"}}>A Well Managed Plan Makes Dreams a Reality!</p>
                <h1 className={classes.large} style={{marginTop: "15px", marginBottom: "15px"}}>Let Us Help You Live a Fulfilled Retirement!</h1>
                <div style={{position: "relative"}}>
                  <p style={{margin: "0"}}>You've spent the past 35+ years working, it's time to enjoy the fruits of your labor. Let us handle the burder of budgeting and investing, so that you can begin to the life you worked so hard for.</p>

                </div>
                <div className={`row ${classes['worthLivingImages']}`} style={{display: "flex"}}>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={boating}>
                      <img src={boating} data-url={boating}/>
                    </div>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={coupleCamping}>
                      <img src={coupleCamping} data-url={coupleCamping}/>
                    </div>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={coupleRome}>
                      <img src={coupleRome} data-url={coupleRome}/>
                    </div>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={couplePyramids}>
                      <img src={couplePyramids} data-url={couplePyramids}/>
                    </div>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={friendsTraveling}>
                      <img src={friendsTraveling} data-url={friendsTraveling}/>
                    </div>
                    <div className="col-4" onClick={updateWorthLivingImgHandler} data-url={friendsTrain}>
                      <img src={friendsTrain} data-url={friendsTrain}/>
                    </div>
                  </div>
                  <div className="row" style={{padding: "0", marginTop: "1.5rem"}}>
                    <div className="col-7">
                    <Link to='/'><button className="navyWhtWhtBtn">START MY CHECKUP</button></Link>
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
                  <div className="col-12 col-lg-8 order-lg-1" style={{fontStyle: "italic", borderLeft: "5px solid lightgray"}}>
                    <p>“I wanted to know where I was, if I had enough. These guys are the pros. They put together a detailed plan, and explained it to me in words I understood.</p>
                    <p>I pulled the trigger on retirement in 2014, not a day goes by that I don’t miss work, but I have found plenty of things to keep me busy.</p>
                    <p>Nowadays, I worry more about what I am going to do tomorrow than I do my finances...I trust these guys..and I never quite like finances anyhow.”</p>
                  </div>
                </div>                                                                             
              </div>
            </div>
          </div>   
          <div className={classes.wrapNavy + ' ' + classes.ourServicesSection}>
              <div className={`container`}>
                <div className="row">
                  <div className="column col-12 col-lg-6" >
                    <h1 className={classes.large}>Registered Fiduciaries Put Your Interest First</h1>
                    <p style={{marginTop: "0", color: "white", fontSize: "1rem"}}>Sunpath's Fiduciaries Represent the Gold Standard</p>
                    <p>As a registered investment advisory firm, Sunpath Financial's fiduciary advisors represent the highest ethical standards, so you can rest assured knowing you're in good hands.</p>
                    <div className="row" style={{padding: "0"}}>
                      <div className="col-7">
                      <Link to='/'><button className="whtBlkWhtBtn">START MY CHECKUP</button></Link>
                      </div>
                      {/* <div className="col-5">
                        <button className="blkBlkWhtBtn">LEARN MORE</button>
                      </div> */}
                    </div>
                  </div>
                  <div className={`${classes.workingWithClients} column col-12 col-lg-6`}><img src={workingWithClients} style={{width: "100%"}} /></div>
                </div>
              </div>           
          </div>
        </div>  
        {/* 
          A comprehensive financial plan
          Your tax situation
          forcasting your future finances
          Your investments
          reviewing your progress
          https://www.evelyn.com/services/financial-planning/a-full-financial-plan/
        */}
      </div>
    </div>
  )
}

export default Home;