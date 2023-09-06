import classes from './LandingPageHeader.module.css';
import { Link } from 'react-router-dom';

const LandingPageHeader = props => {
    const { logoImg, logoImgAlt, companyPhone, backgroundColor } = props.pageInfo;
    return (
        <div className={classes.header} style={{'backgroundColor' : `${backgroundColor}`}}>
            <div className={`${classes.navigation} wrapper `}>
                <Link to='/'><div className={classes['navigation__logo']}><img src={logoImg} alt={logoImgAlt} /></div></Link>
                <div className={classes['navigation__help']}>Need Help? {companyPhone}</div>
            </div>
        </div>
    )
};

export default LandingPageHeader;