import React from 'react';

const Banner = ({ text, buttonText, buttonLink }) => {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">{text}</p>
        <a href={buttonLink} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 transition duration-300">{buttonText}</a>
      </div>
    </div>
  );
};

export default Banner;
