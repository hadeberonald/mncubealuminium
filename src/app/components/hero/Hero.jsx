import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';
import HeroSlider from '../HeroSlider/HeroSlider'

const Hero = () => {
  const slides = [
    {url: '/1.jpg', title: 'Mncube Aluminium'},
    {url: '/2.jpg', title: 'Mncube Aluminium'},
    {url: '/3.jpg', title: 'Mncube Aluminium'},
    {url: '/4.jpg', title: 'Mncube Aluminium'},
    {url: '/5.jpg', title: 'Mncube Aluminium'}
  ];
  return (
    <div className={styles.container}> 
    <div className={styles.text}>
      <div className={styles.heading}>
        <h1 className={styles.h1}>We are KZN's top aluminium fabrication and installation experts!</h1>
      </div>
      <div className={styles.paragraph}>
        <p className={styles.p}>Check out our latest projects and read up on our blog if you are planning on a home improvement project soon</p>
      </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button1}>
          <Link href="/about">Learn More</Link>
        </div>
        <div className={styles.button2}>
          <Link href="/blog">Visit Blog</Link>
        </div>
      </div>
     <div className={styles.slider}>
      <div className={styles.containerStyles}>
      <HeroSlider slides={slides}/>
      </div>
      </div>
    </div>
  )
}

export default Hero