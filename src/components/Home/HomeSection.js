import React from 'react';
import Typical from 'react-typical';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import data from '../../assets/data/resumeData.json';
import image from '../../assets/images/image.jpg';

const HomeSectionStyles = styled.div`
  header {
    margin-top: 6rem;
    position: relative;
    height: 800px;
    min-height: 500px;
    width: 100%;
    text-align: center;
  }
  header .profile-pic {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 100%;
  }
  header .banner-text h1 {
    font-size: 5rem;
    margin-top: 2rem;
  }
  header .banner-text h2 {
    font-size: 2rem;
    margin-top: 1rem;
    width: 100%;
  }
  header .banner-text hr {
    width: 50%;
    margin: 1.5rem auto;
  }
  header .social {
    padding: 0;
    font-size: 32px;
  }
  header .social li {
    display: inline-block;
    margin: 0 15px;
    padding: 0;
  }
  header .scrolldown a {
    position: absolute;
    display: block;
    left: 48.7%;
    bottom: 300px;
    height: 32px;
    width: 32px;
  }
  @media only screen and (max-width: 768px) {
    header .profile-pic {
      width: 150px;
      height: 150px;
    }
    header .banner-text h1 {
      font-size: 4rem;
    }
    header .banner-text h2 {
      font-size: 1.5rem;
    }
    header .banner-text hr {
      width: 75%;
    }
    header .social {
      padding: 0;
      font-size: 22px;
    }
    header .social li {
      display: inline-block;
      margin: 0 8px;
      padding: 0;
    }
    header .scrolldown a {
      position: absolute;
      bottom: 350px;
      display: block;
      left: 47%;
      height: 35px;
      width: 35px;
    }
  }
  @media only screen and (max-width: 408px) {
    header .scrolldown a {
      left: 45%;
    }
  }
`;

export default function HomeSection({ name = data.main.name }) {
  return (
    <HomeSectionStyles>
      <header id="home">
        <div className="row banner">
          <img className="profile-pic" src={image} alt="Profile Pic" />
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <Typical
              loop={Infinity}
              wrapper="h2"
              steps={[
                'Backend Engineer',
                1500,
                'Application Developer',
                1500,
                'IoT Engineer',
                1500,
              ]}
            />
            <hr />
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicolaschristianto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="white" size="1x" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/nichotelo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} color="white" size="1x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nichoteloo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" size="1x" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nichotelo@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} color="white" size="1x" />
                </a>
              </li>
            </ul>
          </div>
          <p className="scrolldown">
            <a href="#about" className="smoothscroll">
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                color="white"
                size="4x"
              />
            </a>
          </p>
        </div>
      </header>
    </HomeSectionStyles>
  );
}
