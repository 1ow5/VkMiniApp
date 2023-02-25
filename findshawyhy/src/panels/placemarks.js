import { Placemark} from '@pbe/react-yandex-maps';

const Placemarks = (props) => {  
    
      const createPlaceMarks= (places)=>{
        let Places =[];
        for (let i = 0; i < places.length; i++) {
            Places.push(places[i])
            console.log(Places[i].coordinates)
        }
        return Places
      }
      return (
        <div>
             {createPlaceMarks(props.places).map(() =>
                 <Placemark geometry={[geometry.coordinates[0],geometry.coordinates[1]]}/>
             )}
       </div>      
      );
};
export default Placemarks