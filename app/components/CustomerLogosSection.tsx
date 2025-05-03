// CustomerLogosSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import './CustomerLogosSection.css';

const imagePaths = [
  '/logobw4.png',
  '/logobw5.png',
  '/logobw6.png',
];

export default function CustomerLogosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="customer-section">
      <div className="left-pane">
        <h2 className="customer-heading">Explore Our Customers→</h2>
        <p className="customer-description">
          Discover how industry leaders use our platform to transform operations, enhance insights, and power smart factories.
        </p>
      </div>
      <div className="right-pane">
        {imagePaths.map((src, index) =>
          index === currentIndex ? (
            <div key={index} className="logo-container visible">
              <div className="logo-wrapper">
                <img src={src} alt={`Customer logo ${index + 1}`} className="logo-image" />
              </div>
              <div className="button-wrapper">
                <button className="try-btn">EXPLORE CUSTOMERS </button>
              </div>
            </div>
          ) : null
        )}
      </div>
      
    </section>
  );
}
