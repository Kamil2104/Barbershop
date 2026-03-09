import { useEffect } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

import { MENU_ITEMS } from "@/data/menu";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header items={MENU_ITEMS} />
      <Hero />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Reviews />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
