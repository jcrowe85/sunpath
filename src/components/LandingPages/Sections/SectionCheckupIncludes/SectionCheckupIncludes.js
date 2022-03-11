import classes from './SectionCheckupIncludes.module.css';
import PageBreak from '../../../UI/PageBreak/PageBreak';


const SectionCheckupIncludes = props => {

    const { pageBreak, checkupIncludes } = props.pageInfo;

    const {
        includesOne: { includesOneTitle, includesOneImage, includesOneDescription },
        includesTwo: { includesTwoTitle, includesTwoImage, includesTwoDescription },
        includesThree: { includesThreeTitle, includesThreeImage, includesThreeDescription },
    } = checkupIncludes;


    return (
        <>
            <PageBreak pageBreak={pageBreak} />
            <section className={`${classes['section-topics-covered']} wrapper`}>
                <div className={classes['section-topics-covered__three-column']}>
                    <div>
                        <h2>{includesOneTitle}</h2>
                        <div className={classes['video-container']} >
                            <img src={includesOneImage} />
                        </div>
                        <p>{includesOneDescription}</p>
                    </div>
                    <div>
                        <h2>{includesTwoTitle}</h2>
                        <div className={classes['video-container']} >
                            <img src={includesTwoImage} />
                        </div>
                        <p>{includesTwoDescription}</p>
                    </div>
                    <div>
                        <h2>{includesThreeTitle}</h2>
                        <div className={classes['video-container']} >
                            <img src={includesThreeImage} />
                        </div>
                        <p>{includesThreeDescription}</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SectionCheckupIncludes;