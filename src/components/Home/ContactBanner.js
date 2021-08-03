import React from 'react';
import styled from 'styled-components';
import PText from '../Global/PText';
import Button from '../Global/Button';

const ContactBannerStyle = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--shades-blue-3);
    border-radius: 12px;
    padding: 3rem 0;
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__wrapper {
      max-width: 300px;
    }
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>want to collaborate with me</PText>
          <h3 className="contactBanner__heading">get in touch</h3>
          <Button btnText="CONTACT NOW" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
