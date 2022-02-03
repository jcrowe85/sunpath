import classes from './SocialSecuritySeminar.module.css';
import Layout from '../Layout/Layout';
import LandingPageHeader from '../../components/Navbar/LandingPageHeader';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';

const SocialSecuritySeminar = () => {
    return (
        <div className={classes['landing-page']}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <section className={`${classes.one}`}>
                <h1>Social Security Education Event</h1>
                <h2>- Hosted In Newport Beach, Miles from Ocean</h2>
                <div className={classes['two-columns']}>
                    <div>Something here</div>
                    <div>Something here</div>
                </div>
            </section>
        </div>
    )
};

export default SocialSecuritySeminar;