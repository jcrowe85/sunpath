import classes from './SectionTopicsCovered.module.css';
import PageBreak from '../../../../UI/PageBreak/PageBreak';

const SectionTopicsCovered = props => {

    //Section title and Video urls
    const { pageBreak, videoInfo } = props.pageInfo;

    const {
        topicOne: { topicOneTitle, topicOneUrl, topicOneDescription },
        topicTwo: { topicTwoTitle, topicTwoUrl, topicTwoDescription },
        topicThree: { topicThreeTitle, topicThreeUrl, topicThreeDescription },
        topicFour: { topicFourTitle, topicFourImage, topicFourDescription },
        topicFive: { topicFiveTitle, topicFiveImage, topicFiveDescription },
        topicSix: { topicSixTitle, topicSixImage, topicSixDescription }

    } = videoInfo;

    return (
        <>
            <PageBreak pageBreak={pageBreak} />
            <section className={`${classes['section-topics-covered']} wrapper`}>
                <div className={classes['section-topics-covered__three-column']}>
                    <div>
                        <h2>{topicOneTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicOneUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>{topicOneDescription}</p>
                    </div>
                    <div>
                        <h2>{topicTwoTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicTwoUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>{topicTwoDescription}</p>
                    </div>
                    <div>
                        <h2>{topicThreeTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicThreeUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>{topicThreeDescription}</p>
                    </div>
                </div>
                <div className={classes['section-topics-covered__three-column']}>
                    <div>
                        <h2>{topicFourTitle}</h2>
                        <div className={classes['video-container']} >
                            <img src={topicFourImage}/>
                        </div>
                        <p>{topicFourDescription}</p>
                    </div>
                    <div>
                        <h2>{topicFiveTitle}</h2>
                        <div className={classes['video-container']} >
                        <img src={topicFiveImage}/>
                        </div>
                        <p>{topicFiveDescription}</p>
                    </div>
                    <div>
                        <h2>{topicSixTitle}</h2>
                        <div className={classes['video-container']} >
                        <img src={topicSixImage}/>
                        </div>
                        <p>{topicSixDescription}</p>
                    </div>
                </div>

            </section>
        </>
    )
};

export default SectionTopicsCovered;