import React from "react";
import { useGeolocated } from "react-geolocated";
import Map from "./map";
import bridge from '@vkontakte/vk-bridge';

let lat=50;
let long=50;
const Demo = () => {
    bridge.send('VKWebAppGetGeodata')
    .then((data) => { 
        if (data.available) {
            lat = data.altitude
            long = data.longitude
        }
    })
    .catch((error) => {
        console.log(error);        
    });   
    return (
        <Map altitude={lat} longitude={long}/>
    )
};

export default Demo;