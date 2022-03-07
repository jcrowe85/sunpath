import Form from '../../UI/Form/Form';
import Timer from '../Timer/Timer';
import classes from './RegistrationForm.module.css';

const RegistrationForm = props => {

    const { formFields, addRegistrantInfo, onShowCustomFields, customFormIsActive, seminarDateTime } = props;

    return (
        <div className={classes['registration-form']}>
            <h2>{props.formTitle}</h2>
            {seminarDateTime && <Timer seminarDateTime={seminarDateTime} />}
            <Form
                formFields={formFields}
                addRegistrantInfo={addRegistrantInfo}
                showCustomFields={onShowCustomFields}
                customFormIsActive={customFormIsActive} />
        </div>
    )
};

export default RegistrationForm;