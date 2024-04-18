import Image from 'next/image';
import React from 'react';
import styles from './shop.module.css';

const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>Coming Soon!</h1>
        </div>
        <div className={styles.imageContainer}>
        <Image src='/images.png' alt="" fill className={styles.image}/>
        </div>
      </div>
    </div>
  )
}

export default Shop