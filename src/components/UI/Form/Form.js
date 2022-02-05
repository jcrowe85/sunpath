import { useState } from 'react';
import classes from './Form.module.css';
import Button from '../LandingPageButton/LandingPageButton';
import Input from '../Input/Input';

const Form = props => {

    const [showCustomForms, setShowCustomForms] = useState(false)

    //Import field object from props
    const formFields = props.formFields;

    //Set and validate basic fields
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

    //Set and validate custom fields
    const showCustomFieldsHandler = () => {
        setShowCustomForms(prevState => !prevState)
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

    let customForms;

    if (formFields.customFields.length >= 1) {
        customForms =
            <div className={classes['custom-forms']}>
                <input type='checkbox' onChange={showCustomFieldsHandler} id='customFormCheckbox'/>
                <label htmlFor="customFormCheckbox">Deliver My Tickets</label>
                {showCustomForms && customFields}
            </div>
    }

    const submitHandler = (e) => {
        e.preventDefault();
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