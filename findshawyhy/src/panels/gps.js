import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import MapYandex from "./mapYandex";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack,Button } from '@vkontakte/vkui';
import { shape } from "prop-types";

const Gps = ({ id, go}) => {
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
    <Panel id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={go} data-to="home"/>}>
            НайдиШавуху
        </PanelHeader>
		<Group header={<Header mode="secondary">Ваши координаты</Header>}>
			<Div>
                <Title level='3'>Ищем вас на картах широта:{lat} долгота:{lon} погрешность {Math.floor(acc/1000)}км</Title>
			</Div>
           <MapYandex altitude={lat} longitude={lon}/>
		</Group>
	</Panel>
    )
};

export default Gps;