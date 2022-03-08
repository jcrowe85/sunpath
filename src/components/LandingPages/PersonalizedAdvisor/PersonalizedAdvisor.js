import classes from './PersonalizedAdvisor.module.css';

const PersonalizedAdvisor = props => {

    const { advisorTitle, advisorImg, advisorDescription } = props.advisor;

    return (
        <div className={classes['personalized-advisor']}>
            <img src={advisorImg} alt="" />
            <div>
                <h2>{advisorTitle}</h2>
                <p>{advisorDescription}</p>
            </div>
        </div>
    )
};

export default PersonalizedAdvisor;