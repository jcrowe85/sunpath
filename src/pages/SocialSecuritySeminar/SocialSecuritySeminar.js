import classes from './SocialSecuritySeminar.module.css';
import LandingPageHeader from '../../components/LandingPage/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';


const SocialSecuritySeminar = () => {

    return (
        <div className={classes.landing_page}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <SectionVideoCta />
        </div>
    )
};

export default SocialSecuritySeminar;