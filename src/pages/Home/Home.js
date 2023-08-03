import classes from "./Home.module.css";
import Navbar from "../../components/Navigation/Navbar";
import { Link } from "react-router-dom";
import joshNewport from "../../assets/imgs/josh-newport.jpg";

const Home = () => {
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
                    <p style={{ color: "#6f8695"}}>Our 5-minute questionnaire provides an unbiased retirement score that represents your progress towards retirement. The questionnaire takes 5 minutes to complete, on average. Get started today!</p>
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
      </div>
    </div>
  )
}

export default Home;