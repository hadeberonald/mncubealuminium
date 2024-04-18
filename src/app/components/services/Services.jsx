import React from 'react';
import styles from './services.module.css';
import Image from 'next/image';

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>WHAT DO WE DO?</h2>
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src="/diy.png" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.subhead}>
            <h4>Fabrication and installation for:</h4>
          </div>
          <div className={styles.list}>
            <ul>
              <li>Aluminium windows</li>
              <li>Hinged and sliding aluminium doors</li>
              <li>Glazing for all types of windows</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src="/welding.png" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.subhead}>
            <h4>We also do...</h4>
          </div>
          <div className={styles.list}>
            <ul>
              <li>Custom-built aluminium home improvement products</li>
              <li>Custom steelwork for burglar guards, gates, etc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services