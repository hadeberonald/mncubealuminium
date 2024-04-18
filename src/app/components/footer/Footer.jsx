import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.upperContainer}>
            <div className={styles.left}>
            <div className={styles.subhead}>
                <h4>Quick Links</h4>
            </div>
            <div className={styles.links}>
                <p className={styles.p}>About</p>
                <p className={styles.p}>Frequently Asked Questions</p>
                <p className={styles.p}>Blogs</p>
                <p className={styles.p}>Privacy Policy</p>
            </div>
            </div>
            <div className={styles.right}>
            <div className={styles.subhead}>
                <h4>Socials</h4>
            </div>
            <div className={styles.socials}>
                <div className={styles.imageContainer}>
                    <Image src="/fb.png" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/ig.png" alt="" fill className={styles.image}/>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>Copyright © Mncube Aluminium & Glass Pty &#40;Ltd&#41;</p> 
        </div>
    </div>
  )
}

export default Footer