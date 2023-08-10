import Navbar from "../../components/Navigation/Navbar";
import classes from './OurProcess.module.css';
import JoshAlbertBook from '../../assets/imgs/josh-albert-book.jpg';
import JoshForbes from '../../assets/imgs/josh-forbes.jpg';
import JoshHeadshot from '../../assets/imgs/josh-headshot-blue-bg.jpg';
import AlbertHeadshot from '../../assets/imgs/albert-headshot-blue-bg.jpg'
import TimHeadshot from '../../assets/imgs/tim-headshot-blue-bg.jpg'
import NateHeadshot from '../../assets/imgs/nate-headshot-blue-bg.jpg';
import ShiawHeadshot from '../../assets/imgs/shiawtian-headshot-blue-bg.jpg'
import LaurenHeadshot from '../../assets/imgs/lauren-headshot.jpg'
import RoadMap from '../../assets/imgs/roadpamp.jpg';
import StepBg from '../../assets/imgs/step-bg.jpg';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className={classes.aboutUs}>
            <div className="bootstrap-wrapper">
                <div className={classes.wrapNavy + ' ' + classes.mainSection}>
                    <Navbar />
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-5" style={{ margin: "auto" }}>
                                    <img src={RoadMap}></img>
                                </div>
                                <div className={`column col-12 col-lg-7`} >
                                    <h1 className={classes.large}>Let Us Help You Build a Retirement Roadmap</h1>
                                    <div >
                                        <p>Our process challenges clients to go on a journey, to explore what they'd like to do in retirement. Traveling, hanging out with the grandkids, exploring new hobbies, start a new business..this is your opportunity to reach for the stars.</p>
                                        <p>Despite the size of your retirement dream, it will demand resources. We must examine your income, expenses, assets, liabilities, insurance, and taxes, to measure your progress.</p>
                                        <p>Once the plan is built, you'll be well on your way, and you will continue to hear from us 4 times per year, on the beginning of each quarter, to discuss and review your plan's progress.</p>
                                        {/* <p>As with all goals in life, it's impossible to know where you're going without a roadmap. You must define where you are today, where'd you like to be tomorrow, and how you're going to get there.</p> */}

                                        <p></p>
                                    </div>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-7">
                                            <Link to='/'><button className="whtBlkWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.step1}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                <h1>Understanding Where You Are Today</h1>
                                <div >
                                    <p>The first step invovles a face-to-face meeting (but can take place over the phone) where we will gather pertinent financial information.</p>
                                    <p>We will request statements and figures for income, expenses, assets, liabilities, taxes, investments, and insurance.</p>
                                    <p>Our ability to help meet your needs is only as good as your complete financial disclosure. Our team will provide a worksheet prior to your first meeting to assist you in collecting these items.</p>
                                </div>
                                <div className="row" style={{ padding: "0" }}>
                                    <div className="col-7">
                                        <Link to='/'><button className="navyWhtWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-5" style={{ backgroundColor: "#05204a" }}>
                                <div className={classes.step}>
                                    <h1>Step 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.step2}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-5" style={{ backgroundColor: "#fff" }}>
                                    <div className={classes.step}>
                                        <h1 style={{ color: "#05204a" }}>Step 2</h1>
                                    </div>
                                </div>
                                <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                    <h1>Where You'd Like to Be Tomorrow</h1>
                                    <div>
                                        <p>The second step in our process is more exciting than the first, it's your opportunity to dream and share the things you'd like to do in retirement.</p>
                                        <p>It could be anything from traveling to golfing, camping, shopping, spending time with the grandkids, maybe even starting a new business. It's our priority to see that you enjoy a happy and fulfilled retirement.</p>
                                        <p>Sharing all the details of your dream retirement with us will ensure we plan and budget to make it a reality.</p>
                                    </div>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-7">
                                            <Link to='/'><button className="whtBlkWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.step3}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                <h1>A Roadmap to Get You There</h1>
                                <div>
                                    <p>With your dreams and finacials in hand, our dedicated planning team will begin working on your customized retirement roadmap.</p>
                                    <p>The plan will take about 2 weeks to complete, and will include a detailed income, expense, tax, insurance, liability, and investment report.</p>
                                    <p>We'll also include a complimentary stress-test analysis, where we measure your plans strength against common retirement pitfalls like hyper inflation, double taxation, long-term care, premature death, market volatility, etc.</p>
                                </div>
                                <div className="row" style={{ padding: "0" }}>
                                    <div className="col-7">
                                        <Link to='/'><button className="navyWhtWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-5" style={{ backgroundColor: "#05204a" }}>
                                <div className={classes.step}>
                                    <h1>Step 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.step4}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-5" style={{ backgroundColor: "#fff" }}>
                                    <div className={classes.step}>
                                        <h1 style={{ color: "#05204a" }}>Step 4</h1>
                                    </div>
                                </div>
                                <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                    <h1>Review and Discuss Your Retirement Plan</h1>
                                    <div>
                                        <p>During our second meeting, we will discuss the outcome of your plan, carefully reviewing each of the aforementioned reports to help you understand how your needs and wants will be met.</p>
                                        <p>You'll learn where our solutions fit in, and how they work to bridge the gap in your plan. We'll reivew any fees or commissions to be paid for moving forward with us.</p>
                                        <p>The meeting will end with a Q&A to allow you to ask questions that might have arised during our presentation. We'll request to schedule a third appointment to move forward with our reocmmendations, provided you feel comfortable.</p>
                                    </div>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-7">
                                            <Link to='/'><button className="whtBlkWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.step5}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                <h1>Implement Your Retirement Plan</h1>
                                <div>
                                    <p>When you decided to move forward with us, we will schedule a third meeting to begin implementing our recommendations.</p>
                                    <p>During this meeting we will collect and complete applications and paperwork necessary, and make calls to current financial institutions to begin moving the assets over.</p>
                                    <p>Applications and paperwork can take up to an hour or more to complete, so we will prioritize each according to your schedule. It's not uncommon to have more than a couple implementation meetings.</p>
                                    <p></p>
                                </div>
                                <div className="row" style={{ padding: "0" }}>
                                    <div className="col-7">
                                        <Link to='/'><button className="navyWhtWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-5" style={{ backgroundColor: "#05204a" }}>
                                <div className={classes.step}>
                                    <h1>Step 5</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.step6}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-5" style={{ backgroundColor: "#fff" }}>
                                    <div className={classes.step}>
                                        <h1 style={{ color: "#05204a" }}>Step 6</h1>
                                    </div>
                                </div>
                                <div className={`column col-12 col-lg-7`} style={{ margin: 'auto' }}>
                                    <h1>Annual & Quarterly Review</h1>
                                    <div>
                                        <p>On the first week of every quarter we send all clients a link to schedule an appointment to review their progress.</p>
                                        <p>We dedicate that week to client meetings only. We spend most of the time discussing market and policitcal conditions along with the impact they did/will have on the long-term health of your plan.</p>
                                        <p>Clients are not obligated to take the call, as we will leave a voice mail summary for your convenience.</p>
                                        <p>We offer 1 annual call to clients to delve deeper, strategizing the course of the year, discussing income decreases/increases, tax strategizing and so forth.</p>
                                    </div>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-7">
                                            <Link to='/'><button className="whtBlkWhtBtn" id="book-consultation" onClick={() => location.href='https://calendly.com/sunpathfinancial/20-minute-consultation'}>BOOK CONSULTATION</button></Link>
                                        </div>
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
        </div>
    )
}

export default AboutUs;