import classes from './SectionEventDetails.module.css';
import PageBreak from '../PageBreak/PageBreak';
import EventLocationMap from '../EventLocationMap/EventLocationMap';

const SectionEventDetails = props => {

    const { pageBreakTitle, mapCoordinates: { center, zoom }, companyName, companyPhone, companyEmail, eventAddress, eventImagesAlts: { eventImageOne, eventImageTwo, eventImageThree, eventImageFour}, locationAndDirections: { sectionOne, sectionTwo}  } = props.pageInfo;

    return (
        <>
            <PageBreak pageBreakTitle={pageBreakTitle} />
            <section className={`${classes['section-event-details']} wrapper`} >
                <div className={classes['section-event-details__two-columns']} >
                    <div className={classes['two-columns__col-one']}>
                        <div className={classes['section-event-details__company-details']}>
                            <h1>{companyName}</h1>
                            <p>
                                <span style={{display: 'block'}}>{eventAddress}</span>
                                <span style={{display: 'block'}}>Phone: {companyPhone}</span>
                                <span style={{display: 'block'}}>Email: {companyEmail}</span>
                            </p>
                        </div>
                        <h2>Join us for Dinner and Open Bar</h2>
                        <p>
                            You are cordially invited to join us for a complimentary dinner. Seating is limited
                            for social distancing purposes and the safety of our guest.
                        </p>
                        <p>
                            Registrations fill up quickly,
                            so you'll want to RSVP by completing the form at the top of this page immediately.
                        </p>
                        <p>
                            Dinner includes a choice of chicken or steak, two to three sides, and dessert.
                            Drinks include beer, wine, soda, and both sparkline and regular water.
                        </p>
                        <h2>Location and Directions</h2>
                        <p>
                            {sectionOne}
                        </p>
                        <p>
                            {sectionTwo}
                        </p>
                    </div>
                    <div className={classes['two-columns__col-two']}>
                        <div className={classes['section-event-details__row']} style={{ margin: '0', padding: '0' }}>
                            <div className={classes['two-columns__row-one']} >
                                <img src={eventImageOne.imgOne} alt={eventImageOne.alt} />
                                <img src={eventImageTwo.imgTwo} alt={eventImageTwo.alt} />
                            </div>
                            <div className={classes['two-columns__row-two']} >
                                <EventLocationMap mapCoordinates={{ center, zoom }} />
                            </div>
                            <div className={classes['two-columns__row-three']} >
                                <img src={eventImageThree.imgThree} alt={eventImageThree.alt} />
                                <img src={eventImageFour.imgFour} alt={eventImageOne.alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SectionEventDetails;