import classes from './SectionEventDetails.module.css';
import PageBreak from '../../../UI/PageBreak/PageBreak';
import EventLocationMap from '../../EventLocationMap/EventLocationMap';
import ADV from '../../../../assets/docs/adv.pdf';

const SectionContactInformation = props => {

    const { pageBreak, mapCoordinates: { center, zoom }, companyName, companyPhone, companyEmail, eventAddress, eventImagesAlts: { eventImageOne, eventImageTwo, eventImageThree, eventImageFour }, locationAndDirections: { sectionOne, sectionTwo } } = props.pageInfo;

    return (
        <>
            {pageBreak && <PageBreak pageBreak={pageBreak} />}
            <section className={`${classes['section-event-details']} wrapper`} >
                <div className={classes['section-event-details__two-columns']} >
                    <div className={classes['two-columns__col-one']}>
                        <div className={classes['section-event-details__company-details']}>
                            <h1>{companyName}</h1>
                            <p>
                                <span style={{ display: 'block' }}>{eventAddress}</span>
                                <span style={{ display: 'block' }}>Phone: {companyPhone}</span>
                                <span style={{ display: 'block' }}>Email: {companyEmail}</span>
                            </p>
                        </div>
                        <p>CRD #: 312343, SEC BrokerCheck <a href="https://adviserinfo.sec.gov/firm/summary/312343">link</a>, California License #: 6004991, California License Check <a href="https://cdicloud.insurance.ca.gov/cal/LicenseDetail">link</a>.</p>

                        <h2>Sunpath Financial Products and Services</h2>
                        <p>
                            Sunpath Financial operates as a Registered Investment Advisor under the State of California and SEC. We hold ourselves to the fiduciary standard, to provide our prospects and clients with conflict-free advise.
                        </p>
                        <p>
                            Our services includes retirement and tax planning, wealth and asset management, and insurance advise under Sunpath Financial & Insurance Group. You can read more about the firm and it's filing via our ADV by clicking here: <a href={ADV}>Sunpath's ADV</a>
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

export default SectionContactInformation;