import classes from './Seminar.module.css';
import LandingPageHeader from '../../../components/LandingPages/Header/LandingPageHeader';
import SectionVideoCta from '../../../components/LandingPages/Sections/SectionVideoCta/SectionVideoCta';
import SectionTopicsCovered from '../../../components/LandingPages/Sections/SectionTopicsCovered/SectionTopicsCovered';
import SectionEventDetails from '../../../components/LandingPages/Sections/SectionEventDetails/SectionEventDetails';
import SectionMeetYourPresenter from '../../../components/LandingPages/Sections/SectionMeetYourPresenter/SectionMeetYourPresenter';
import LandingPageFooter from '../../../components/LandingPages/Footer/Footer';
import logo from '../../../assets/imgs/sunpath-social-security-logo.png';
import RmdTaxImg from '../../../assets/imgs/ira-tax-rmd.jpg';
import LifetimeTax from '../../../assets/imgs/slash-lifetime-tax.jpg';
import ProtectAssets from '../../../assets/imgs/protect-investments.jpg';
import EventImgOne from '../../../assets/imgs/steak-dinner.jpg';
import EventImgTwo from '../../../assets/imgs/wine-buckets.jpg';
import EventImgThree from '../../../assets/imgs/sunpath-financial-100-bayview-circle.jpg';
import EventImgFour from '../../../assets/imgs/sunpath-conference-room.jpg';
import PresenterImg from '../../../assets/imgs/josh-beach.jpg';

