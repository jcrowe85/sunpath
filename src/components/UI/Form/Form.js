import Button from '../LandingPageButton/LandingPageButton';
import { useState } from 'react';
import Input from '../Input/Input';

const Form = props => {

    //Set and validate form fields from props
    const formFields = props.formFields;

    console.log(props.formFields[0])

    let formIsValid = formFields.every(field => field.isValid === true);

    const fields = formFields.map(field => {
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

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            {/* <div className={classes.form_control}>
            <label htmlFor="fullName"></label>
            <input type="text" id="fullName"/>
        </div> */}
            {fields}
            <Button disabled={!formIsValid} />
        </form>
    )
};

export default Form;