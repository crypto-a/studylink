// src/pages/Home.tsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import VideoSection from "../components/home/VideoSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CallToActionSection from "../components/home/CallToActionSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
