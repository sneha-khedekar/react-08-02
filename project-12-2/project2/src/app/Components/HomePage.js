
import Banner from './Banner';
import Accordion from './Accordion';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const faqData = [
    {
      question: 'What is Next.js?',
      answer: 'Next.js is a React framework for building server-side rendered and statically generated web applications.',
    },
    {
      question: 'How does Next.js differ from Create React App?',
      answer: 'Create React App is a tool to create React applications quickly, while Next.js is a framework built on top of React that adds features like server-side rendering, static site generation, and routing.',
    },
    {
      question: 'What are the benefits of using Next.js?',
      answer: 'Next.js offers benefits such as improved performance, better SEO, built-in routing, server-side rendering, static site generation, and support for TypeScript and CSS modules.',
    },
  ];
  return (
    <div>
      <Banner
        title="welcome"
        description='Discover amazing things here!'
        imageUrl='https://images3.alphacoders.com/165/165265.jpg' // Path to your banner image
      />
      <div className="main-content">
      <Accordion items={faqData} />
      </div>
    </div>
  )
}

export default HomePage