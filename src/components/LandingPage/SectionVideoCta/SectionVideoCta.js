import classes from './SectionVideoCta.module.css';
import HeroVideo from '../HeroVideo/HeroVideo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SeminarDateTime from '../SeminarDateTime/SeminarDateTime';
import SeminarTickets from '../SeminarTickets/SeminarTickets';
import { useSelector } from 'react-redux';

const SectionVideoCta = props => {

    const { eventName, seminarDateTime, eventLocation, formTitle, dateTimeBox } = props.eventInfo;

    const customFormFieldsIsActive = useSelector(state => state.customFieldsReducer.isActive)

    return (
        <section className={`${classes['section-video-cta']} wrapper`}>
            <div className={classes['section-video-cta__headings']}>
                <h1 className={classes['headings__title']}>{eventName}</h1>
                <h2 className={classes['headings__sub-heading']}>{eventLocation}</h2>
            </div>
            <div className={classes['section-video-cta__two-columns']}>
                <div className={classes['two-columns__col-one']}>
                    <HeroVideo url={props.videoUrl} />
                    <SeminarDateTime dateTime={dateTimeBox} />
                    {customFormFieldsIsActive &&
                        <SeminarTickets
                            seminarDateTime={seminarDateTime} 
                            enteredFormValues={props.enteredFormValues}
                            eventInfo={props.eventInfo} 
                        />}
                </div>
                <div className={classes['two-columns__col-two']}>
                    <RegistrationForm
                        formTitle={formTitle}
                        formFields={props.formFields}
                        seminarDateTime={seminarDateTime} />
                </div>
            </div>
        </section>
    )
};

export default SectionVideoCta;