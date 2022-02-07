import classes from './SocialSecuritySeminar.module.css';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';
import LandingPageHeader from '../../components/LandingPage/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import SectionTopicsCovered from '../../components/LandingPage/SectionTopicsCovered/SectionTopicsCovered';
import SectionEventDetails from '../../components/LandingPage/SectionEventDetails/SectionEventDetails';

const SocialSecuritySeminar = () => {

    const pageInfo = {
        sectionVideoCta: {
            eventName: 'Social Security Dinner Event',
            seminarDateTime: 'March 10, 2022 16:30:00',
            eventLocation: '- Hosted In Newport Beach, Miles from the Ocean -',
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
                    topicOneUrl: 'https://www.youtube.com/embed/Gp_aL5swiJQ'
                },
                topicTwo: {
                    topicTwoTitle: 'Breakeven Analysis',
                    topicTwoUrl: 'https://www.youtube.com/embed/j5uUYJDkfFg',
                },
                topicThree: {
                    topicThreeTitle: 'Claiming Spousal Benefit',
                    topicThreeUrl: 'https://www.youtube.com/embed/VFhOsAH8rRE'
                },
            }
        },
        sectionEventDetails: {
            pageBreakTitle: 'Details For this Event:'
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