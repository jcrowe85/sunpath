import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import classes from './Form.module.css';
import userInput from '../../../hooks/user-input';
import Button from '../LandingPageButton/LandingPageButton';
import Input from '../Input/Input';
import emailjs, { init } from "@emailjs/browser";


const Form = props => {

    const navigate = useNavigate();

    //use params to get event location
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const eventLocation = searchParams.get('location');

    //Form inputs and validations
    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredPhoneNumber,
        hasError: phoneNumberInputHasError,
        isValid: phoneNumberIsValid,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumberInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = userInput(value => value.includes('@'));

    const {
        value: enteredFullAddress,
        hasError: fullAddressInputHasError,
        isValid: fullAddressIsValid,
        valueChangeHandler: fullAddressChangeHandler,
        inputBlurHandler: fullAddressBlurHandler,
        reset: resetAddressInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredCityName,
        hasError: cityNameInputHasError,
        isValid: cityNameIsValid,
        valueChangeHandler: cityNameChangeHandler,
        inputBlurHandler: cityNameBlurHandler,
        reset: resetCityNameInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredStateName,
        hasError: stateNameInputHasError,
        isValid: stateNameIsValid,
        valueChangeHandler: stateNameChangeHandler,
        inputBlurHandler: stateNameBlurHandler,
        reset: resetStateNameInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredZipCode,
        hasError: zipCodeInputHasError,
        isValid: zipCodeIsValid,
        valueChangeHandler: zipCodeChangeHandler,
        inputBlurHandler: zipCodeBlurHandler,
        reset: resetZipCodeInput
    } = userInput(value => value.trim() !== '');

    //Form fields
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
            },
            {
                id: 'input4',
                eleType: 'input',
                type: 'hidden',
                name: 'eventLocation',
                value: eventLocation,
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

    useEffect(() => {
        props.addRegistrantInfo({
            enteredName,
            enteredEmail,
            enteredPhoneNumber,
            enteredFullAddress,
            enteredCityName,
            enteredStateName,
            enteredZipCode,
            eventLocation
        });
    }, [
        enteredName,
        enteredEmail,
        enteredPhoneNumber,
        enteredFullAddress,
        enteredCityName,
        enteredStateName,
        enteredZipCode,
        eventLocation
    ])

    //Initialize and validate basic fields, set form to valid if there are no errors
    let basicFormIsValid = Object.keys(formFields).map((key, index) => {
        return formFields[key].every(field => field.isValid === true)
    })

    const basicFields = Object.keys(formFields).map((key, index) => {
        if (key === 'basicFields') {
            return formFields[key].map(field => {
                if (field.eleType === 'input') {
                    return (
                        <Input
                            key={field.id}
                            type={field.type}
                            name={field.name}
                            label={field.label}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            isInvalid={field.isInvalid}
                        />
                    )
                };
            })
        }
    });

    //Show custom fields if checkbox is checked and validate inputs
    const customFields = Object.keys(formFields).map((key, index) => {
        if (key === 'customFields') {
            return formFields[key].map(field => {
                if (field.eleType === 'input') {
                    return (
                        <Input
                            key={field.id}
                            type={field.type}
                            name={field.name}
                            label={field.label}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            isInvalid={field.isInvalid}
                        />
                    )
                };
            })
        }
    });

    //Show custom fields if array is not empty
    let customForms;

    if (props.sendTicketsCheckbox || props.sendTicketsCheckbox === undefined) {
        customForms =
            <div className={classes['custom-form-control']}>
                <input type='checkbox' checked={props.customFormIsActive} onChange={props.showCustomFields} id='customFormCheckbox' />
                <label htmlFor="customFormCheckbox">SEND MY TICKETS</label>
                {props.customFormIsActive && customFields}
            </div>
    }

    //initialize email js to email lead info
    (function () {
        emailjs.init("-NlWC3XQtQ2WM2mIsE1By");
    })();

    //submit registrant info to email js
    const submitHandler = (e) => {
        e.preventDefault();
        const templateParams = {
            fullName: enteredName,
            email: enteredEmail,
            phone: enteredPhoneNumber,
        }

        emailjs.send("service_2clswrb", "template_5hrqdac", templateParams, "5NG10HmgPEnSFu_2C")
            .then(function (response) {
                alert("Your email was sent! We will send you email and text notifications leading up to the event. Thank you for choosing Sunpath Financial.")
                //Reset form fields
                resetNameInput();
                resetEmailInput();
                resetAddressInput();
                resetPhoneNumberInput();
                resetCityNameInput();
                resetStateNameInput();
                resetZipCodeInput();
                props.showCustomFields();

                //Redirect to thank you page
                navigate(`/`);
            }, function (error) {
                alert("There was an error sending your email", error)
            });
    }

    // async function saveRegistrant() {
    //     try {
    //         const response = await fetch('https://sunpath-ad580-default-rtdb.firebaseio.com/registrants.json', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 enteredName,
    //                 enteredEmail,
    //                 enteredPhoneNumber,
    //                 enteredFullAddress,
    //                 enteredCityName,
    //                 enteredStateName,
    //                 enteredZipCode,
    //                 eventLocation
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //         });
    //         const data = await response.json();

    //         if (!response.ok) {
    //             throw new Error(data.message || 'Count not save registrant to database')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     saveRegistrant();

    //     //Reset form fields
    //     resetNameInput();
    //     resetEmailInput();
    //     resetAddressInput();
    //     resetPhoneNumberInput();
    //     resetCityNameInput();
    //     resetStateNameInput();
    //     resetZipCodeInput();
    //     props.showCustomFields();

    //     //Redirect to thank you page
    //     navigate(`${location.pathname}/thank-you`);

    // }

    return (
        <form onSubmit={submitHandler}>
            {basicFields}
            {customForms}
            <Button disabled={!basicFormIsValid[0]} ctaButtonText={props.ctaButtonText} />
        </form>
    )
};

export default Form;