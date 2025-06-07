import React from "react";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";
import FeaturedWorkSection from "./_components/FeaturedWorkSection";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsMasonry from "./_components/TestimonialsMasonry";
import BookingCTA from "./_components/BookingCTA";
import InstagramFeed from "./_components/InstagramFeed";

const HomePage = () => {
  return (
    <><div className="h-screen  ">
      <Hero />
    </div>
    <AboutSection />
    <FeaturedWorkSection/>
    <ServicesSection/>
    <TestimonialsMasonry/>
    <BookingCTA/>
    <InstagramFeed/>
    
    </>
  );
};

export default HomePage;
