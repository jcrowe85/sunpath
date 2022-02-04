import classes from './SocialSecuritySeminar.module.css';
import LandingPageHeader from '../../components/LandingPage/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';
import userInput from '../../hooks/user-input';

const SocialSecuritySeminar = () => {

    const { value: enteredName, valueChangeHandler: nameChangeHandler } = userInput();

    //Set form fields
    const formFields = [
        {
            id: 'input1',
            eleType: 'input',
            type: 'text',
            name: 'fullName',
            label: '',
            value: enteredName,
            placeholder: 'Your Full Name Here...',
            onChange: nameChangeHandler
        }
    ];

    return (
        <div className={classes['landing-page']}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <SectionVideoCta 
                heading='Social Security Education Event' 
                subHeading=' Hosted In Newport Beach, Miles from the Ocean -' 
                formFields={formFields}
                seminarDateTime='March 10, 2022 16:30:00'
                videoUrl='https://www.youtube.com/embed/MSH9GQUjgII' />
        </div>
    )
};

export default SocialSecuritySeminar;