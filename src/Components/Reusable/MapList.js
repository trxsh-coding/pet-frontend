import React, {useContext, useState} from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import ResponsiveContext from "../../Context/responsiveContext";
import markerIcon from '../../Assets/img/placeholder.png'


function ReusableMap({cords, items, action, width, height}) {
    const [map, setMap] = useState(null)



    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(cords)
        map.fitBounds(bounds);
        const listener = window.google.maps.event.addListener(map, "idle", function() {
            if (map.getZoom() > 16) map.setZoom(16);
            window.google.maps.event.removeListener(listener);
        });
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const RenderMarkerList = () => items.map( (el) => {
        let coordinates = {
            lat:Number(el.position[0]),
            lng:Number(el.position[1])
        }
        return (
            <Marker
                position={coordinates}
                onClick={() => action(el.id)}

                icon={{
                    url:markerIcon
                }}
            />
        )
    })

    const containerStyle = {
        width: width ? width : '100%',
        height: height ? height : '50%'
    };
    return  (

        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={100}
            center={cords}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <RenderMarkerList />
        </GoogleMap>
    )
}
export default React.memo(ReusableMap);