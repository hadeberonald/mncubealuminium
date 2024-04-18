import React from 'react';
import styles from "../blogsection/blogsection.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Blogsection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Latest Updates</h2>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/blog1.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Advantages of Aluminum Windows: Energy Efficiency and Durability</h3>
            </div>
          <div className={styles.desc}>
            <p>Aluminum windows have gained significant popularity in recent years due to their unique blend of aesthetics, functionality, and sustainability. As homeowners seek energy-efficient solutions and durable materials, aluminum frames have emerged as a top choice. In this blog, we delve into the advantages of aluminum windows, focusing on their energy efficiency, robustness, and minimal maintenance requirements. Let’s explore why these sleek and modern windows are transforming homes across the globe.</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/advantages-of-aluminum-windows-energy-efficiency-and-durability">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/blog2.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Standard Door Sizes: A Comprehensive Guide</h3>
            </div>
          <div className={styles.desc}>
            <p>When it comes to enhancing your home’s aesthetics and security, aluminum doors offer an excellent solution. These doors have gained popularity due to their durability, sleek appearance, and versatility. Before committing to a specific style, consider these options.</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/standard-door-sizes-a-comprehensive-guide">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/blog3.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Aluminum vs. Wooden Windows: Making the Right Choice</h3>
            </div>
          <div className={styles.desc}>
            <p>When it comes to selecting windows for your home, the choice between aluminum and wooden frames is pivotal. Each material brings its own set of advantages and considerations. In this comparison, we’ll delve into the features, aesthetics, insulation properties, and maintenance requirements of both options. </p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/aluminum-vs-wooden-windows-making-the-right-choice">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/blog4.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Transforming Your Home with Aluminum: Windows, Doors, and Beyond</h3>
            </div>
          <div className={styles.desc}>
            <p>When it comes to home improvement, aluminum plays a pivotal role in elevating both aesthetics and functionality. From sleek windows to durable doors, aluminum offers a versatile solution for modern living. Let’s delve into the world of aluminum, exploring its impact on your home’s design, insulation, and security. Whether you’re renovating or building anew, discover how aluminum can transform your living spaces!</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/transforming-your-home-with-aluminum-windows-doors-and-beyond">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogsection