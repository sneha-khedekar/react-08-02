import React from 'react';

const Footer = ({ columns }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center">
          {columns.map((column, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul>
                {column.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the Footer component
