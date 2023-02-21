import React, { useState } from "react";
import Map from "./map";
import bridge from '@vkontakte/vk-bridge';


const Demo = () => {
    const [[lat,lon,acc], setGeo] = useState([0,0,0]);
    bridge.send('VKWebAppGetGeodata')
    .then((data) => { 
        if (data.available) {
            setGeo([data.lat,data.long,data.accuracy])
        }
    })
    .catch((error) => {
        console.log(error);        
    });   
    return (
        // <Map altitude={lat} longitude={long}/>
        <div>{lat+"+"+lon+"+"+acc}</div>
    )
};

export default Demo;