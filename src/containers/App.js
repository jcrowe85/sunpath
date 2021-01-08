import React, { Component }  from 'react';
import classes from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

import retireTach from '../assets/imgs/retirement-tachometer.png';
import retireDots from '../assets/imgs/retirement-dots.png';
import savingsBar from '../assets/imgs/savings-bar.png';
import savingsContainer from '../assets/imgs/savings-container.png';
import savingLines from '../assets/imgs/savings-lines.png';
import consult1 from '../assets/imgs/consult-1.png';
import consult2 from '../assets/imgs/consult-2.png';
import riskalyze from '../assets/imgs/riskalyze.png';
import sunpathPlanningWoman from '../assets/imgs/retirement-planning-with-sunpath-woman.png';
import retirementSunset from '../assets/imgs/blissful-sunset-of-retirement.png';
import crossIcon from '../assets/imgs/cross-icon.png';
import crossIconExt from '../assets/imgs/cross-icon-extension.png';
import cornerCap from '../assets/imgs/corner-cap.png';

class App extends Component {
  render() {
    return(
      <div className="bootstrap-wrapper">
        <div className={classes.wrapBlk}>
          <Navbar />    
          <div className={`container ${classes.mainSection} `}>
            <div className="row">
              <div className="column col-12 col-lg-9" >
                <p style={{color: "white"}}>“Step on the Retirement Scale Today!”</p>
                <h1>It All Starts With<span className="paragraphBreak" style={{color: "gray"}}>a Retirement Checkup</span></h1>
                <div style={{display:"flex"}}>
                  <div className="col-2 hidden-md-down" style={{lineHeight: "0rem"}}>_________  </div>
                  <div style={{position: "relative"}}>
                    <p style={{marginTop: "0", color: "white", fontSize: "1.3rem"}}>Get started with our 5-minute questionnaire.</p>
                    <p>Our 5-minute questionnaire provides an unbiased retirement score that represents your progress towards retirement. The questionnaire takes 5 minutes to complete, on average. Get started today!</p>
                    <button className="whtBlkWhtBtn">START MY CHECKUP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.tachSection}>
          <div className="container">
            <div className="row">
              <div className={`${classes.tachometer} column col-12 col-lg-5`}><img src={retireTach} style={{width: "100%"}} /></div>
              <div className={`${classes.wrapBlk} column col-12 offset-lg-1 col-lg-6`}>
                <h1>A Checkup Will Provide Your Retirement Score</h1>
                <div>
                  <p style={{marginTop: "0", color: "white", fontSize: "1rem"}}>Get started with our 5-minute questionnaire.</p>
                  <p>Our complimentary retirement plan provides answers to the major retirement questions. Each plan is built by a fiduciary and reviewed by a CFP and CPA.</p>
                  <div className="row" style={{padding: "0"}}>
                    <div className="col-7">
                      <button className="whtBlkWhtBtn">START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                    <button className="blkBlkWhtBtn">LEARN MORE</button>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapBlk + ' ' + classes.dotsChartSection}>
          <div className={`container`}>
            <div className="row">
              <div className="column col-12 col-lg-6 order-lg-1 order-2" >
                <h1>The Higher Your Score, the Closer You are to Retiring</h1>
                <p style={{marginTop: "0", color: "white", fontSize: "1rem"}}>Get started with our 5-minute questionnaire.</p>
                <p>The score compares your desired retirement age and income to your current ability to generate it. The score includes social security, pension(s), retirement savings, and all other major asset types. </p>
                <div className="row" style={{padding: "0"}}>
                  <div className="col-7">
                    <button className="whtBlkWhtBtn">START MY CHECKUP</button>
                  </div>
                  <div className="col-5">
                    <button className="blkBlkWhtBtn">LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className={`${classes.dotsChart} column col-12 col-lg-6 order-lg-2 order-1`}><img src={retireDots} style={{width: "100%"}} /></div>
            </div>
          </div>
        </div>   
        <div className={classes.wrapWht + ' ' + classes.savingsBarSection}>
          <div className="container">
            <div className="row">
              <div className="column col-12 col-lg-5" >
                <div>
                  <h2>Savings Bar</h2>
                  <img src={savingsBar} style={{width: '100%'}}></img>
                  <p>The container in the savings gauge represents the number of years before you reach retirement. This age is calculated by subtracting your desired retirement age from your current age.</p>
                </div>
                <div>
                  <h2>Savings Bar Container</h2>
                  <img src={savingsContainer} style={{width: '100%'}}></img>
                  <p>The container in the savings gauge represents the number of years before you reach retirement. This age is calculated by subtracting your desired retirement age from your current age.</p>
                </div> 
                <div>
                  <h2>Savings Bars</h2>
                  <img src={savingLines} style={{width: "100%"}}></img>
                  <p>There are 100 savings bars. Each bar represents 10% of the savings you need to be contributing to hit your retirement income goal. Increasing your monthly retirement savings contributions will add more bars.</p>
                </div>                                                                             
              </div>
              <div className={`column col-12 col-lg-7 ${classes.textRight}`}>
                <div className={classes.textRight}>
                  <p>The Question Everyone Wants an Answer To</p>
                  <h1>We’ll Also Let You Know If You’re Saving Enough.</h1>
                  <div style={{position: "relative"}}>
                    <p>Found in the tachometer is a small savings gauge. The gauge represents the likeness of you reaching your retirement goal according to how much you’re currently saving.</p>
                    <p>It works by using a math equation to figure how much you’d need to save each month to reach your retirement income shortfall, and divides it by how much you’re actually contributing.</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col-7">
                      <button className="blkWhtBlkBtn">START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                      <button className="whtWhtBlkBtn">LEARN MORE</button>
                    </div>
                  </div>                
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapBlk + ' ' + classes.improveScoreSection}>
          <div className={`container`}>
            <div className="row">
              <div className="column col-12 col-lg-6" >
                <h1>Consult with a Retirement Specialist to Improve Score</h1>
                <p> Get recommendations to improve your retirement score from a registered financial advisor. Our retirement specialist will provide you a complimentary custom retirement report that builds on the areas of weakness in your checkup.</p>
                <div className="row" style={{padding: "1.5rem 0rem"}}>
                  <div className="col-6">
                   <img src={consult1} style={{width: "100%"}}></img>
                  </div>
                  <div className="col-6">
                    <img src={consult2} style={{width: "100%"}}></img>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <button className="whtBlkWhtBtn">START MY CHECKUP</button>
                  </div>
                  <div className="col-5">
                    <button className="blkBlkWhtBtn">LEARN MORE</button>
                  </div>
                </div>
              </div>
              <div className={`${classes.dotsChart} column col-12 col-lg-5 offset-lg-1`}><img src={riskalyze} style={{width: "100%"}} /></div>
            </div>                                                  
          </div>
        </div>
        <div className={classes.wrapWht + ' ' + classes.nerdsOnline}>
          <div className="container">
            <div className="row">
              <div className="column col-12 col-lg-7" >
                <img src={sunpathPlanningWoman}></img>                                                    
              </div>
              <div className={`column col-12 col-lg-5`}>
                <h1>We Nerds do Everything Online.</h1>
                <div style={{position: "relative"}}>
                  <p>Found in the tachometer is a small savings gauge. The gauge represents the likeness of you reaching your retirement goal according to how much you’re currently saving.</p>
                  <p>It works by using a math equation to figure how much you’d need to save each month to reach your retirement income shortfall, and divides it by how much you’re actually contributing.</p>
                  <div className="row" style={{padding: "0"}}>
                    <div className="col-7">
                      <button className="blkWhtBlkBtn">START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                      <button className="whtWhtBlkBtn">LEARN MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className={classes.wrapBlk + ' ' + classes.numbersPeople}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className="column col-12 col-lg-6" >
                <div className={classes.retirementSunset}>
                  <img src={retirementSunset}></img>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 hidden-md-down">
                    <img src={crossIcon}></img>
                  </div>
                  <div className="col-12 col-lg-8">
                  <p>“I wanted to know where I was, if I had enough. These guys are the pros. They put together a detailed plan, and explained it to me in words I understood.</p>
                  <p>I pulled the trigger on retirement in 2014, not a day goes by that I don’t miss work, but I have found plenty of things to keep me busy.</p>
                  <p>Nowadays, I worry more about what I am going to do tomorrow than I do my finances...I trust these guys..and I never quite like finances anyhow.”</p>
                  </div>
                </div>                                                                             
              </div>
              <div className={`column col-12 col-lg-6`}>
                <p>Numbers Keep Us Busy, People Keep Us Happy!</p>
                <h1>We might be nerdy, but people actually like us!</h1>
                <div style={{position: "relative"}}>
                  <p>Although we spend most our time with numbers, we definitely connect with our clients, espcially during our followups, and to be frank, most of our clients prefer to talk anything but 
finance - we simply accomodate.</p>
                  <div className="row" style={{padding: "0"}}>
                    <div className="col-7">
                      <button className="whtBlkWhtBtn">START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                      <button className="blkBlkWhtBtn">LEARN MORE</button>
                    </div>
                  </div>
                  <div className="hidden-md-down">
                    <img src={crossIconExt} className={classes.crossIconExt}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>                 
      </div>
    )
  }
} 

export default App;
