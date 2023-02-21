import { load } from '@2gis/mapgl';
// or const { load } = require('@2gis/mapgl');
import MapWrapper from './mapWrapper';
import React,{ useEffect } from 'react';

const Map = (props) => {    
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [props.altitude, props.longitude],
                zoom: 10,
                key: '',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <MapWrapper/>
        </div>
    );
};
export default Map