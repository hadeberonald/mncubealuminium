import React from 'react';
import styles from '../aboutHero/aboutHero.module.css';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.p}>"As the founder of Mncube Aluminium & Glass specializing in aluminium windows and doors, I believe that we're not just craftsmen; we're architects of possibility. Each frame we forge isn't just a boundary; it's a canvas for dreams to unfold. Our doors aren't mere entrances; they're gateways to a world of security and style. Precision and passion define our work, ensuring every installation embodies excellence. We understand that in every window and door lies the potential to transform spaces and elevate experiences. This isn't just fabrication; it's a commitment to shaping the future, one aluminum masterpiece at a time."</p>
        <div className={styles.detail}>
          <div className={styles.imageContainer}>
            <Image src="/IMG-20240403-WA0010.jpg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.text}>
          <p className={styles.pdetail1}>Mr. Mncube</p>
          <p className={styles.pdetail}><i>- Managing Director </i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero