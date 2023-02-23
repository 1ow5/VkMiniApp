import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import { Button } from '@vkontakte/vkui';
import { element } from 'prop-types';

const MapYandex = (props) => {  
    const defaultState = {
        center: [props.altitude, props.longitude],
        zoom: 15,
      };
      const getNearestShavyha = ()=>{
        fetch(`https://catalog.api.2gis.com/3.0/items?q=шаурма&sort_point=${props.altitude},${props.longitude}&key=rujrts5550`)
        .then(response=>response.json())
        .then(data =>{
            createPlaceMarks(data)
        })
        .catch(error=>{
            console.error(error);
        });
    }   
      const createPlaceMarks= (places)=>{
        let coords =[];
        for (let i = 0; i < places.length; i++) {
            fetch(`https://catalog.api.2gis.com/3.0/items/geocode?q=${places[i].address_name}&fields=items.point&key=rujrts5550`)
            .then(response=>response.json())
            .then(data =>{
                coords.push(data[0].point)
            })
        }
        for (let i = 0; i < coords.length; i++) {
            var placemark = new YMaps.Placemark([coords.lat,element.lon], {}, {
                // Setting the placemark style (circle).
                preset: "islands#circleDotIcon",
                // Setting the placemark color (in RGB format).
                iconColor: '#ff0000'
            });
            defaultState.geoObjects.add(placemark);
        }
      }
      return (
        <div>
            <Button onClick={getNearestShavyha()}>
				Ближайшие шавухи	
            </Button>
            <YMaps>
            <Map style={{height:"500px",width:"100%"}} defaultState={defaultState}>
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