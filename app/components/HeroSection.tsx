'use client';

import styles from './HeroSection.module.css';
import { motion } from "framer-motion";
import AnimatedBackground from './AnimatedBackground'; // ✅ Import background

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* ✅ Animated Background Canvas */}
      <AnimatedBackground />

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.png" alt="Data Destination Logo" style={{ height: '4rem' }} />
        </div>

        <div className={styles['nav-links']}>
          <a href="#" className={styles['nav-link']}>Industries</a>
          <a href="#" className={styles['nav-link']}>Expertise</a>
          <a href="#" className={styles['nav-link']}>Solution</a>
          <a href="#" className={styles['nav-link']}>Download</a>
          <button className={styles['signin-btn']}>Sign In</button>
          <button className={styles['getstarted-btn']}>Get Started</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles['main-content']}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.title}
        >
          Industrial Data Fabric: <br /> Transform Your Industrial IoT Journey 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.subtitle}
        >
          Unlock the full potential of your industrial operations with Industrial Data Fabric — a powerful consulting solution designed to streamline your Industrial IoT journey.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className={styles['try-btn']}
        >
          TRY IT FREE →
        </motion.button>
      </div>

     
    </section>
  );
}
