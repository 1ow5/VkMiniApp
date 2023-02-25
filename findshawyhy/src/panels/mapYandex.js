import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import Placemarks from './placemarks';
import { useState } from 'react';

const MapYandex = (props) => {  
    const [fetchedUser, setUser] = useState(false);
    const defaultState = {
        center: [props.altitude, props.longitude],
        zoom: 15,
      };
      const getNearestShavyha = (lat,lon)=>{
        if(!fetchedUser){
            fetch(`https://search-maps.yandex.ru/v1/?text=Шаурма Челябинск&type=biz&lang=ru_RU&apikey=c92adce5-d74d-4080-ad6e-784664d8dab4&ll=${lat},${lon}&spn=0.5,0.5`)
            .then(response=>{return response.json()})
            .then(data =>{
                console.log(data);
                // 55.1878656 долгота:61.3810176
            })
            .catch(error=>{
                console.error(error);
            });
            setUser(true);
        }
        console.log(lat,lon);
    }   
      return (
        <div>
            <YMaps>
            <Map onLoad={getNearestShavyha(props.altitude,props.longitude)} style={{height:"500px",width:"100%"}} defaultState={defaultState}>
                {/* <Placemarks places={getNearestShavyha()}/> */}
                <Placemark geometry={[props.altitude, props.longitude]}  />
                <GeolocationControl options={{ float: "left" }} />
                <RouteButton options={{ float: "right" }} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>
        </div>
        
      );
};
export default MapYandex