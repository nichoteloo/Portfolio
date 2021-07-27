import React from 'react';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  );
}