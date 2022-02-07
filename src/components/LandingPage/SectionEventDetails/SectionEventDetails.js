import classes from './SectionEventDetails.module.css';
import PageBreak from '../PageBreak/PageBreak';
import EventLocationMap from '../EventLocationMap/EventLocationMap';

const SectionEventDetails = props => {

    const { pageBreakTitle } = props.pageInfo;

    return (
        <>
            <PageBreak pageBreakTitle={pageBreakTitle} />
            <EventLocationMap />
        </>
    )
};

export default SectionEventDetails;