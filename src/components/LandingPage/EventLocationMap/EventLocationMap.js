import GoogleMapReact from 'google-map-react';
import classes from './EventLocationMap.module.css';


const EventLocationMap = props => {

    console.log(props.mapCoordinates.center)

    const lattitude = props.mapCoordinates.center.lat;
    const longitude = props.mapCoordinates.center.lng;
    const zoom = props.mapCoordinates.zoom;

    console.log(lattitude)

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
                <div className={classes['marker-info__marker']} lat={33.65605544419939} lng={-117.86781907081604}>
                    Sunpath Financial
                </div>
            </GoogleMapReact>
        </div>
    )
}

export default EventLocationMap;