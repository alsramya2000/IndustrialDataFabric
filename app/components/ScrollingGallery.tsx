'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './ScrollingGallery.css';

const topImages = [
  '/charts/ss21.png',
  '/charts/ss22.png',
  '/charts/ss23.png',
  '/charts/ss24.png',
  '/charts/ss25.png',
  '/charts/ss26.png',
];

const bottomImages = [
  '/charts/ss27.png',
  '/charts/ss29.png',
  '/charts/ss30.png',
  '/charts/ss31.png',
  '/charts/ss32.png',
  '/charts/ss33.png',
];

export default function ScrollingGallery() {



  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (row: HTMLDivElement | null, direction: 'left' | 'right') => {
      if (!row) return;
      let scrollAmount = 0;

      const scroll = () => {
        if (direction === 'left') {
          scrollAmount += 1;
          row.scrollLeft = scrollAmount;
        } else {
          scrollAmount -= 1;
          row.scrollLeft = Math.abs(scrollAmount);
        }

        if (scrollAmount > row.scrollWidth / 2) scrollAmount = 0;
        if (scrollAmount < -row.scrollWidth / 2) scrollAmount = 0;

        requestAnimationFrame(scroll);
      };

      scroll();
    };

    animateRow(topRowRef.current, 'left');
    animateRow(bottomRowRef.current, 'right');
  }, []);

  return (
    <section className="gallery-section">
        <div className="gallery-description">
        <h2 className="gallery-heading">Downtime Reason Tracker</h2>
        <p className="gallery-subtext">
            Gain instant visibility into production disruptions with our Downtime Reason Tracker.
            Through interactive charts and timeline views, quickly identify root causes,
            spot patterns, and drive proactive improvements across your operations.
        </p>
        </div>
      {/* Top Row */}
      <div ref={topRowRef} className="scroll-row">
        {[...topImages, ...topImages].map((src, index) => (
          <div key={`top-${index}`} className="image-wrapper">
            <Image src={src} alt={`Top ${index}`} fill className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div ref={bottomRowRef} className="scroll-row reverse">
        {[...bottomImages, ...bottomImages].map((src, index) => (
          <div key={`bottom-${index}`} className="image-wrapper">
            <Image src={src} alt={`Bottom ${index}`} fill className="gallery-image" />
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </section>
  );
}
