import React from "react";
import Navbar from "../initial_components/Navbar";
import Heroimg from "../initial_components/Heroimg";
import Footer from "../initial_components/Footer";
// import Workcard from '../initial_components/Workcard'
import Skills from "../initial_components/Skills";
import CarouselSlider from "../initial_components/CarouselSlider";

function Home() {
  return (
    <>
      <Navbar />
      <Heroimg />
      {/* <CarouselSlider /> */}
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
