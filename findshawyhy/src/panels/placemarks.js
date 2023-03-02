import { Placemark} from '@pbe/react-yandex-maps';

const Placemarks =(props) => {      
    let Places = props.places;
    console.log(Places,props.places);
      return (
        <div>
             {props.places.map((place) =>{
                <Placemark geometry={[place.geometry.coordinates[1],place.geometry.coordinates[0]]}/>
              }              
             )}
       </div>      
      );
};
export default Placemarks