import React, { Component }  from 'react';
import classes from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import retireTach from '../assets/imgs/retirement-tachometer.png';

class App extends Component {
  render() {
    return(
      <div className="bootstrap-wrapper">
        <div className={classes.wrapBlk}>
          <Navbar />    
          <div className={`container ${classes.mainSection} `}>
            <div className="row">
              <div className="column col-12 col-lg-9" >
                <p>“Step on the Retirement Scale Today!”</p>
                <h1>It All Starts With<span className="paragraphBreak" style={{color: "gray"}}>a Retirement Checkup</span></h1>
                <div style={{display:"flex"}}>
                  <div className="col-2 hidden-md-down" style={{lineHeight: "0rem"}}>_________  </div>
                  <div>
                    <h4 style={{marginTop: "0"}}>Get started with our 5-minute questionnaire.</h4>
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
                <p>“Where You Are Today Versus Where You’d Like to Be at Retirement”</p>
                <h1>A Checkup Will Provide Your Retirement Score</h1>
                <div>
                  <h4 style={{marginTop: "0"}}>Get started with our 5-minute questionnaire.</h4>
                  <p>Our complimentary retirement plan provides answers to the major retirement questions. Each plan is built by a fiduciary and reviewed by a CFP and CPA.</p>
                  <div className="row" style={{padding: "0"}}>
                    <div className="col-7">
                      <button>START MY CHECKUP</button>
                    </div>
                    <div className="col-5">
                      <button style={{background: "transparent", color: "white", border: "1px solid white", boxSizing: "content-box"}}>LEARN MORE</button>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapBlk}>
          <div className={`container ${classes.mainSection} `}>
            <div className="row">
              <div className="column col-12 col-lg-7" >
                <h1>The Higher Your Score, the Closer You are to Retiring</h1>
                <div style={{display:"flex"}}>
                    <div>
                      <p>The score compares your desired retirement age and income to your current ability to generate it. The score includes social security, pension(s), retirement savings, and all other major asset types. </p>
                      <div className="row" style={{padding: "0"}}>
                      <div className="col-7">
                        <button>START MY CHECKUP</button>
                      </div>
                      <div className="col-5">
                        <button style={{background: "transparent", color: "white", border: "1px solid white", boxSizing: "content-box"}}>LEARN MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column col-12 col-lg-5">second div here</div>
            </div>
          </div>
        </div>        
      </div>
    )
  }
} 

export default App;
