import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../app/components/hero/Hero";
import Services from "../app/components/services/Services";
import Contact from "../app/components/contact/Contact";
import Products from "./components/products/Products";

export default function Home() {
  return (
  <div className={styles.container}>
    <Hero/>
    <Services/>
    <Products/>
    <Contact/>
  </div>
  );
}
