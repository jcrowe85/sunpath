import classes from './Footer.module.css';

const Footer = props => {
    const { footerImg, backgroundColor, footerDisclosure } = props.pageInfo;
    return (
        <footer style={{'backgroundColor' : `${backgroundColor}`}}>
            <div className={`${classes['footer-container']} wrapper`}>
                <div className={classes['footer-container__logo']}><img src={footerImg} /></div>
                <div className={classes['footer-container__disclosure']}>
                    <p>{footerDisclosure}</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;