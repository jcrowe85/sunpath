import classes from './ContactUs.module.css';
import { Link } from 'react-router-dom';
import office1 from '../../assets/imgs/office1.jpg'
import office2 from '../../assets/imgs/office2.jpg'
import office3 from '../../assets/imgs/office3.jpg'
import office4 from '../../assets/imgs/office4.jpg'
import EventLocationMap from '../../components/LandingPages/EventLocationMap/EventLocationMap';
import Navbar from "../../components/Navigation/Navbar";
import React, { useState } from 'react';
import emailjs, { init } from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    (function(){
        emailjs.init("-NlWC3XQtQ2WM2mIsE1By");
     })();

     const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const updateFirstNameHandler = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value);
    }

    const updateLastNameHandler = (e) => {
        setLastName(e.target.value);
    }

    const updateEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const updatePhoneHandler = (e) => {
        setPhone(e.target.value);
    }

    const updateMessageHandler = (e) => {
        setMessage(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const templateParams = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        }
        
        emailjs.send("service_2clswrb", "template_6ttz1ul", templateParams, "5NG10HmgPEnSFu_2C")
        .then(function(response) {
            alert("Your email was sent! We will contact you within 24 hours. Thank you for choosing Sunpath Financial.")
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            navigate("/")
        }, function(error) {
            alert("There was an error sending your email", error)
        });
    }
    return (
        <div className={classes.contactUs}>
            <div className="bootstrap-wrapper">
                <div className={classes.wrapNavy + ' ' + classes.location}>
                    <Navbar />
                    <div className={`container`}>
                        <div className="row">
                            <div className="column col-12 col-lg-6" >
                                <h1 className={classes.large} style={{marginTop: "0"}}>Get In Touch with Us Today</h1>
                                <p>Thank you for considering Sunpath Financial to service your wealth management needs.</p>
                                <p>If you cannot contact us outside normal business hours, please feel free to complete our contact form located on this page.</p>
                                <p>One of our representatives will return your call within 24 hours.</p>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <p style={{ borderLeft: "1px solid white", paddingLeft: "1rem" }}>
                                            <span style={{ fontWeight: "bold" }}>Sunpath Financial, Inc.</span>
                                            <span className="paragraphBreak">100 Bayview Circle, Suite 100</span>
                                            <span className="paragraphBreak">Newport Beach, Ca 92660</span>
                                        </p>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <p style={{ borderLeft: "1px solid white", paddingLeft: "1rem" }}>
                                            <span style={{ fontWeight: "bold" }}>Hours of operation</span>
                                            <span className="paragraphBreak">Monday - Friday: 9am - 5pm</span>
                                            <span className="paragraphBreak">Saturday - Sunday: Closed</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-12 col-lg-6" style={{ margin: 'auto' }}>
                                <form onSubmit={submitForm} >
                                    <div className="row">
                                        <div className={`col-12 col-lg-6 ${classes.formControl}`}>
                                            <label>First Name:</label>
                                            <input type="text" value={firstName} onChange={updateFirstNameHandler} autoFocus />
                                        </div>
                                        <div className={`col-12 col-lg-6 ${classes.formControl}`}>
                                            <label>Last Name:</label>
                                            <input type="text" value={lastName} onChange={updateLastNameHandler} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={`col-12 ${classes.formControl}`}>
                                            <label>Email:</label>
                                            <input type="email" value={email} onChange={updateEmailHandler} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={`col-12 ${classes.formControl}`}>
                                            <label>Phone:</label>
                                            <input type="text" value={phone} onChange={updatePhoneHandler} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={`col-12 ${classes.formControl}`}>
                                            <label>Enter a Message (optional):</label>
                                            <textarea type="text" value={message} rows="5" onChange={updateMessageHandler} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="whtBlkWhtBtn" style={{ width: "100%" }}>SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;