import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
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
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
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
              Hi, i am <span>Nicolas C</span>
            </p>
            <h2 className="about__heading">A full time developer</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                itaque pariatur, voluptatem ad aut perspiciatis nisi vero et ex
                corporis commodi, quasi perferendis animi, architecto error.
                Nemo ex nesciunt ipsa. <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                veritatis, id harum ex nisi commodi expedita amet perspiciatis
                quam quis non laudantium facilis esse tenetur ullam accusantium
                excepturi. Fuga, fugit.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                asperiores eius tempora, impedit nesciunt veritatis quibusdam?
                Amet minus tenetur et laudantium. Doloremque quis quasi quas
                repellat eligendi dolore illum quo.
              </PText>
              <Button btnLink="#" btnText="Download CV" />
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
      <ContactBanner />
    </AboutPageStyle>
  );
}
