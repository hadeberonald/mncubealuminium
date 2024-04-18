import React from 'react';
import styles from './products.module.css';
import Image from 'next/image';

const Products = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h2>Our Top Products</h2>
            </div>
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src="/24.jpg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.content}>
                <div className={styles.title}>
                    <h3 className={styles.h3}>2400mm x 1800mm Aluminium Window</h3>
                </div>
                <div className={styles.desc}>
                <p className={styles.p}>Top-hung design with four vents made from high-quality durable aluminium.</p>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.disclaimer}>
                    <p className={styles.p}>excl. delivery & installation</p>
                    </div>
                    <div className={styles.price}>
                    <p className={styles.p}>R2800,00 ea</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src="/18.jpg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.content}>
                <div className={styles.title}>
                    <h3 className={styles.h3}>1800mm x 1500mm Aluminium Window</h3>
                </div>
                <div className={styles.desc}>
                <p className={styles.p}>2 vent top-hung versatile aluminium window. The perfect blend for style, functionality, and durability.</p>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.disclaimer}>
                    <p className={styles.p}>excl. delivery & installation</p>
                    </div>
                    <div className={styles.price}>
                    <p className={styles.p}>R2400,00 ea</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src="/60.jpg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.content}>
                <div className={styles.title}>
                    <h3 className={styles.h3}>600mm x 900mm Aluminium Window</h3>
                </div>
                <div className={styles.desc}>
                <p className={styles.p}>Stylish top-hung aluminium window perfect use for bathrooms, kitchens for an aesthetic appeal.</p>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.disclaimer}>
                    <p className={styles.p}>excl. delivery & installation</p>
                    </div>
                    <div className={styles.price}>
                    <p className={styles.p}>R950,00 ea</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src="/alu-door-01.jpg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.content}>
                <div className={styles.title}>
                    <h3 className={styles.h3}>950 x 2100mm Aluminium Door</h3>
                </div>
                <div className={styles.desc}>
                <p className={styles.p}>Door frame and 5-panel door set with hinges, handle, and locking mechanism</p>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.disclaimer}>
                    <p className={styles.p}>excl. delivery & installation</p>
                    </div>
                    <div className={styles.price}>
                    <p className={styles.p}>R2500,00 ea</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Products