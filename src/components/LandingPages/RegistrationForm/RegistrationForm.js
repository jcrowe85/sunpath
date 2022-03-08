import Form from '../../UI/Form/Form';
import Timer from '../Timer/Timer';
import classes from './RegistrationForm.module.css';

const RegistrationForm = props => {

    const { formFields, addRegistrantInfo, onShowCustomFields, customFormIsActive, seminarDateTime, sendTicketsCheckbox, ctaButtonText, formSubTitle } = props;

    return (
        <div className={classes['registration-form']}>
            <h2>{props.formTitle}</h2>
            <p className={classes['registration-form__sub-title']}>{formSubTitle}</p>
            {seminarDateTime && <Timer seminarDateTime={seminarDateTime} />}
            <Form
                formFields={formFields}
                addRegistrantInfo={addRegistrantInfo}
                showCustomFields={onShowCustomFields}
                customFormIsActive={customFormIsActive}
                sendTicketsCheckbox={sendTicketsCheckbox}
                ctaButtonText={ctaButtonText} />
        </div>
    )
};

export default RegistrationForm;