// FeatureTilesSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './FeatureTilesSection.css';

const features = [
  {
    id: 1,
    title: 'Connect Everything',
    description: 'Seamlessly pull data from OPC-UA, Modbus, MQTT, SQL, and REST APIs.',
    cta: '→ View Supported Protocols',
    bg: 'blue-tile',
  },
  {
    id: 2,
    title: 'One View for All Operations',
    description: 'Monitor machines, processes, and teams in real time from one screen.',
    cta: '→ Explore Live Dashboards',
    bg: 'orange-tile',
  },
  {
    id: 3,
    title: 'Unlock KPIs That Matter',
    description: 'Instantly track OEE, MTTR, MTBF, and performance metrics.',
    cta: '→ Try KPI Demo',
    bg: 'purple-tile',
  },
  {
    id: 4,
    title: 'Pinpoint Downtime',
    description: 'Identify and address failures with timeline-based analysis.',
    cta: '→ See Downtime Tracker',
    bg: 'yellow-tile',
  },
  {
    id: 5,
    title: 'Fix Before It Fails',
    description: 'AI-powered alerts and maintenance planning from trend data.',
    cta: '→ Learn Predictive Models',
    bg: 'red-tile',
  },
  {
    id: 6,
    title: 'Built for Your Factory',
    description: 'Tailored connectors, UI, and cloud integration with AWS IoT.',
    cta: '→ Browse Integration Options',
    bg: 'green-tile',
  },
];

export default function FeatureTilesSection() {
  return (
    <section className="feature-layout">
      <div className="feature-sidebar">
        <h1>Explore Your Industrial Edge</h1>
        <p>Unlock operational intelligence through real-time dashboards, predictive insights, and seamless integrations—all in one platform.</p>
        <ul>
          <li>🔌 Data Ingestion & Device Connectivity</li>
          <li>📊 Unified Dashboards</li>
          <li>📈 Smart KPI Insights</li>
          <li>⚙️ Predictive Maintenance</li>
          <li>🧠 Root Cause & Timeline Analysis</li>
          <li>🛠️ Custom Integrations with AWS</li>
        </ul>
      </div>

      <div className="feature-tiles">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={`feature-tile ${feature.bg}`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="tile-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="cta-bar">
        <button className="cta-primary fancy-hover">
  {'Buy Now on AWS Marketplace→'.split('').map((char, i) => (
    <span
      key={i}
      className="char3d"
      style={{ transitionDelay: `${i * 40}ms` }}
    >
      {char === ' ' ? ' ' : char}
    </span>
  ))}

</button>

        {/* <div className="cta-options">
          <button className="cta-secondary filled">Talk to an Expert<span className="arrow">→</span></button>
          <button className="cta-secondary">Get an Enterprise Trial<span className="arrow">→</span></button>
        </div> */}
      </div>
</section>
  );
}
