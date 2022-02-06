import { propTypes } from 'react-bootstrap/esm/Image';
import classes from './LandingPageButton.module.css';

const LandingPageButton = props => {
    return (
        <button className={classes.landingPageButton} disabled={props.disabled}>
            <i className="fas fa-arrow-right" style={{margin: '.5rem'}}></i>
            RESERVE MY SEAT NOW
        </button>
    )
};

export default LandingPageButton;