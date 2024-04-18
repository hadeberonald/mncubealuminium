import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/navbar/Navbar";
import Sidebar from "../app/components/sidebar/Sidebar";
import Footer from "../app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mncube Aluminium & Glass",
  description: "We are the best aluminium and glass fabricators and installation experts in South Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Sidebar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
