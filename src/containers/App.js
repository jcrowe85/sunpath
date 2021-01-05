import React, { Component }  from 'react';
import classes from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import retireTach from '../assets/imgs/retirement-tachometer.png';
import retireDots from '../assets/imgs/retirement-dots.png';
import savingsBar from '../assets/imgs/savings-bar.png';
import savingsContainer from '../assets/imgs/savings-container.png';
import savingLines from '../assets/imgs/savings-lines.png';

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
                    <button>START MY CHECKUP</button>
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
                      <button>START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                    <button className="learnMoreBtn">LEARN MORE</button>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapBlk}>
          <div className={`container`}>
            <div className="row">
              <div className="column col-12 col-lg-6 order-lg-1 order-2" >
                <h1>The Higher Your Score, the Closer You are to Retiring</h1>
                <div>
                    <div>
                    <p style={{marginTop: "0", color: "white", fontSize: "1rem"}}>Get started with our 5-minute questionnaire.</p>
                      <p>The score compares your desired retirement age and income to your current ability to generate it. The score includes social security, pension(s), retirement savings, and all other major asset types. </p>
                      <div className="row" style={{padding: "0"}}>
                      <div className="col-7">
                        <button>START MY CHECKUP</button>
                      </div>
                      <div className="col-5">
                        <button className="learnMoreBtn">LEARN MORE</button>
                      </div>
                    </div>
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
              <div className="column col-12 col-lg-6" >
                <div>
                  <h2>Savings Bar</h2>
                  <img src={savingsBar} style={{width: '100%'}}></img>
                  <p>The container in the savings gauge represents the number of years before you reach retirement. This age is calculated by subtracting your desired retirement age from your current age.</p>
                </div>
                <div>
                  <h2>Savings Bar</h2>
                  <img src={savingsContainer} style={{width: '100%'}}></img>
                  <p>The container in the savings gauge represents the number of years before you reach retirement. This age is calculated by subtracting your desired retirement age from your current age.</p>
                </div> 
                <div>
                  <h2>Savings Bar</h2>
                  <img src={savingLines} style={{width: '100%'}}></img>
                  <p>There are 100 savings bars. Each bar represents 10% of the savings you need to be contributing to hit your retirement income goal. Increasing your monthly retirement savings contributions will add more bars.</p>
                </div>                                                                              
              </div>
              <div className="column col-12 col-lg-6" >
                something here
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default App;
