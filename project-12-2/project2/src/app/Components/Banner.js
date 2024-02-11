// components/DynamicBanner.js

import React from 'react';

const Banner = ({ title, description, imageUrl }) => {
  return (
    <div className="dynamic-banner">
      <img src={imageUrl} alt="Banner" />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    
    </div>
  );
};

export default Banner;
