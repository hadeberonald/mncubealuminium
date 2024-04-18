"use client"

import React, { useRef } from 'react';
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_94xb3ir', 'template_fs2bf6j', form.current, {
        publicKey: 'pqei6qbcmZQsBFq9p',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>
          <h2 className={styles.h2}>Contact Us</h2></div>
        <div className={styles.para}>
          <p>Are you looking for something custom? Look no further, Mncube Aluminium & Glass has got you covered.</p>

          <p>Talk to us and we will make your dreams a reality!</p>
        </div>
      </div>
      <div className={styles.form}>
<form ref={form} onSubmit={sendEmail}>
      <div className={styles.input}>
      <label> Full Name:</label>
      
      <input type="text" name="user_name" className={styles.field} />
      
      </div>
      <div className={styles.input}>
      <label>Email:</label>     
      
      <input type="email" name="user_email" className={styles.field}/>
     
      </div>
      <div className={styles.input}>
      <label>Message:</label>
      <textarea name="message" rows={12} className={styles.fieldT}/>
      </div>
      <input type="submit" value="Send" className={styles.button}/>
    </form>
    </div>
      </div>
  );
};

export default Contact;