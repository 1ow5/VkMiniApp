import { Placemark} from '@pbe/react-yandex-maps';

const Placemarks = async (props) => {      
    let Places = props.places;
      return (
        <div>
             {await Places.map((place) =>{
                <Placemark geometry={[place.geometry.coordinates[1],place.geometry.coordinates[0]]}/>
              }              
             )}
       </div>      
      );
};
export default Placemarks