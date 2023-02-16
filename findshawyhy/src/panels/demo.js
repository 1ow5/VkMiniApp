import React from "react";
import { useGeolocated } from "react-geolocated";
import Map from "./map";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });    
    return !isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) : !isGeolocationEnabled ? (<div>Geolocation is not enabled</div> ) : coords ? (
    <div id="1">
        <Map altitude={coords.latitude} longitude={coords.longitude}/>
        {/* latitude={coords.latitude} longitude={coords.longitude} */}
         <table>
            <tbody>
            <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
            </tbody>
        </table>
    </div>
       
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;