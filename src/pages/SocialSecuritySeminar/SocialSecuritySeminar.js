import classes from './SocialSecuritySeminar.module.css';
import LandingPageHeader from '../../components/LandingPage/Header/LandingPageHeader';
import SectionVideoCta from '../../components/LandingPage/SectionVideoCta/SectionVideoCta';
import logo from '../../assets/imgs/sunpath-social-security-logo.png';
import userInput from '../../hooks/user-input';
import SectionTopicsCovered from '../../components/LandingPage/SectionTopicsCovered/SectionTopicsCovered';

const SocialSecuritySeminar = () => {

    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredPhoneNumber,
        hasError: phoneNumberInputHasError,
        isValid: phoneNumberIsValid,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = userInput(value => value.includes('@'));

    const {
        value: enteredFullAddress,
        hasError: fullAddressInputHasError,
        isValid: fullAddressIsValid,
        valueChangeHandler: fullAddressChangeHandler,
        inputBlurHandler: fullAddressBlurHandler
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredCityName,
        hasError: cityNameInputHasError,
        isValid: cityNameIsValid,
        valueChangeHandler: cityNameChangeHandler,
        inputBlurHandler: cityNameBlurHandler
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredStateName,
        hasError: stateNameInputHasError,
        isValid: stateNameIsValid,
        valueChangeHandler: stateNameChangeHandler,
        inputBlurHandler: stateNameBlurHandler
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredZipCode,
        hasError: zipCodeInputHasError,
        isValid: zipCodeIsValid,
        valueChangeHandler: zipCodeChangeHandler,
        inputBlurHandler: zipCodeBlurHandler
    } = userInput(value => value.trim() !== '');

    //Set form fields
    const formFields = {
            basicFields: [
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
                    type: 'phone',
                    name: 'phoneNumber',
                    label: '',
                    value: enteredPhoneNumber,
                    placeholder: 'Your Phone Number Here...',
                    isValid: phoneNumberIsValid,
                    isInvalid: phoneNumberInputHasError,
                    onBlur: phoneNumberBlurHandler,
                    onChange: phoneNumberChangeHandler,
                },
                {
                    id: 'input3',
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
            ],
            customFields: [
                {
                    id: 'customInput1',
                    eleType: 'input',
                    type: 'text',
                    name: 'fullAddress',
                    label: '',
                    value: enteredFullAddress,
                    placeholder: 'Your Full Address...',
                    isValid: fullAddressIsValid,
                    isInvalid: fullAddressInputHasError,
                    onBlur: fullAddressBlurHandler,
                    onChange: fullAddressChangeHandler,
                },
                {
                    id: 'customInput2',
                    eleType: 'input',
                    type: 'text',
                    name: 'cityName',
                    label: '',
                    value: enteredCityName,
                    placeholder: 'Your City Name...',
                    isValid: cityNameIsValid,
                    isInvalid: cityNameInputHasError,
                    onBlur: cityNameBlurHandler,
                    onChange: cityNameChangeHandler,
                },
                {
                    id: 'customInput3',
                    eleType: 'input',
                    type: 'text',
                    name: 'state',
                    label: '',
                    value: enteredStateName,
                    placeholder: 'Your State Name...',
                    isValid: stateNameIsValid,
                    isInvalid: stateNameInputHasError,
                    onBlur: stateNameBlurHandler,
                    onChange: stateNameChangeHandler,
                },
                {
                    id: 'customInput4',
                    eleType: 'input',
                    type: 'text',
                    name: 'zipCode',
                    label: '',
                    value: enteredZipCode,
                    placeholder: 'Your Zip Code...',
                    isValid: zipCodeIsValid,
                    isInvalid: zipCodeInputHasError,
                    onBlur: zipCodeBlurHandler,
                    onChange: zipCodeChangeHandler,
                },
            ],
        };

    return (
        <div className={classes['landing-page']}>
            <LandingPageHeader image={logo} alt='Sunpath Social Security Logo' />
            <SectionVideoCta
                heading='Social Security Education Event'
                subHeading='- Hosted In Newport Beach, Miles from the Ocean -'
                formTitle='Reserve Your Seat Now!'
                formFields={formFields}
                seminarDateTime='March 10, 2022 16:30:00'
                dateTimeBox='Thursday, September 30th @ 6:30PM PST'
                videoUrl='https://www.youtube.com/embed/MSH9GQUjgII' />
            <SectionTopicsCovered 
                pageBreakTitle='TOPICS WE&apos;LL COVER DURING THIS EVENT:'/>
        </div>
    )
};

export default SocialSecuritySeminar;