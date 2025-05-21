import classes from "./AppointmentConfirmation.module.css";
import Navbar from "../../components/Navigation/Navbar";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import workingWithClients from "../../assets/imgs/working-with-clients.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import JoshHeadshot from "../../assets/imgs/josh-headshot-blue-bg.jpg";
import { MdLocationOn } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { ordinal_suffix_of } from "../../shared/components/ordinalSuffix";
import { convertTime } from "../../shared/components/convertTime";
import { BiTime } from "react-icons/bi";
import {
  AiOutlineSwapRight,
  AiTwotonePhone,
  AiOutlineDownload
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import StackOfPapers from "../../assets/imgs/stack-of-papers.jpg";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const AppointmentConfirmation = () => {
  useEffect(() => {
    // Trigger Google Ads conversion
    gtag_report_conversion();

    // Trigger Facebook Lead event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead"); // or use: window.fbq("trackCustom", "AppointmentScheduled");
      console.log("✅ Facebook Lead event fired");
    }

    // Init EmailJS
    emailjs.init("-NlWC3XQtQ2WM2mIsE1By");
  }, []);

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-11290226267/VYnPCOL5oc8YENvczIcq",
      event_callback: callback
    });
    return false;
  }

  const [queryParameters] = useSearchParams();

  const inviteeFullName =
    queryParameters.get("attendeeName") ||
    queryParameters.get("invitee_full_name");
  const eventStartTimeRaw =
    queryParameters.get("attendeeStartTime") ||
    queryParameters.get("event_start_time") ||
    queryParameters.get("startTime");
  const eventEndTimeRaw =
    queryParameters.get("event_end_time") || queryParameters.get("endTime");
  const eventId =
    queryParameters.get("uid") || queryParameters.get("invitee_uuid");

  const eventStartTime = eventStartTimeRaw ? new Date(eventStartTimeRaw) : null;
  const eventEndTime = eventEndTimeRaw ? new Date(eventEndTimeRaw) : null;

  const formattedStartTime = eventStartTime
    ? `${convertTime(eventStartTime)} ${
        MONTHS[eventStartTime.getMonth()]
      } ${ordinal_suffix_of(
        eventStartTime.getDate()
      )}, ${eventStartTime.getFullYear()}`
    : "";
  const formattedEndTime = eventEndTime
    ? `${convertTime(eventEndTime)} ${
        MONTHS[eventEndTime.getMonth()]
      } ${ordinal_suffix_of(
        eventEndTime.getDate()
      )}, ${eventEndTime.getFullYear()}`
    : "";

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      message
    };

    emailjs
      .send(
        "service_2clswrb",
        "template_6ttz1ul",
        templateParams,
        "5NG10HmgPEnSFu_2C"
      )
      .then(
        () => {
          alert(
            "Your email was sent! We will contact you within 24 hours. Thank you for choosing Sunpath Financial."
          );
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          navigate("/");
        },
        (error) => {
          alert("There was an error sending your email", error);
        }
      );
  };

  return (
    <div className={classes.contactUs}>
      <div className="bootstrap-wrapper">
        <div
          className={classes.wrapNavy + " " + classes.fiduciaryAdvisorSection}
        >
          <Navbar />
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div className={`column col-12 col-lg-6 ${classes.column}`}>
                <h1 className={classes.large}>
                  {inviteeFullName}, Your Appointment Has Been Scheduled.
                </h1>
                <p style={{ marginTop: "0", fontSize: "1rem" }}>
                  Your Scheduled Meeting Details:
                </p>
                <div className={classes.meetingDetails}>
                  <div className="row">
                    <div className={`col-12 ${classes.assignedAdvisor}`}>
                      <div className={classes.icon}>
                        <BsFillPersonFill />
                      </div>
                      <div className={classes.intro}>
                        Your assigned advisor is: Joshua J. Crowe
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-12 ${classes.meetingDetail}`}>
                      <div className={classes.icon}>
                        <AiTwotonePhone size="18px" />
                      </div>
                      We'll Call You on Your Scheduled Appointment Time
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-12 col-lg-5 ${classes.meetingDetail}`}>
                      <div className={classes.icon}>
                        <BiTime size="18px" />
                      </div>
                      {formattedStartTime}
                    </div>
                    <div className={`col-12 col-lg-1 ${classes.timeIcon}`}>
                      <AiOutlineSwapRight />
                    </div>
                    <div className={`col-12 col-lg-5 ${classes.meetingDetail}`}>
                      <div className={classes.icon}>
                        <BiTime size="18px" />
                      </div>
                      {formattedEndTime}
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-12 ${classes.meetingDetail}`}>
                      <div className={classes.icon}>
                        <BsQrCode size="14px" />
                      </div>
                      Meeting ID: {eventId}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${classes.workingWithClients} column col-12 col-lg-6 ${classes.column}`}
                style={{ margin: "auto", backgroundColor: "#0b2b5c" }}
              >
                <img src={JoshHeadshot} style={{ width: "100%" }} />
                <p>
                  "As the owner of Sunpath Financial, I am honored to have a
                  meeting with you, and look forward to learning more about you
                  during our scheduled call."
                </p>
                <p>- Joshua J. Crowe, CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapWht + " " + classes.location}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <div
                className={`column col-12 col-lg-6 ${classes.column}`}
                style={{ margin: "auto" }}
              >
                <img src={StackOfPapers} />
              </div>
              <div className={`column col-12 col-lg-6 ${classes.column}`}>
                <h1 className={classes.large} style={{ marginTop: "0" }}>
                  Preparing For Your Call With Our Advisor
                </h1>
                <p>
                  On the day of your appointment, your assigned advisor will
                  call you within 5 minutes before or after your scheduled time.
                </p>
                <p>
                  Your advisor will be requesting general financial information,
                  such as retirement income and expense estimates, retirement
                  savings balances (401k, IRA, etc.), brokerage account(s) etc.
                </p>
                <p>
                  If you would like to better prepare yourself for the meeting,
                  you can download and review our factfind worksheet by clicking
                  the link and download the expense worksheet from our google
                  drive:
                </p>
                <div className={classes.download}>
                  <a
                    href="https://docs.google.com/document/d/1co6JW_2CLBitY5PbSRdDSZEJjdIlEFcw2MbFZT9tJkk/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineDownload size="24px" />
                    <p>Sunpath Fact Finder Worksheet - 2023 Copyright</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapNavy + " " + classes.footerSection}>
          <div className={`container ${classes.container}`}>
            <div className="row">
              <p>
                {" "}
                © 2023 Sunpath Financial, Inc. and its related entities, Sunpath
                Financial Group, Sunpath Financial & Insurance Agency, the
                Sunpath logo are service marks of Sunpath Financial and its
                related entities, are registered jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
