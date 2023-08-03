import classes from "./Home.module.css";
import Navbar from "../../components/Navigation/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bootstrap-wrapper">
        <div className={classes.wrapBlk}>
          <Navbar />    
          <div className={`container ${classes.mainSection} `}>
            <div className="row">
              <div className="column col-12 col-lg-9" >
                <p style={{color: "white"}}>“Step on the Retirement Scale Today!”</p>
                <h1 className={classes.large}>It All Starts With<span className="paragraphBreak" style={{color: "gray"}}>a Retirement Checkup</span></h1>
                <div className="row">
                  <div className="col-2 hidden-md-down" style={{lineHeight: "0rem"}}>_________  </div>
                  <div className="col-lg-8" style={{position: "relative"}}>
                    <p style={{marginTop: "0", color: "white", fontSize: "1.2rem"}}>Get started with our 5-minute questionnaire.</p>
                    <p>Our 5-minute questionnaire provides an unbiased retirement score that represents your progress towards retirement. The questionnaire takes 5 minutes to complete, on average. Get started today!</p>
                    <Link to='/'><button className="whtBlkWhtBtn">START MY CHECKUP</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;