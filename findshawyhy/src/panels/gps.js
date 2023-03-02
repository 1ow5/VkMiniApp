import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import MapYandex from "./mapYandex";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack,Button } from '@vkontakte/vkui';
import { shape } from "prop-types";



const Gps = ({ id, go}) => {
    const [[lat,lon,acc], setGeo] = useState([0,0,0]);
    const [fetchedUser, setUser] = useState(false);
    const [userData, setUserData]= useState('');
    bridge.send('VKWebAppGetGeodata')
    .then((data) => { 
        if (data.available) {
            setGeo([data.lat,data.long,data.accuracy]);
            geocoding();
        }
    })
    .catch((error) => {
        console.log(error);        
    });
    let geocoding = ()=>{
        if(!fetchedUser){
            fetch(`https://geocode-maps.yandex.ru/1.x/?&geocode=${lon},${lat}&apikey=2fd87198-7275-49f7-b2e8-9697b0331bfc&format=json&results=1`)
            .then(response=>{return response.json()})
            .then(data =>{
                console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject);
                setUserData(data.response.GeoObjectCollection.featureMember[0].GeoObject);
            })
            .catch(error=>{
                console.error(error);
            });
            setUser(true);
        }
            
    }
       
 
	return (
    <Panel  id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={go} data-to="home"/>}>
            НайдиШавуху
        </PanelHeader>
		<Group header={<Header mode="secondary">Ваши местоположение?</Header>}>
			<Div>
                <Title level='3'>вы находитесь: {userData.name} {userData.description}</Title>
                <Button size="l" mode="secondary" onClick={go} data-to="byAddres" style={{ marginBottom: 16, width:"100%" }}>Да</Button>
                <Button size="l" mode="secondary" onClick={go} data-to="byAddres" style={{ marginBottom: 16, width:"100%" }}>Нет</Button>
			</Div>
		</Group>
	</Panel>
    )
};

export default Gps;