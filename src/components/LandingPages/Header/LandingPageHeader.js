import classes from './LandingPageHeader.module.css';

const LandingPageHeader = props => {
    const { logoImg, logoImgAlt, companyPhone, backgroundColor } = props.pageInfo;
    return (
        <header style={{'backgroundColor' : `${backgroundColor}`}}>
            <div className={`${classes.navigation} wrapper `}>
                <div className={classes['navigation__logo']}><img src={logoImg} alt={logoImgAlt} /></div>
                <div className={classes['navigation__help']}>Need Help? {companyPhone}</div>
            </div>
        </header>
    )
};

export default LandingPageHeader;