import React from 'react';
import styles from "../bloghero/bloghero.module.css";
import Image from "next/image";

const Bloghero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.h1}>Keep up with our latest blogs!</h1>
            <p className={styles.para}>BAFCO is invested in your business success, that's what motivates us to keep you updated with the latest industry trends and helpful insights.</p>
            </div>
        <div className={styles.imageContainer}>
            <Image src="/bloghero.png" alt="" fill className={styles.image}/>
        </div>
    </div>
  )
}

export default Bloghero