const SocialSecuritySeminar = () => {
    const pageInfo = {
        header: {
            logoImg: logo,
            logoImgAlt: 'Sunpath Social Security Logo',
            backgroundColor: '#002a5c',
            companyPhone: '949-674-5248'
        },
        sectionVideoCta: {
            eventName: 'Maximize Your Social Secuirty Benefit & Reduce Your Retirement Taxes',
            eventLocation: '- A Complimentary Dinner Event in Newport Beach -',
            seminarDateTime: 'March 3, 2022 18:30:00',
            companyName: 'Sunpath Financial',
            eventAddress: '100 Bayview Circle, Newport Beach, Ca 92660',
            formTitle: 'Reserve Your Seat Now!',
            dateTimeBox: 'Thursday, March 3rd @ 6:30PM PST',
            heroUrl: 'https://www.youtube.com/embed/MSH9GQUjgII',
            ctaButtonText: 'RESERVE MY SEAT!'
        },
        sectionTopicsCovered: {
            pageBreak: {
                pageBreakTitle: 'Event Topics We\'ll Cover:', 
                pageBreakBackgroundColor: '#002a5c'
            },
            videoInfo: {
                topicOne: {
                    topicOneTitle: 'Guaranteed 8% Raise',
                    topicOneUrl: 'https://www.youtube.com/embed/Gp_aL5swiJQ',
                    topicOneDescription: 'Find out how you can receive an 8 % annual raise to your benefit through the power of deferral.'
                },
                topicTwo: {
                    topicTwoTitle: 'Breakeven Analysis',
                    topicTwoUrl: 'https://www.youtube.com/embed/j5uUYJDkfFg',
                    topicTwoDescription: 'Among several factors, the Breakeven Analysis is by far the most important when determining when to take benefits.'
                },
                topicThree: {
                    topicThreeTitle: 'Claiming Spousal Benefit',
                    topicThreeUrl: 'https://www.youtube.com/embed/VFhOsAH8rRE',
                    topicThreeDescription: 'Discover if you\'re eligible for spousal benefit, and how much you\'re qualified to receive at early and late retirement age.'
                },
                topicFour: {
                    topicFourTitle: 'Reduce IRA Tax & RMDs',
                    topicFourImage: RmdTaxImg,
                    topicFourDescription: 'Learn how you can avoid losing 70% or more of your IRA to taxes and how you can legally eliminate taking RMDs (RMD) at age 72.'
                },
                topicFive: {
                    topicFiveTitle: 'Slash Your Lifetime Tax Bill',
                    topicFiveImage: LifetimeTax,
                    topicFiveDescription: 'What you could do now if your goal is to potentially save tens or even hundreds of thousands in lifetime income tax.'
                },
                topicSix: {
                    topicSixTitle: 'Protecting You Investments',
                    topicSixImage: ProtectAssets,
                    topicSixDescription: 'How to keep some of your money safely out of harm\'s way without settling for low interest rates.'
                },
            }
        },
        sectionEventDetails: {
            pageBreak: {
                pageBreakTitle: 'Dinner Details and Event Location:', 
                pageBreakBackgroundColor: '#002a5c'
            },
            mapCoordinates: {
                center: {
                    lat: 33.65605544419939,
                    lng: -117.86781907081604
                },
                zoom: 14
            },
            companyName: 'Sunpath Financial',
            eventAddress: '100 Bayview Circle, Newport Beach, Ca 92660',
            companyPhone: '949-674-5248',
            companyEmail: 'contact@sunpathfinancial.com',
            eventImagesAlts: {
                eventImageOne: { imgOne: EventImgOne, alt: 'Sunpath Financial Newport Beach Office' },
                eventImageTwo: { imgTwo: EventImgTwo, alt: 'Sunpath Financial Newport Beach Office' },
                eventImageThree: { imgThree: EventImgThree, alt: 'Sunpath Financial Newport Beach Office' },
                eventImageFour: { imgFour: EventImgFour, alt: 'Sunpath Financial Newport Beach Office' }
            },
            locationAndDirections: {
                sectionOne: 'The event will be held at our home office in Newport Beach, off Jamboree and North Bristol Street. From the 405 (North or South Bound) take exit 15 to merge onto the CA-73 S (no toll fee).',
                sectionTwo: 'Exit SE Bristol Street and continnue for 0.5 miles and make a right onto Bayview Place. Turn left on Bayview Circle (first light), and immediately make a right into the parking garage.We will provide you with a validation sticker after the event has concluded.'
            }
        },
        sectionMeetYourPresenter: {
            pageBreak: {
                pageBreakTitle: 'Meet Your Presenter: Million Dollar Advisor, Joshua J. Crowe:', 
                pageBreakBackgroundColor: '#002a5c'
            },
            presenterImg: PresenterImg,
            presenterImgAlt: 'Joshua J. Crowe Owner of Retirement and Wealth Management Firm Sunpath Financial in Newport Beach, Ca',
            presenterBio: {
                bioTitle: 'Owner of Sunpath Financial',
                sectionOne: 'Meet Joshua J. Crowe, The Million Dollar Advisor, founder and owner of Sunpath Financial, Author of \'The Ultimate Guide to Retirement\', Forbes Published and Recognized for Top-25 Retirement Articles.',
                sectionTwo: 'Joshua created the Retirement 5-Core Topic Seminar Series, with the Goal of Helping Future and Current Retirees Make Decisions that Lead to Happy and Fulfilled Retirement, through the Strategic Planning of Their Finances, So They can Spend More Time Living, and Less Time Worrying.',
                sectionThree: 'He has spent the past 15 years in finanace, with 10 years as a tax consultant preparing individual and coporate tax returns. He spent the past 10 years educating retirees on what it means to manage a successful retirement while living a fulfilled one.',
                sectionFour: '"It took me 15 years to realize that a good advisor speaks, but a great advisor listens. Every retiree has a different goal, most are just looking to do the things they dreampt about the past 40 years, but an advisor won\'t know if he/she is not listening.',
                sectionFive: 'Listening to those goals provides us the insight necessary to tailor and manage a plan for you...and if the plan makes sense, so will the retirement, and ultimately you get to spend it doing the things you desire."'
            }
        },
        footer: {
            footerImg: logo,
            backgroundColor: '#002a5c',
            footerDisclosure: 'Disclosure: Sunpath Financial is a Registered Investment Advisory firm (RIA) and insurance broker who specializes in providing financial advice and education, to the general public, on a series of topics including retirement, social security, medicare, and investments. Sunpath Financial, and its constituents, are not associated, sponsored, or in any other way affiliated with any governmental association. The material discussed and covered in their lectures and literatures, may or may not be of their own opinion and may not accurately reflect current or accurate data. Sunpath Financial is not, and does not claim to be, tax professionals, and advises all spectators, readers, and listeners to seek professional tax help when applicable.'
        }
    }

    return (
        <>
            <div className={classes.main}>
                <LandingPageHeader pageInfo={pageInfo.header} />
                <SectionVideoCta pageInfo={pageInfo.sectionVideoCta} />
                <SectionTopicsCovered pageInfo={pageInfo.sectionTopicsCovered} />
                <SectionEventDetails pageInfo={pageInfo.sectionEventDetails} />
                <SectionMeetYourPresenter pageInfo={pageInfo.sectionMeetYourPresenter} />
            </div>
            <footer>
                <LandingPageFooter pageInfo={pageInfo.footer} />
            </footer>
        </>
    )
};

export default SocialSecuritySeminar;