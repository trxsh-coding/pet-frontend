import React, {useContext, useState} from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import ResponsiveContext from "../../Context/responsiveContext";
import markerIcon from '../../Assets/img/placeholder.png'


function ReusableMap({lng}) {
    const [map, setMap] = useState(null)

    let coordinates = {
        lat:Number(lng[0]),
        lng:Number(lng[1])
    }
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(coordinates);
        map.fitBounds(bounds);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const api = process.env.REACT_APP_GOOGLE_API;
    const mobile = useContext(ResponsiveContext);
    const containerStyle = {
        width: mobile ? '100%' : '360px',
        height: '360px'
    };
    return  (

        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={2}
            center={coordinates}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                position={coordinates}
                icon={{
                    url:markerIcon
                }}
            />
        </GoogleMap>
    )
}
export default React.memo(ReusableMap);