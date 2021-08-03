import React from 'react';
import Typical from 'react-typical';
import {
  FaLinkedin,
  FaTelegram,
  FaGithubSquare,
  FaEnvelope,
  FaChevronCircleDown,
} from 'react-icons/fa';
import styled from 'styled-components';
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
    left: 48.5%;
    bottom: 300px;
    height: 42px;
    width: 42px;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
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
      left: 44%;
      height: 40px;
      width: 40px;

      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
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
                <a href="https://www.linkedin.com/in/nicolaschristianto/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://t.me/nichotelo">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="https://github.com/nichoteloo">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="mailto:nichotelo@outlook.com">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
          {/* <p className="scrolldown">
            <a href="#about">
              <FaChevronCircleDown />
            </a>
          </p> */}
        </div>
      </header>
    </HomeSectionStyles>
  );
}
