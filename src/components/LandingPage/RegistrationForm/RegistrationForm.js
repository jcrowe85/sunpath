import Form from '../../UI/Form/Form';
import Timer from '../Timer/Timer';

const RegistrationForm = props => {
    return (
        <>
            <h2>{props.formTitle}</h2>
            <Timer seminarDateTime={props.seminarDateTime}/>
            <Form formFields={props.formFields} />
        </>
    )
};

export default RegistrationForm;