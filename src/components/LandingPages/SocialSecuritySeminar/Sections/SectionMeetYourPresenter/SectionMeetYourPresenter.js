import classes from './SectionMeetYourPresenter.module.css';
import PageBreak from '../../../../UI/PageBreak/PageBreak';

const SectionMeetYourPresenter = props => {

    const { pageBreakTitle, presenterImg, presenterImgAlt, presenterBio: { bioTitle, sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive } } = props.pageInfo;

    return (
        <>
            <PageBreak pageBreakTitle={pageBreakTitle} />
            <section className={`${classes['section-meet-your-presenter']} wrapper`} >
                <div className={classes['section-meet-your-presenter__two-columns']} >
                    <div className={classes['two-columns__col-one']}>
                        <img src={presenterImg} alt={presenterImgAlt} />
                    </div>
                    <div className={classes['two-columns__col-two']}>
                        <h1>{bioTitle}</h1>
                        <p>
                            {sectionOne}
                        </p>
                        <p>
                            {sectionTwo}
                        </p>
                        <p>
                            {sectionThree}
                        </p>
                        <p>
                            {sectionFour}
                        </p>
                        <p>
                            {sectionFive}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SectionMeetYourPresenter;