import classes from './Contact.module.css';
import LandingPageHeader from '../../components/LandingPages/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPages/Sections/SectionVideoCta/SectionVideoCta';
import SectionCheckupIncludes from '../../components/LandingPages/Sections/SectionCheckupIncludes/SectionCheckupIncludes';
import SectionContactInformation from '../../components/LandingPages/Sections/SectionContactInformation/SectionContactInformation';
import LandingPageFooter from '../../components/LandingPages/Footer/Footer';
import logo from '../../assets/imgs/sunpath-full-logo-no-bg.png';
import RetirementIncomeReport from '../../assets/imgs/retirement-income-report.jpg';
import TaxInflationReport from '../../assets/imgs/tax-report.jpg';
import InvestmentReport from '../../assets/imgs/investment-report.jpg'
import EventImgOne from  '../../assets/imgs/sunpath-financial-100-bayview-circle.jpg';
import EventImgTwo from '../../assets/imgs/newport-bayview-lobby.jpg';
import EventImgThree from '../../assets/imgs/industrious-newport-lounge-one.jpg';
import EventImgFour from '../../assets/imgs/industrious-newport-lounge-two.jpg';
import PresenterImg from '../../assets/imgs/josh-beach.jpg';
import advisorImg from '../../assets/imgs/joshua-crowe-beach-haedshot.png';

const Contact = () => {
    const pageInfo = {
        header: {
            logoImg: logo,
            logoImgAlt: 'Sunpath Social Security Logo',
            backgroundColor: 'black',
            companyPhone: '949-674-5248'
        },
        sectionVideoCta: {
            eventName: 'Start Your Complimentary Retirement Plan with a Licenced Planner',
            eventLocation: '- Discover Your Progress Towards Retirement -',
            companyName: 'Sunpath Financial',
            eventAddress: '',
            formTitle: 'Start Your Complimentary Retirement Checkup!',
            formSubTitle: 'There\'s a correlation between successful, happy, and fulfilled retirees who put a plan in place3, yet only 18% of all current and soon-to-be retirees have one. Don\'t be a statistic, disover your progress towards retirement and get your plan in writing today..',
            heroUrl: 'https://www.youtube.com/embed/nfeWhmYUUY0',
            sendTicketsCheckbox: false,
            ctaButtonText: 'START MY CHECKUP!',
            advisor: {
                
                advisorImg: advisorImg,
                advisorTitle: 'Meet Your Retirement Planner',
                advisorDescription: 'Joshua J. Crowe is a million dollar financial advisor and author, he will help you understand your progress towards retirement, educate you on the common mistakes, and how to overcome them.'
            }
        },
        sectionCheckupIncludes: {
            pageBreak: {
                pageBreakTitle: 'Your Personalized Checkup Will Include:', 
                pageBreakBackgroundColor: 'black'
            },
            checkupIncludes: {
                includesOne: {
                    includesOneTitle: 'Retirement Income Report',
                    includesOneImage: RetirementIncomeReport,
                    includesOneDescription: 'Will your pension, social security, and retirements savings be enough to survive retirement as the cost of inflation and taxes grow.'
                },
                includesTwo: {
                    includesTwoTitle: 'Tax & Inflation Scenarios',
                    includesTwoImage: TaxInflationReport,
                    includesTwoDescription: 'Inflation is expected to reach double digits over the decade, and taxes are soon to follow. Discover how these higher costs will impact your retirement.'
                },
                includesThree: {
                    includesThreeTitle: 'Investment Analysis',
                    includesThreeImage: InvestmentReport,
                    includesThreeDescription: 'How much do you bear to lose or win throughout retirement, are you taking on too much risk, are you too conservative to pace taxes and inflation.'
                },
            }
        },
        sectionContactInformation: {

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
                sectionOne: 'Our meetings are held in our Newport Beach office, off Jamboree and North Bristol Street. From the 405 (North or South Bound) take exit 15 to merge onto the CA-73 S (no toll fee).',
                sectionTwo: 'Exit SE Bristol Street and continnue for 0.5 miles and make a right onto Bayview Place. Turn left on Bayview Circle (first light), and immediately make a right into the parking garage.We will provide you with a validation sticker after the event has concluded.'
            }
        },
        sectionMeetYourPresenter: {
            pageBreak: {
                pageBreakTitle: 'Meet Your Presenter: Million Dollar Advisor, Joshua J. Crowe:', 
                pageBreakBackgroundColor: 'black'
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
            backgroundColor: 'black',
            footerDisclosure: 'Disclosure: Sunpath Financial is a Registered Investment Advisory firm (RIA) and insurance broker who specializes in providing financial advice and education, to the general public, on a series of topics including retirement, social security, medicare, and investments. Sunpath Financial, and its constituents, are not associated, sponsored, or in any other way affiliated with any governmental association. The material discussed and covered in their lectures and literatures, may or may not be of their own opinion and may not accurately reflect current or accurate data. Sunpath Financial is not, and does not claim to be, tax professionals, and advises all spectators, readers, and listeners to seek professional tax help when applicable.'
        }
    }

    return (
        <>
            <div className={classes.main}>
                <LandingPageHeader pageInfo={pageInfo.header} />
                <SectionContactInformation pageInfo={pageInfo.sectionContactInformation} />
            </div>
            <footer>
                <LandingPageFooter pageInfo={pageInfo.footer} />
            </footer>
        </>
    )
};

export default Contact;