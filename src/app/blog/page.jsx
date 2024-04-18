import React from 'react';
import Blogsection from '../components/blogsection/Blogsection';
import styles from "./blog.module.css";

const page = () => {
  return (
    <div className={styles.container}>
        
        <Blogsection/>
    </div>
  )
}

export default page