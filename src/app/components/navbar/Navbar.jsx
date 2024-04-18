import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logo.jpg" alt="logo" fill/>
      </div>
      <div className={styles.links}>
        <p><Link href="/" className={styles.link}>Home</Link></p>
        <p><Link href="/about" className={styles.link}>About</Link></p>
        <p><Link href="/blog" className={styles.link}>Blog</Link></p>
        <p><Link href="/shop" className={styles.link}>Shop Online</Link></p>
      </div>
    </div>
  )
}

export default Navbar