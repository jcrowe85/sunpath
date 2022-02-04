import classes from './HeroVideo.module.css';

const HeroVideo = props => {
    return (
        <div className={classes['video-container']} >
            <iframe src={`${props.url}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
        </div>
    )
};

export default HeroVideo;