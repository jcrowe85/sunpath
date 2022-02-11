import classes from './Form.module.css';
import Button from '../LandingPageButton/LandingPageButton';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { customFieldsActions } from '../../../store/custom-fields';
import { registrantActions } from '../../../store/registrant';
import userInput from '../../../hooks/user-input';
import { useEffect } from 'react';
import { sendRegistrantData } from '../../../store/registrant-actions';

const Form = props => {

    //Initialize dispatch method
    const dispatch = useDispatch();

    //Import registrant inputs
    const registrant = useSelector(state => state.registrantReducer);

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
        reset: phoneNumberInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailInput
    } = userInput(value => value.includes('@'));

    const {
        value: enteredFullAddress,
        hasError: fullAddressInputHasError,
        isValid: fullAddressIsValid,
        valueChangeHandler: fullAddressChangeHandler,
        inputBlurHandler: fullAddressBlurHandler,
        reset: addressInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredCityName,
        hasError: cityNameInputHasError,
        isValid: cityNameIsValid,
        valueChangeHandler: cityNameChangeHandler,
        inputBlurHandler: cityNameBlurHandler,
        reset: cityNameInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredStateName,
        hasError: stateNameInputHasError,
        isValid: stateNameIsValid,
        valueChangeHandler: stateNameChangeHandler,
        inputBlurHandler: stateNameBlurHandler,
        reset: stateNameInput
    } = userInput(value => value.trim() !== '');

    const {
        value: enteredZipCode,
        hasError: zipCodeInputHasError,
        isValid: zipCodeIsValid,
        valueChangeHandler: zipCodeChangeHandler,
        inputBlurHandler: zipCodeBlurHandler,
        reset: zipCodeInput
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

    //Dispatch form values to store 'registrants' for cross-component access
    useEffect(() => {
        dispatch(registrantActions.registrantInputs({
            enteredName,
            enteredEmail,
            enteredPhoneNumber,
            enteredFullAddress,
            enteredCityName,
            enteredStateName,
            enteredZipCode
        }))
    }, [enteredName, enteredEmail, enteredPhoneNumber, enteredFullAddress, enteredCityName, enteredStateName, enteredZipCode])

    //Set and validate basic fields, if form inputs are valid set formIsValid: true
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

    //Show custom fields if checkbox is selected, validate custom fields on input
    const customFormFieldsIsActive = useSelector(state => state.customFieldsReducer.isActive)
    
    const showCustomFieldsHandler = () => {
        dispatch(customFieldsActions.toggleCustomFields())
    }

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

    if (formFields.customFields.length >= 1) {
        customForms =
            <div className={classes['custom-form-control']}>
                <input type='checkbox' checked={customFormFieldsIsActive} onChange={showCustomFieldsHandler} id='customFormCheckbox'/>
                <label htmlFor="customFormCheckbox">SEND MY TICKETS</label>
                {customFormFieldsIsActive && customFields}
            </div>
    }

    const submitHandler = (e) => {
        e.preventDefault();

        //Save registrant details to database
        dispatch(sendRegistrantData(registrant));

        //reset form fields
        resetNameInput();
        phoneNumberInput();
        emailInput();
        addressInput();
        cityNameInput();
        stateNameInput();
        zipCodeInput();
        dispatch(customFieldsActions.toggleCustomFields())
    }

    return (
        <form onSubmit={submitHandler}>
            {basicFields}
            {customForms}
            <Button disabled={!basicFormIsValid[0]} />
        </form>
    )
};

export default Form;