import Header from '../../../components/LandingPages/SocialSecuritySeminar/components/Header/LandingPageHeader';
import Footer from '../../../components/LandingPages/SocialSecuritySeminar/components/Footer/Footer';
import logo from '../../../assets/imgs/sunpath-social-security-logo.png';
import classes from './ThankYou.module.css';
import HeroVideo from '../../../components/LandingPages/SocialSecuritySeminar/components/HeroVideo/HeroVideo';

const ThankYou = () => {

    const pageInfo = {
        sectionVideoCta: {
            eventName: 'Maximize Your Social Secuirty Benefit & Reduce Your Retirement Taxes',
            eventLocation: '- A Complimentary Dinner Event in Newport Beach -',
            seminarDateTime: 'March 3, 2022 18:30:00',
            companyName: 'Sunpath Financial',
            eventAddress: '100 Bayview Circle, Newport Beach, Ca 92660',
            formTitle: 'Reserve Your Seat Now!',
            dateTimeBox: 'Thursday, February 24th @ 6:30PM PST',
            heroUrl: 'https://www.youtube.com/embed/YGun04JPH4o',
        },
        header: {
            logoImg: logo,
            logoImgAlt: 'Sunpath Social Security Logo',
            companyPhone: '949-674-5248'
        },
        footer: {
            footerImg: logo,
            footerDisclosure: 'Disclosure: Sunpath Financial is a Registered Investment Advisory firm (RIA) and insurance broker who specializes in providing financial advice and education, to the general public, on a series of topics including retirement, social security, medicare, and investments. Sunpath Financial, and its constituents, are not associated, sponsored, or in any other way affiliated with any governmental association. The material discussed and covered in their lectures and literatures, may or may not be of their own opinion and may not accurately reflect current or accurate data. Sunpath Financial is not, and does not claim to be, tax professionals, and advises all spectators, readers, and listeners to seek professional tax help when applicable.'
        }
    }

    return (
        <>
            <div className={classes.main}>
                <Header pageInfo={pageInfo.header} />
                <section className={`${classes['section-video-cta']} wrapper`}>
                    <div className={classes['section-video-cta__headings']}>
                        <h1 className={classes['headings__title']}>Thank You for Registering!</h1>
                        <h2 className={classes['headings__sub-heading']}>Your Tickets Will Arrive Via Email and Mail</h2>
                    </div>
                    <HeroVideo heroUrl={pageInfo.sectionVideoCta.heroUrl}/>
                </section>
            </div>
            <div className={classes.footer}>
                <Footer pageInfo={pageInfo.footer} />
            </div>

        </>
    )
}

export default ThankYou;