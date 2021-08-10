import React from 'react';
import styled from 'styled-components';
import PText from '../components/Global/PText';
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
  .about__info .button-link {
    font-size: 2.1rem;
    background-color: #dfebed;
    display: inline-block;
    height: 30px;
    width: 130px;
    border-radius: 12px;
    color: var(--black);
    text-align: center;
    margin-top: 1.5rem;
  }
  .about__info .button-link:hover {
    background-color: var(--shades-blue-1);
    color: var(--white);
  }
  .right {
    transform: translateY(-3%);
    img {
      height: 350px;
      width: 300px;
      border: 3px solid var(--shades-blue-2);
      border-radius: 12px;
    }
  }
  .about__info__items {
    margin-top: 10rem;
    margin-left: 5rem;
    margin-bottom: 10rem;
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
      margin-bottom: -7rem;
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
    .right {
      img {
        height: 300px;
        width: 250px;
      }
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
                <a
                  href="https://drive.google.com/file/d/1DRyyUn8L_hlGLZftychvlcNeT3BXY2s4/view?usp=sharing"
                  className="button-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Django', 'Flask', 'Codeigniter']}
            />
            <AboutInfoItem
              title="DevOps"
              items={['Git', 'Docker', 'Heroku', 'Canva']}
            />
            <AboutInfoItem
              title="ML-Stack"
              items={['Tensorflow', 'Scikit-Learn', 'Pandas']}
            />
            <AboutInfoItem
              title="IoT-Stack"
              items={['Mosquitto-MQTT', 'NodeRed', 'Grafana']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="University"
              items={['Engineering Physics (Electrical & Electronic) UGM']}
            />
            <AboutInfoItem
              title="Academy"
              items={['Bangkit Academy with Machine Learning Specialization']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Certifications</h1>
            <AboutInfoItem
              title="Coursera"
              items={[
                'Tensorflow Developer Specialization supported by DeepLearning.ai',
              ]}
            />
            <AboutInfoItem
              title="Coursera"
              items={[
                'Google IT Support for Professional & Google Automation with Python',
              ]}
            />
            <AboutInfoItem
              title="AWS"
              items={[
                'AWS Academy Graduate with AWS Academy Cloud Foundations Specialization',
              ]}
            />
            <AboutInfoItem
              title="Siemens"
              items={[
                'Industrial Ethernet, Process Control Basic, Profinet with Siemens Digital Academy',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Organization</h1>
            <AboutInfoItem title="Kamalogis" items={['President - 2020']} />
            <AboutInfoItem
              title="Gamaforce"
              items={['Technical Telemetry Lead - 2019']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
