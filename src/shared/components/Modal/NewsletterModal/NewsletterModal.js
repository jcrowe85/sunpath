import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../../UIElements/Modal/Modal';
import classes from './NewsletterModal.module.css';
import TimDinnerEvent from '../../../../assets/imgs/tim-dinner-event.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const key = "save-newsletter-popup-in-localstorage";
import emailjs, { init } from "@emailjs/browser";

const NewsletterModal = () => {

    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);



    useEffect(() => {
        const modalStatus = localStorage.getItem(key);

        let modalTimer;
        if (!modalStatus) {
            modalTimer = setTimeout(() => {
                setIsModalOpen(true);
            }, 5000);
            localStorage.setItem(key, true);
        }

        return () => {
            clearTimeout(modalTimer);
        }

    }, [isModalOpen])

    const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    //initialize email js to email lead info
    (function () {
        emailjs.init("-NlWC3XQtQ2WM2mIsE1By");
    })();

    //submit registrant info to email js
    const submitHandler = (e) => {
        e.preventDefault();
        const templateParams = {
            fullName: '',
            email: enteredEmail,
            phone: '',
            message: 'newsletter submission'
        }

        emailjs.send("service_2clswrb", "template_6ttz1ul", templateParams, "5NG10HmgPEnSFu_2C")
            .then(function (response) {
                alert("Your email has been added to our newsletter list.")
                setIsModalOpen(false);
            }, function (error) {
                alert("There was an error sending your email", error)
            });
    }

    return (
        isModalOpen &&
        <>
            {createPortal(
                <Modal maxWidth="950px" marginTop="20vh" >
                    <div className="bootstrap-wrapper">
                        <div className={classes.NewsletterModal}>
                            <div className={classes.closeModal} onClick={closeModalHandler}>
                                <AiOutlineClose size='24px' />
                            </div>
                            <div className='container' style={{ padding: "0" }}>
                                <div className='row'>
                                    <div className={`column col-12 col-lg-6 ${classes.left}`}>
                                        <img src={TimDinnerEvent} />
                                    </div>
                                    <div className={`column col-12 col-lg-6 ${classes.column} ${classes.right}`}>
                                        <h1>Sign Up to Receive Retirement Insights</h1>
                                        <p>Joint Our Newsletter to Get Market Insight, Keep Up-to-date on Investment and Tax Strategies, Get Access to Our Education Webinars and Dinner Events.</p>
                                        <form onSubmit={submitHandler} >
                                            <div className="row">
                                                <div className={`col-12 ${classes.formControl}`}>
                                                    <input type="email" value={enteredEmail} onChange={emailInputHandler} placeholder="Enter your email..." autoFocus />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <button className="navyWhtWhtBtn" style={{ width: "100%" }}>Subscribe Now!</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className={classes.footer}>
                                            Your email is safe with us. We won't spam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal >,
                document.getElementById('modal-root')
            )}
        </>
    )
}

export default NewsletterModal;