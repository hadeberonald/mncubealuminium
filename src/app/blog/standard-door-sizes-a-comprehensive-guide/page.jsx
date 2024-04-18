import React from 'react';
import styles from "./blogPage.module.css"
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <div className={styles.imageContainer}>
          <Image src="/blog2.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.text}>
        <div className={styles.title}>
          <h1>Standard Door Sizes: A Comprehensive Guide</h1>
        </div>
        <p className={styles.posted}>
              Posted by:
            </p>
        <div className={styles.detail}>
          <div className={styles.userImg}>
            <Image src="/user.png" alt="" fill className={styles.img}/>
          </div>
          <div className={styles.textDetail}>
            
            <p className={styles.name}>
              Mncube Aluminium & Glass
            </p>
            <p className={styles.date}>
              18 April 2024
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.para}>
        When it comes to aluminum doors, understanding the standard dimensions is crucial for a seamless fit. Here are the typical measurements for aluminum doors:
        <ol>
          <li>Single Doors:
            <ul>
              <li>Width: 813mm</li>
              <li>Height: 2032mm</li>
            </ul>
          </li>

          <li>Double Doors:
            <ul>
              <li>Width: 1219mm – 1829mm</li>
              <li>Height: 2032mm</li>
            </ul>
          </li>

          <li>Interior Doors:
            <ul>
              <li>Width: 762mm</li>
              <li>Height: 2032mm</li>
            </ul>
          </li>
        </ol>
        </p>
        <p className={styles.para}>
        Remember that these dimensions serve as a baseline. Custom sizes can be ordered to suit unique architectural styles or specific design preferences. Whether you’re renovating or building anew, choosing the right aluminum door ensures both functionality and aesthetics!
        </p>
        <h2 className={styles.subhead}>
        Heat, Cold, and Sound Insulation: Aluminum Doors vs. Wood
        </h2>
        <p className={styles.para}>
        When it comes to insulation, aluminum doors offer distinct advantages over their wooden counterparts:
        <ol>
        <li>Thermal Efficiency: Aluminum doors are excellent at retaining heat during colder months and keeping interiors cool in summer. Their thermal break technology minimizes heat transfer, making them energy-efficient.</li>
        <li>Soundproofing: Aluminum doors dampen external noise, ensuring a quieter living environment. Their sturdy construction and tight seals reduce sound infiltration, making them ideal for homes near busy streets or airports.</li>
        <li>Weather Resistance: Unlike wood, aluminum doors are highly resistant to weather elements. They won’t warp, rot, or swell due to rain or humidity. Their powder-coated finishes protect against UV rays, ensuring longevity.</li>
        </ol> 
        </p>
        <p className={styles.para}>
        In summary, aluminum doors combine insulation prowess with durability, making them a smart choice for modern homes.
        </p>
        <h2 className={styles.subhead}>
        Color Options and Aesthetics: Elevating Your Space with Aluminum Doors
        </h2>
        <p className={styles.para}>
        When it comes to aluminum doors, the color palette extends beyond the mundane. Here’s what you need to know:
        <ol>
          <li>Common Colors: Aluminum doors often come in classic shades such as white, black, gray, and bronze. These neutral tones seamlessly blend with various architectural styles.</li>
          <li>Customization: Modern technology allows for a wide range of color options, including custom hues and finishes. Whether you seek bold contrasts or subtle elegance, aluminum doors can be tailored to your vision.</li>
          <li>Sleek Frames: The aesthetic appeal of aluminum lies in its clean lines and minimalist design. Thin frames maximize glass area, flooding interiors with natural light. Whether it’s a sliding door or a hinged entrance, aluminum frames exude contemporary sophistication.</li>
        </ol>
        </p>
        <p className={styles.para}>
        Choose your color wisely, and let aluminum doors transform your home into a stylish haven!
        </p>
        <h2 className={styles.subhead}>
        Installation and Additional Features: Elevating Your Aluminum Door Experience
        </h2>
        <p className={styles.para}>
        When it comes to installing aluminum doors, professional expertise is paramount. Here’s why:
        <ol>
          <li>Professional Installation: Highly recommended for optimal performance and longevity. Skilled installers ensure precise fitting, weatherproofing, and secure attachment.</li>
          <li>Pre-Installed Locks: Many aluminum doors come with built-in locks, enhancing security. These locks are designed to withstand external forces and provide peace of mind.</li>
          <li>Optional Night Latches: For added safety, consider night latches. These allow partial opening of the door while maintaining security. Perfect for ventilation without compromising safety.</li>
        </ol> 
        </p>
        <p className={styles.para}>
        Remember, investing in professional installation and exploring additional features ensures your aluminum door serves you seamlessly!
        </p>
        <h2 className={styles.subhead}>
        Conclusion: Explore the World of Aluminum Doors
        </h2>
        <p className={styles.para}>
        As you embark on your journey to enhance your home, consider the myriad possibilities that aluminum doors offer. From sleek designs to robust security features, these doors seamlessly blend aesthetics with functionality. Whether you’re renovating or building anew, explore the diverse range of aluminum door options. Discover the perfect fit for your space, and let these doors transform your home into a haven of style and comfort!
        </p>
        
      </div>
    </div>
  )
}

export default page