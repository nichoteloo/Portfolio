import React from 'react';
import styled from 'styled-components';
import HomeSection from '../components/Home/HomeSection';

const HomeStyles = styled.div`
  padding: 10rem 0;
`;

export default function Home() {
  return (
    <HomeStyles>
      <HomeSection />
    </HomeStyles>
  );
}
