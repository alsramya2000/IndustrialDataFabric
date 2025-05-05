'use client';

import { useState , useRef, useEffect} from 'react';
import Image from 'next/image';
import './AdvantagesSection.css';

const advantages = [
  {
    label: 'Cause Clarity',
    color: '#7C4DFF',
    description:
      '🛠️Easily view downtime events segmented into customized categories directly on your dashboard.🛠️',
  },
  {
    label: 'Trend Visibility',
    color: '#E040FB',
    description:
      '📈Dynamic graphs visualize downtime spikes and quiet periods for faster trend recognition.📈',
  },
  {
    label: 'Event Timeline',
    color: '#9575CD',
    description:
      '🕰️Scroll through real-time timelines that animate every downtime occurrence on your site.🕰️',
  },
  {
    label: 'Pattern Detection',
    color: '#7C4DFF',
    description:
      '🔍Our system automatically flags recurring downtime patterns you can act on immediately.🔍',
  },
  {
    label: 'Actionable Insights',
    color: '#E040FB',
    description:
      '🎯Get actionable suggestions embedded within the insights panel for rapid decision-making.🎯',
  },
  {
    label: 'Proactive Response',
    color: '#9575CD',
    description:
      '🚨Receive early warnings and trend alerts to address risks before they escalate.🚨',
  },
  {
    label: 'Visual Simplicity',
    color: '#7C4DFF',
    description:
      '🖼️Seamlessly switch between pie charts, bar graphs, and timelines — all designed for effortless clarity.🖼️',
  },
];

/*
export default function AdvantagesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="advantages-section"
      style={{
        backgroundImage: "url('/background2.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="advantages-wrapper">
        <h2 className="advantages-heading">Unlock Your Operational Edge 🚀</h2>
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="advantage-item"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ color: hovered === index ? adv.color : '#778899' }}
          >
            {adv.label}

            {hovered === index && (
              <div
                className="advantage-box"
                style={{ backgroundColor: adv.color }}
              >
                {adv.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
*/

export default function AdvantagesSection() {
    const [hovered, setHovered] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.3; // 🔥 Slows down the video to 0.5x speed
      }
    }, []);
  
    return (
      <section className="advantages-section relative overflow-hidden">
        {/* Background Video */}
        {/* <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/background_video7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br/><br/><br/> */}
        
  
        {/* Content */}
        <div className="advantages-wrapper relative z-10">
            
          <h2 className="advantages-heading">Still searching?<br/> We’ve got what the others missed🚀</h2>
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="advantage-item"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{ color: hovered === index ? adv.color : '#778899' }}
            >
              {adv.label}
  
              {hovered === index && (
                <div
                  className="advantage-box"
                  style={{ backgroundColor: adv.color }}
                >
                  {adv.description}
                </div>
              )}
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