import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import Map from "./map";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack,Button } from '@vkontakte/vkui';

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
const getNearestShavyha = ()=>{
    fetch(`https://catalog.api.2gis.com/3.0/items?q=шаурма&sort_point=${lat},${lon}&key=6eaf2aea-95d4-42f6-895a-8e164bb6fe5f`)
    .then(response=>response.json())
    .then(data =>{
        console.log(data)
    })
    .catch(error=>{
        console.error(error);
    });
}    
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
            <Button onClick={getNearestShavyha()}>
				Ближайшие шавухи	
            </Button>
            <Map altitude={lat} longitude={lon}/>
		</Group>
	</Panel>
    )
};



export default Gps;