"use client"

import React, { useState } from 'react';
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => { 

    const [open,setOpen] = useState(false)

    return (
    <>
        <div className={styles.nav}>
           <div className={styles.logoContainer}>
           <Image src="/logo.jpg" alt="logo" fill className={styles.image}/>
    </div>
           <div className={styles.burger} onClick={()=>setOpen(!open)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          {/*
          insert burger menu here
          */}

           </div>
           </div>
           <div className={styles.menu}>
           {open && (
            <div className={styles.close} onClick={()=>setOpen(false)}>
            <div className={styles.closei}>

               <Link href="/">
                <Image src="/close.png" alt="" fill className={styles.closeimg} />
               </Link>
                
            </div>
            <div className={styles.responsiveMenu}>
           <div className={styles.links}>
           <Link href="/" className={styles.link}>Home</Link>
           <Link href="/about" className={styles.link}>About</Link>
           <Link href="/shop" className={styles.link}>Shop</Link>
           <Link href="/blog" className={styles.link}>Blog</Link>
           </div>
           </div>
           </div>
           )}
           </div>
        </>
    );
};

export default Sidebar;