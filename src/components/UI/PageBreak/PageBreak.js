import classes from './PageBreak.module.css';

const PageBreak = props => {

    const { pageBreakTitle, pageBreakBackgroundColor } = props.pageBreak;

    return (
        <div className={classes['page-break']} style={{'backgroundColor' : `${pageBreakBackgroundColor}`}}>
            <h1>{pageBreakTitle}</h1>
        </div>
    )
};

export default PageBreak;