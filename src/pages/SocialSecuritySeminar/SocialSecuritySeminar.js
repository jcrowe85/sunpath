import classes from './SocialSecuritySeminar.module.css';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';
import LandingPageHeader from '../../components/LandingPage/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import SectionTopicsCovered from '../../components/LandingPage/SectionTopicsCovered/SectionTopicsCovered';
import SectionEventDetails from '../../components/LandingPage/SectionEventDetails/SectionEventDetails';
import RmdTaxImg from '../../assets/imgs/ira-tax-rmd.jpg';
import LifetimeTax from '../../assets/imgs/slash-lifetime-tax.jpg';
import ProtectAssets from '../../assets/imgs/protect-investments.jpg';
import EventImgOne from '../../assets/imgs/sunpath-financial-100-bayview-circle.jpg';
import EventImgTwo from '../../assets/imgs/sunpath-conference-room.jpg';
import EventImgThree from '../../assets/imgs/sunpath-financial-newport-beach-office.jpg';
import EventImgFour from '../../assets/imgs/sunpath-financial-100-bayview-circle-office-building.jpg';

const SocialSecuritySeminar = () => {

    const pageInfo = {
        sectionVideoCta: {
            eventName: 'Learn How to Maximize Your Social Secuirty Benefit & Reduce Your Taxes',
            eventLocation: '- A Complimentary Dinner Event in Newport Beach -',
            seminarDateTime: 'March 10, 2022 16:30:00',
            companyName: 'Sunpath Financial',
            eventAddress: '100 Bayview Circle, Newport Beach, Ca 92660',
            formTitle: 'Reserve Your Seat Now!',
            dateTimeBox: 'Thursday, September 30th @ 6:30PM PST',
            heroUrl: 'https://www.youtube.com/embed/MSH9GQUjgII',
        },
        sectionTopicsCovered: {
            pageBreakTitle: 'TOPICS WE\'LL COVER DURING THIS EVENT:',
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
            pageBreakTitle: 'Dinner Details and Event Location:',
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
                eventImageOne: {imgOne: EventImgOne, alt: 'Sunpath Financial Newport Beach Office'},
                eventImageTwo: {imgTwo: EventImgTwo, alt: 'Sunpath Financial Newport Beach Office'},
                eventImageThree: {imgThree: EventImgThree, alt: 'Sunpath Financial Newport Beach Office'},
                eventImageFour: {imgFour: EventImgFour, alt: 'Sunpath Financial Newport Beach Office'}
            }
        }
    }

    return (
        <div className={classes['landing-page']}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <SectionVideoCta pageInfo={pageInfo.sectionVideoCta} />
            <SectionTopicsCovered pageInfo={pageInfo.sectionTopicsCovered} />
            <SectionEventDetails pageInfo={pageInfo.sectionEventDetails} />
        </div>
    )
};

export default SocialSecuritySeminar;