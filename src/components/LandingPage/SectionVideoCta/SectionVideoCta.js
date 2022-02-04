import classes from './SectionVideoCta.module.css';
import { useEffect, useState } from 'react';
import LandingPageForm from '../../UI/Forms/LandingPageForm/LandingPageForm';

const SectionVideoCta = () => {

    const [timer, setTimer] = useState([]);

    useEffect(() => {

        setInterval(() => {

            const eventDate = new Date('February 10, 2022 16:30:00').getTime();

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
        <section className={classes.sectionVideoCta}>
            <h1 className={classes.title}>Social Security Education Event</h1>
            <h2 className={classes.sub_heading}>- Hosted In Newport Beach, Miles from the Ocean -</h2>
            <div className={classes.two_columns}>
                <div className={classes.col_one}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MSH9GQUjgII"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className={classes.col_two}>
                    <h2>Reserve Your Seat Today!</h2>
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
                    <LandingPageForm formFields={{ inputType: 'select' }} />
                </div>
            </div>
        </section>
    )
};

export default SectionVideoCta;