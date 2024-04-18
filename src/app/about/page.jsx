import React from 'react';
import styles from './about.module.css';
import AboutHero from '../components/aboutHero/AboutHero';
import AboutSection from '../components/aboutSection/AboutSection';
import Contact from '../components/contact/Contact';

const page = () => {
  return (
    <div className={styles.container}>
        <AboutHero/>
        <AboutSection/>
        <Contact/>
    </div>
  )
}

export default page