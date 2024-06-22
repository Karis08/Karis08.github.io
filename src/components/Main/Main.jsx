// components/Main/Main.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import About2 from "../About/About2";
import Services from "../Services/Services";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner2 from "../Banner2/Banner2";

const Main = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <Banner2 />
      <Services />  {/*요금제 설명*/ }
      <AppStoreBanner />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
