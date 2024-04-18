import React from 'react';
import styles from './aboutSection.module.css';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}><h2>Our Recent Projects</h2></div>
      <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/IMG-20240403-WA0008.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>
            Sgubudu Community Hall
            </h3>
            <div className={styles.para}>
              <p>
            Mncube Aluminium & Glass undertook the exciting project of fabricating and installing windows and glazing at Sgubudu Community Hall located as Sandlwana, Nquthu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/IMG-20240403-WA0009.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>
          KwaHlabisa Community Hall
            </h3>
            <div className={styles.para}>
              <p>
          Located at KwaHlabisa, Mncube Aluminium & Glass also had the pleasure of partaking in the construction project of KwaHlabisa Community Hall. This project consisted of window installation and glazing.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutSection