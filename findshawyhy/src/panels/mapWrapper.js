import React from 'react';

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '600px' }}></div>;
    },
    () => true,
);
export default MapWrapper;