import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import Placemarks from './placemarks';
import { useState } from 'react';

let places=[];

const MapYandex = (props) => {  
    const [fetchedUser, setUser] = useState(false);
    const defaultState = {
        center: [props.altitude, props.longitude],
        zoom: 15,
      };
      const getNearestShavyha = (lat,lon)=>{
        if(!fetchedUser){
            
            fetch(`https://search-maps.yandex.ru/v1/?text=Шаурма Челябинск&type=biz&lang=ru_RU&apikey=c92adce5-d74d-4080-ad6e-784664d8dab4&ll=${lat},${lon}&spn=0.5,0.5&results=20`)
            .then(response=> response.json())
            .then(data =>{
                for(let i=0;i< data.features.length;i++){
                    places.push(data.features[i])
                }           
                console.log(places)
            })
            .catch(error=>{
                console.error(error);
            });            
            setUser(true);
        }
    }   
      return(
            <YMaps onLoad={getNearestShavyha(props.altitude,props.longitude)}>
            <Map style={{height:"500px",width:"100%"}} defaultState={defaultState}>
                {places.map((place) =>{
                    <Placemark geometry={[place.geometry.coordinates[1],place.geometry.coordinates[0]]}/>
                })}
                <Placemark geometry={[props.altitude, props.longitude]}  />
                <GeolocationControl options={{ float: "left" }} />
                <RouteButton options={{ float: "right" }} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>       
      );
};
export default MapYandex