import classes from './SectionEventDetails.module.css';
import PageBreak from '../PageBreak/PageBreak';
import EventLocationMap from '../EventLocationMap/EventLocationMap';

const SectionEventDetails = props => {

    const { pageBreakTitle, mapCoordinates: { center, zoom }, companyName, companyPhone, companyEmail, eventAddress, eventImagesAlts: { eventImageOne, eventImageTwo, eventImageThree, eventImageFour } } = props.pageInfo;

    return (
        <>
            <PageBreak pageBreakTitle={pageBreakTitle} />
            <section className={`${classes['section-event-details']} wrapper`} >
                <div className={classes['section-event-details__two-columns']} >
                    <div className={classes['two-columns__col-one']}>
                        <ul className={classes['section-event-details__company-details']}>
                            <li><h1>{companyName}</h1></li>
                            <li>{eventAddress}</li>
                            <li>Phone: {companyPhone}</li>
                            <li>Email: {companyEmail}</li>
                        </ul>
                    </div>
                    <div className={classes['two-columns__col-two']}>



                        <div className={classes['section-event-details__row']} style={{ margin: '0', padding: '0' }}>
                            <div className={classes['two-columns__row-one']} >
                                <img src={eventImageOne.imgOne} alt={eventImageOne.alt} />
                                <img src={eventImageTwo.imgTwo} alt={eventImageTwo.alt} />
                            </div>


                            <div className={classes['two-columns__row-one']} >
                                <EventLocationMap mapCoordinates={{ center, zoom }} />
                            </div>


                            <div className={classes['two-columns__row-two']} >
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