// CustomerLogosSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomerLogosSection.css';
import AnimatedBackground from './AnimatedBackground';

const imagePaths = [
  '/logobw4.png',
  '/logobw5.png',
  '/logobw6.png'
];

export default function CustomerLogosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="customer-section blended-bg">
      <div className="left-pane">
        <AnimatedBackground />
        <div className="logo-wrapper">
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Customer logo ${index + 1}`}
              className={`logo-image ${index === currentIndex ? 'visible' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="right-pane blended-panel">
        <div className="text-content">
          <h2>Fueling the future of industrial intelligence.</h2>
          <p>From agile innovators to energy giants,</p>
          <p>we empower every step of the digital transformation journey.</p>
          <motion.button whileHover={{ scale: 1.05 }} className="cta-button try-btn">
            MEET OUR CUSTOMERS →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
