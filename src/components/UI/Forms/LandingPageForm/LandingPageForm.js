import classes from './LandingPageForm.module.css';
import Button from '../../LandingPageButton/LandingPageButton';
import { useState } from 'react';

const LandingPageForm = props => {

    const [formIsValid, setFormIsValid] = useState(false);

    const formFields = props.formFields;

    switch (formFields.inputType) {
        case 'input':
            console.log('input');
            break;
        case 'select':
            console.log('select')
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
        {/* <div className={classes.form_control}>
            <label htmlFor="fullName"></label>
            <input type="text" id="fullName"/>
        </div> */}
    
        <Button disabled={!formIsValid}/>
    </form>
    )
};

export default LandingPageForm;