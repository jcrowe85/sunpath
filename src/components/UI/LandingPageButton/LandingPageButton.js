import { propTypes } from 'react-bootstrap/esm/Image';
import classes from './LandingPageButton.module.css';

const LandingPageButton = props => {
    return (
        <button className={classes.landingPageButton} disabled={props.disabled}>RESERVE MY SEAT NOW</button>
    )
};

export default LandingPageButton;