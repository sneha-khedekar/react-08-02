// components/Accordion.js

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || !Array.isArray(items) || items.length === 0) {
    return <div>No items provided for the accordion</div>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-title" onClick={() => toggleAccordion(index)}>
            {item.question}
            <span className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}>
              &#9660;
            </span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
