import React from 'react';
import styled from 'styled-components';
import HomeSection from '../components/Home/HomeSection';
import AboutSection from '../components/Home/AboutSection';
import ProjectSection from '../components/Home/ProjectSection';
import SkillSummarySection from '../components/Home/SkillSumarrySection';
import ContactBanner from '../components/Home/ContactBanner';

const HomeStyles = styled.div`
  padding: 10rem 0;
`;

export default function Home() {
  return (
    <HomeStyles>
      <HomeSection />
      <AboutSection />
      <SkillSummarySection />
      <ProjectSection />
      <ContactBanner />
    </HomeStyles>
  );
}
