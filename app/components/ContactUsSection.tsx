// ContactUsSection.tsx
'use client';

import React from 'react';
import './ContactUsSection.css';

export default function ContactUsSection() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-column">
        <h4>Products</h4>
        <ul>
          <li>AI</li>
          <li>Enterprise</li>
          <li>Fluid Compute</li>
          <li>Next.js</li>
          <li>Observability</li>
          <li>Previews</li>
          <li>Rendering</li>
          <li>Security</li>
          <li>Turbo</li>
          <li>v0 ↗</li>
        </ul>
      </div>
      <div className="contact-column">
        <h4>Resources</h4>
        <ul>
          <li>Community ↗</li>
          <li>Docs</li>
          <li>Guides</li>
          <li>Help</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Solution Partners</li>
          <li>Startups</li>
          <li>Templates</li>
        </ul>
      </div>
      <div className="contact-column">
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Changelog</li>
          <li>Contact Us</li>
          <li>Customers</li>
          <li>Partners</li>
          <li>Privacy Policy</li>
          <li>Legal ▾</li>
        </ul>
      </div>
      <div className="contact-column">
        <h4>Social</h4>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </section>
  );
}
