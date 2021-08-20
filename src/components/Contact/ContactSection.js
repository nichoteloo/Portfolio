import React from 'react';
import styled from 'styled-components';
import { FaTelegram, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { SiTwitter } from 'react-icons/si';
import SectionTitle from '../Global/SectionTitle';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 10rem;
    margin: 15rem 18rem 5rem 18rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper h1 {
    font-family: 'Montserrat Bold';
    font-size: 2.7rem;
    margin-bottom: 2.2rem;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 90%;
    background-color: var(--white);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      margin: 10rem 3rem 0rem 3rem;
      gap: 3rem;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      margin-top: 3rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <h1>Contact Link</h1>
            <ContactInfoItem
              icon={<FaTelegram />}
              text="nichotelo"
              link="https://t.me/nichotelo"
            />
            <ContactInfoItem
              icon={<GrMail />}
              text="nichotelo@outlook.com"
              link="mailto:nichotelo@outlook.com"
            />
            <ContactInfoItem
              text="Sleman, D.I. Yogyakarta, Indonesia"
              link="https://goo.gl/maps/XQdnSuna1YzKZU1L7"
            />
          </div>
          <div className="right">
            <h1>Social Info</h1>
            <ContactInfoItem
              icon={<ImGithub />}
              text="nichoteloo"
              link="https://github.com/nichoteloo"
            />
            <ContactInfoItem
              icon={<SiTwitter />}
              text="nichotelo"
              link="https://twitter.com/nichotelo"
            />
            <ContactInfoItem
              icon={<FaLinkedin />}
              text="nicolaschristianto"
              link="https://www.linkedin.com/in/nicolaschristianto/"
            />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
