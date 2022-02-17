import classes from './PageBreak.module.css';

const PageBreak = props => {
    return (
        <div className={classes['page-break']}>
            <h1>{props.pageBreakTitle}</h1>
        </div>
    )
};

export default PageBreak;