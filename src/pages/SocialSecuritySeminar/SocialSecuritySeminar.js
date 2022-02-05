import classes from './SocialSecuritySeminar.module.css';
import LandingPageHeader from '../../components/LandingPage/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';
import userInput from '../../hooks/user-input';

const SocialSecuritySeminar = () => {

    const { 
        value: enteredName, 
        hasError: nameInputHasError,
        isValid: nameIsValid,
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler  
    } = userInput(value => value.trim() !== '');

    const { 
        value: enteredEmail, 
        hasError: emailInputHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler  
    } = userInput(value => value.includes('@'));

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
            isValid: nameIsValid,
            isInvalid: nameInputHasError,
            onBlur: nameBlurHandler,
            onChange: nameChangeHandler,
        },
        {
            id: 'input2',
            eleType: 'input',
            type: 'email',
            name: 'email',
            label: '',
            value: enteredEmail,
            placeholder: 'Your Email Here...',
            isValid: emailIsValid,
            isInvalid: emailInputHasError,
            onBlur: emailBlurHandler,
            onChange: emailChangeHandler,
        }
    ];

    return (
        <div className={classes['landing-page']}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <SectionVideoCta 
                heading='Social Security Education Event' 
                subHeading=' Hosted In Newport Beach, Miles from the Ocean -'
                formTitle='Reserve Your Seat Now!' 
                formFields={formFields}
                seminarDateTime='March 10, 2022 16:30:00'
                videoUrl='https://www.youtube.com/embed/MSH9GQUjgII' />
        </div>
    )
};

export default SocialSecuritySeminar;