import classes from './Timer.module.css';
import { useEffect, useState } from 'react';

const Timer = props => {
    //Initial and set countdown timer
    const [timer, setTimer] = useState([]);

    useEffect(() => {

        setInterval(() => {

            const eventDate = new Date(props.seminarDateTime).getTime();

            const todaysDate = new Date().getTime();

            const timeToExpiration = eventDate - todaysDate;

            const daysToExpiration = Math.floor(timeToExpiration / (1000 * 60 * 60 * 24));

            const hoursToExpiration = Math.floor(((timeToExpiration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

            const minutesToExpiration = Math.floor(((timeToExpiration % (1000 * 60 * 60)) / (1000 * 60)));

            const secondsToExpiration = Math.floor(((timeToExpiration % (1000 * 60)) / (1000)));

            setTimer(prevState => {
                return {
                    ...prevState,
                    daysToExpiration,
                    hoursToExpiration,
                    minutesToExpiration,
                    secondsToExpiration
                }
            })

        }, 1000);

        return () => clearInterval();

    }, [setInterval]);
    
    return (
        <div className={classes.timer}>
            <div>
                <div>{timer.daysToExpiration}</div>
                <div>DAYS</div>
            </div>
            <div>
                <div>{timer.hoursToExpiration}</div>
                <div>HOURS</div>
            </div>
            <div>
                <div>{timer.minutesToExpiration}</div>
                <div>MINUTES</div>
            </div>
            <div>
                <div>{timer.secondsToExpiration}</div>
                <div>SECONDS</div>
            </div>
        </div>
    )
};

export default Timer;