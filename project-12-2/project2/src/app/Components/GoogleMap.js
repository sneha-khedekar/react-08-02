// components/GoogleMapComponent.js

import React, { useRef, useEffect } from 'react';

const GoogleMap = ({ apiKey }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      initMap();
    });
  }, [apiKey]);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    // Add any additional map initialization code here
  };

  return <div ref={mapRef} className="map-container" style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;
