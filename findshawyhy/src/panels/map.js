import { load } from '@2gis/mapgl';
// or const { load } = require('@2gis/mapgl');
import MapWrapper from './mapWrapper';
import React,{ useEffect } from 'react';

const Map = (props) => {
    const [altitude,longitude] = props;
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [altitude, longitude],
                zoom: 13,
                key: '6eaf2aea-95d4-42f6-895a-8e164bb6fe5f',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
export default Map