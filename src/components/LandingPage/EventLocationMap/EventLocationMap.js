import GoogleMapReact from 'google-map-react';
import classes from './EventLocationMap.module.css';

const EventLocationMap = () => {
    const defaultProps = {
        center: {
            lat: 33.65605544419939,
            lng: -117.86781907081604
        },
        zoom: 14
    };
    return (
        <div className={classes['map-container']}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAANRoCIxUdSCS_NScvyo07GrYOW8By2wA' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}>
                    <div className={classes['marker-info__marker']} lat={33.65605544419939} lng={-117.86781907081604}>
                        Sunpath Financial
                    </div>
            </GoogleMapReact>
        </div>
    )
}

export default EventLocationMap;