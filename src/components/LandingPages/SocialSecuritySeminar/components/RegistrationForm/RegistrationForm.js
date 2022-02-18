import Form from '../../../../UI/Form/Form';
import Timer from '../Timer/Timer';
import classes from './RegistrationForm.module.css';

const RegistrationForm = props => {
    return (
        <div className={classes['registration-form']}>
            <h2>{props.formTitle}</h2>
            <Timer seminarDateTime={props.seminarDateTime} />
            <Form
                formFields={props.formFields}
                addRegistrantInfo={props.addRegistrantInfo}
                showCustomFields={props.onShowCustomFields}
                customFormIsActive={props.customFormIsActive} />
        </div>
    )
};

export default RegistrationForm;