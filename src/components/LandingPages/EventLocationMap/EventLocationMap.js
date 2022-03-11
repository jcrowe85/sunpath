import GoogleMapReact from 'google-map-react';
import classes from './EventLocationMap.module.css';


const EventLocationMap = props => {
    const locationName = props.mapCoordinates.locationName;
    const lattitude = props.mapCoordinates.center.lat;
    const longitude = props.mapCoordinates.center.lng;
    const zoom = props.mapCoordinates.zoom;

    const defaultProps = {
        center: {
            lat: lattitude,
            lng: longitude
        },
        zoom: zoom
    };
    return (
        <div className={classes['map-container']}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAANRoCIxUdSCS_NScvyo07GrYOW8By2wA' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}>
                <div className={classes['marker-info__marker']} lat={defaultProps.center.lat} lng={defaultProps.center.lng}>
                    {locationName}
                </div>
            </GoogleMapReact>
        </div>
    )
}

export default EventLocationMap;