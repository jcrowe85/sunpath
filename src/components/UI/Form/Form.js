import Button from '../LandingPageButton/LandingPageButton';
import { useState } from 'react';
import Input from '../Input/Input';

const Form = props => {

    const [formIsValid, setFormIsValid] = useState(false);

    const formFields = props.formFields;

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