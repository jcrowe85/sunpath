import classes from './LandingPageHeader.module.css';

const LandingPageHeader = props => {
    return (
        <header>
            <div className={`${classes.navigation} wrapper`}>
                <div className={classes['navigation__logo']}><img src={props.image} alt={props.alt} /></div>
                <div className={classes['navigation__help']}>Need Help? 949-674-5248</div>
            </div>
        </header>
    )
};

export default LandingPageHeader;