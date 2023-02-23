import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import Map from "./map";
import MapYandex from "./mapYandex";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack,Button } from '@vkontakte/vkui';

const Address = ({ id, go},props) => {
const getNearestShavyha = ()=>{
    // fetch(`https://catalog.api.2gis.com/3.0/items?q=шаурма&sort_point=${lat},${lon}&key=6eaf2aea-95d4-42f6-895a-8e164bb6fe5f`)
    fetch(`https://search-maps.yandex.ru/v1/?text=Шаурма, Челябинск&type=biz&lang=ru_RU&results=25&apikey=3f8e524b-0022-47d8-a0ff-b9e135e3c473&ll=${lat},${lon}&spn=1,1`)
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
            {/* <Map altitude={lat} longitude={lon}/> */}
           <MapYandex altitude={props.lat} longitude={props.lon}/>
		</Group>
	</Panel>
    )
};



export default Address;