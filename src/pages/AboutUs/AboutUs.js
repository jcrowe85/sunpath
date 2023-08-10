import Navbar from "../../components/Navigation/Navbar";
import classes from './AboutUs.module.css';
import JoshAlbertBook from '../../assets/imgs/josh-albert-book.jpg';
import JoshForbes from '../../assets/imgs/josh-forbes.jpg';
import JoshHeadshot from '../../assets/imgs/josh-headshot-blue-bg.jpg';
import AlbertHeadshot from '../../assets/imgs/albert-headshot-blue-bg.jpg'
import TimHeadshot from '../../assets/imgs/tim-headshot-blue-bg.jpg'
import NateHeadshot from '../../assets/imgs/nate-headshot-blue-bg.jpg';
import ShiawHeadshot from '../../assets/imgs/shiawtian-headshot-blue-bg.jpg'
import LaurenHeadshot from '../../assets/imgs/lauren-headshot.jpg'
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
                                <div className="column col-12 col-lg-7" >
                                    <img src={JoshAlbertBook}></img>
                                </div>
                                <div className={`column col-12 col-lg-5`} >
                                    <h1 className={classes.large}>Founders and Authors on Retirement</h1>
                                    <div >
                                        <p>With several accolades at one of the world's largest financial institutions, Joshua J. Crowe, Albert J. Lee, and Timothy R. Healy, founded Sunpath Financial in 2016.</p>
                                        <p>In the years that followed, they authored a retirement book, were published in Forbes, and received highest production in the US with two large partners.</p>
                                        <p>They've spoken to thousands on the topic of retirement at their dinner events across Southern California, and have received notable recognition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.joshSection}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                <h1>Joshua J. Crowe, CEO</h1>
                                <div >
                                    <p>Sunpath's CEO, CCO, and founder, Joshua J. Crowe is a 20-year finance vet who started his career in taxes at just 18 years old.</p>
                                    <p>Josh is rewnown author of retirement, was published in Forbes for his work on the topic, and went on to receive top-25 writers in 2019.</p>
                                    <p>He has presented to thousands of pre and post retirees, providing an education on what it means to manage a successful retirement.</p>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-7" >
                                <img src={JoshHeadshot}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.albertSection}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-7" >
                                    <img src={AlbertHeadshot}></img>
                                </div>
                                <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                    <h1>Albert Jasper Lee, CFO</h1>
                                    <div >
                                        <p>Co-founder and CFO, Albert J. Lee graduted UCI with his business degree, which was right around the time of the great financial crisis of 2009.</p>
                                        <p>That crash drove Albert to one of the world's largest financial institutions, where he received notable recognition for production.</p>
                                        <p>He would then join forces with Josh to co-found Sunpath Financial. Within the first year of inception, Albert led the two in writing their first retirement book.</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.timSection}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                <h1>Timothy R. Healy, VP</h1>
                                <div >
                                    <p>Co-founder and VP, Timothy R. Healy is a 15-year finance vet who serves as Sunpath's VP and director of sales.</p>
                                    <p>He started his career at one of nation's largest financial firms after graduating with his business degree.</p>
                                    <p>Timothy went on the receive several accolades a the firm, including rookie of the year and MDRT, two of the firms most challening feats.</p>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-7" >
                                <img src={TimHeadshot}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.nateSection}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-7" >
                                    <img src={NateHeadshot}></img>
                                </div>
                                <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                    <h1>Nathan M. Crowe</h1>
                                    <div >
                                        <p>Tax accountant and financial advisor, Nathan M. Crowe has spent the past 20-years in finance.</p>
                                        <p>Nathan has served thousands of tax and finance clients, building his family's tax clientele into the thousands.</p>
                                        <p>He serves as one of Sunpath's financial advisors and educational dinner event presenters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapWht + ' ' + classes.shiawSection}>
                    <div className="container">
                        <div className="row">
                            <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                <h1>Shiawtian Chen, CPA</h1>
                                <div >
                                    <p>CPA and tax account, Shiawtian Chen has spent the past 10-years working with high-profile clients worldwide.</p>
                                    <p>Shiawtian serves as Sunpath's CPA, tax strategist, and business consultant.</p>
                                    <p>He was strategically hired to help Sunpath's clients reduce their lifetime tax liabilities.</p>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-7" >
                                <img src={ShiawHeadshot}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapNavy + ' ' + classes.laurenSection}>
                    <div className={classes.nerdsOnline}>
                        <div className="container">
                            <div className="row">
                                <div className="column col-12 col-lg-7" >
                                    <img src={LaurenHeadshot}></img>
                                </div>
                                <div className={`column col-12 col-lg-5`} style={{ margin: 'auto' }}>
                                    <h1>Lauren Stone, MBA</h1>
                                    <div >
                                        <p>Lauren Stone received her masters of business administration degree in 2019 and went on to work for several large firms.</p>
                                        <p>She serves as Sunpath's executive assistant, curating operations, coordinating client acquisitions, organizing marketing efforts, and so forth.</p>
                                        <p>With an aptitude for detail, Lauren keeps the proverbial "wheels greased" for all of us at Sunpath.</p>
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