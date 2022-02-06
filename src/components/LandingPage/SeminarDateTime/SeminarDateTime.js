import { propTypes } from 'react-bootstrap/esm/Image';
import classes from './SeminarDateTime.module.css';

const SeminarDateTime = props => {
    return (
        <div className={classes['date-time-box']}>
            <h1>
                <i className="fa fa-calendar" aria-hidden="true" style={{ margin: '0 1rem' }}></i>
                {props.dateTime}
            </h1>
        </div>
    )
};

export default SeminarDateTime;