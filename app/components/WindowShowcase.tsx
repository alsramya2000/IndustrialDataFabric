'use client';

import { useRef, useState } from "react";
import styles from './WindowShowcase.module.css';
import { AnimatePresence, motion } from "framer-motion";


export default function WindowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  const videos = [
    "scr/screenrecording1.mov",
    "scr/screenrecording2.mov"
  ];

  const handleSwitch = (index: number) => {
    setActiveIndex(index);

    const videoEl = videoRefs[index].current;
    if (videoEl) {
      videoEl.currentTime = 0;
      videoEl.play();
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.glow}></div>

      <div className={styles.textContent}>
        <h1>Unified Data Ingestion</h1>
        <p>Industrial Data Fabric seamlessly integrates with your existing industrial systems, offering a comprehensive data management solution.</p>
      </div>

      <div className={styles.borderWrapper}>
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            <AnimatePresence mode="wait">
                <motion.video
                key={activeIndex}
                ref={videoRefs[activeIndex]}
                src={videos[activeIndex]}
                autoPlay
                loop
                muted
                playsInline
                className={styles.windowImage}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </AnimatePresence>
            </div>

        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button
          onClick={() => handleSwitch(0)}
          className={activeIndex === 0 ? styles.activeButton : styles.button}
        >
          MONITOR
        </button>
        <button
          onClick={() => handleSwitch(1)}
          className={activeIndex === 1 ? styles.activeButton : styles.button}
        >
          SERVER
        </button>
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
