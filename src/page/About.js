import React from 'react';
import styled from 'styled-components';
import PText from '../components/Global/PText';
import Button from '../components/Global/Button';
import AboutImg from '../assets/images/image.jpg';
import AboutInfoItem from '../components/About/AboutInfoItem';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 0 5rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    text-align: center;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-blue);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    text-align: justify;
    .para {
      max-width: 100%;
    }
  }
  .right {
    transform: translateY(-3%);
    img {
      height: 350px;
      width: 300px;
      border: 3px solid var(--shades-blue-2);
    }
  }
  .about__info__items {
    margin-top: 15rem;
    margin-left: 5rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about__info .button {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
      margin: 0 2rem;
    }
    .about__info__items {
      margin-left: 2rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, i am <span>Nicolas</span>
            </p>
            <h2 className="about__heading">A junior software developer</h2>
            <div className="about__info">
              <PText>
                Work with Python and PHP most of the time but am also familiar
                with Go or Javascript. I am experienced with a number of
                projects related to software development including Web Developer
                Role (Dictionary Apps), Database Admin (IT Project OpenSID),
                Project Manager (Book Reader Blind), and Backend Engineer
                (Lymphoblast Counter).
                <br />
                <br />
                My educational background led me to become an IoT engineer,
                proven with my college duties or final bachelor project related
                to IoT and Microcontroller things.
                <br />
                <br />
                Although I am a recent college graduate, my maturity,
                professionality, skill and ability to work with others will make
                me an asset for your team. So let's collaborate together.
              </PText>
              <div className="button">
                <Button btnLink="#" btnText="My Resume" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Nasirabad Govt. High School, Chattogram']}
            />
            <AboutInfoItem
              title="Collage"
              items={['BAF Shaheen College Chattogram']}
            />
            <AboutInfoItem
              title="Varsity"
              items={['University Of Chitiagong']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'After Effects', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoItem
              title="2010-2012"
              items={['junior developer at web Cifar']}
            />
            <AboutInfoItem
              title="2012-2016"
              items={['Front end developer at web Cifar ']}
            />
            <AboutInfoItem title="2016-" items={['Freelance web Developer']} />
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
