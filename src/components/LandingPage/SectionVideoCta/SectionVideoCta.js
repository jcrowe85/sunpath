import classes from './SectionVideoCta.module.css';
import HeroVideo from '../HeroVideo/HeroVideo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const SectionVideoCta = props => {
    return (
        <section className={`${classes['section-video-cta']} wrapper`}>
            <div className={classes['section-video-cta__headings']}>
                <h1 className={classes['headings__title']}>{props.heading}</h1>
                <h2 className={classes['headings__sub-heading']}>{props.subHeading}</h2>
            </div>
            <div className={classes['section-video-cta__two-columns']}>
                <div className={classes['two-columns__col-one']}>
                    <HeroVideo url={props.videoUrl} />
                </div>
                <div className={classes['two-columns__col-two']}>
                    <RegistrationForm
                        title='Reserve Your Seat Now!'
                        formFields={props.formFields}
                        seminarDateTime={props.seminarDateTime} />
                </div>
            </div>
        </section>
    )
};

export default SectionVideoCta;