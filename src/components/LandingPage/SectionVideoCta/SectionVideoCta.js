import { useState } from 'react';
import classes from './SectionVideoCta.module.css';
import HeroVideo from '../HeroVideo/HeroVideo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SeminarDateTime from '../SeminarDateTime/SeminarDateTime';
import SeminarTickets from '../SeminarTickets/SeminarTickets';

const SectionVideoCta = props => {

   
    const [isCustomFieldsActive, setIsCustomFieldsActive] = useState(false);

    const [registrantInfo, setRegistrantInfo] = useState();

    const onAddRegistrantInfo = enteredRegistrantData => {

        setRegistrantInfo({
            enteredName: enteredRegistrantData.enteredName,
            enteredEmail: enteredRegistrantData.enteredEmail,
            enteredPhoneNumber: enteredRegistrantData.enteredPhoneNumber,
            enteredFullAddress: enteredRegistrantData.enteredFullAddress,
            enteredCityName: enteredRegistrantData.enteredCityName,
            enteredStateName: enteredRegistrantData.enteredStateName,
            enteredZipCode: enteredRegistrantData.enteredZipCode
        })
    }

    const { 
        eventName, 
        eventAddress, 
        seminarDateTime, 
        eventLocation, 
        formTitle, 
        dateTimeBox, 
        heroUrl } = props.pageInfo;
    
    const showCustomFieldsHandler = () => {
        setIsCustomFieldsActive(prevState => !prevState)
    }

    return (
        <section className={`${classes['section-video-cta']} wrapper`}>
            <div className={classes['section-video-cta__headings']}>
                <h1 className={classes['headings__title']}>{eventName}</h1>
                <h2 className={classes['headings__sub-heading']}>{eventLocation}</h2>
            </div>
            <div className={classes['section-video-cta__two-columns']}>
                <div className={classes['two-columns__col-one']}>
                    <HeroVideo heroUrl={heroUrl} />
                    <SeminarDateTime dateTime={dateTimeBox} />
                    {isCustomFieldsActive &&
                        <SeminarTickets
                            seminarDateTime={seminarDateTime}
                            eventName={eventName}
                            eventAddress={eventAddress}
                            seminarDateTime={seminarDateTime}
                            registrantInfo={registrantInfo}
                        />}
                </div>
                <div className={classes['two-columns__col-two']}>
                    <RegistrationForm
                        formTitle={formTitle}
                        formFields={props.formFields}
                        seminarDateTime={seminarDateTime}
                        addRegistrantInfo={onAddRegistrantInfo}
                        onShowCustomFields={showCustomFieldsHandler}
                        customFormIsActive={isCustomFieldsActive} />
                </div>
            </div>
        </section>
    )
};

export default SectionVideoCta;