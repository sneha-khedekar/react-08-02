import React from 'react'

const FAQ = ({ faqs }) => {
    return (
      <div className="max-w-lg mx-auto">
        {faqs.map((faq, index) => (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4" key={index}>
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  };

export default Faq