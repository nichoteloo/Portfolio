import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutSectionStyles = styled.div`
  #about {
    margin-top: -20rem;
    padding: 10rem 30rem;
  }
  #about h2 {
    font: 4rem 'opensans-bold';
    margin-bottom: 12px;
  }
  #about p {
    line-height: 22px;
    font-size: 2rem;
    text-align: justify;
  }
  #about .download p {
    text-align: center;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
  #about .download .button {
    font-size: 2.2rem;
    margin-top: 6px;
    background-color: #dfebed;
    display: inline-block;
    padding: 0.5em 0;
    height: 40px;
    border-radius: 12px;
    color: var(--black);
  }
  #about .download .button-1 {
    width: 120px;
  }
  #about .download .button-2 {
    width: 180px;
  }
  #about .download .button:nth-child(2) {
    background-color: transparent;
    color: white;
    border: 2px solid var(--white);
  }
  #about .download .button:hover {
    background-color: var(--shades-blue-1);
    color: var(--white);
  }
  #about .download .button:nth-child(2):hover {
    background-color: var(--shades-blue-2);
    color: var(--black);
    border: 2px solid var(--shades-blue-2);
  }
  @media only screen and (max-width: 768px) {
    #about {
      padding: 5rem 5rem;
    }
    #about h2 {
      font: 3rem 'opensans-bold';
    }
    #about p {
      line-height: 16px;
      font-size: 1.3rem;
      text-align: justify;
    }
    #about .download .button {
      font-size: 1.6rem;
      max-height: 30px;
      margin: auto;
    }
    #about .download .button-1 {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    #about .download p {
      margin-left: 1rem;
      margin-right: 1rem;
      gap: 3rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div id="about">
        <div className="row">
          <div className="main-col">
            <h2>Hello, I'm Nicolas!</h2>
            <br />
            <p>
              I'm Nicolas, Junior Software Developer with a Bachelor's Degree in
              Engineering. Currently staying in Yogyakarta, Indonesia. I
              recognize myself as a precise, communicative, detail-oriented,
              fast-learner, and analytical type of person.
            </p>
            <br />
            <p>
              By now, I spend more time on developing self-projects by making a
              Web Application or several IoT Projects. I am also enthusiastic
              about Back-End Operation and Software System Design. This page is
              the place where you can find all my works. Have a good time !
            </p>
            <div className="row">
              <div className="download">
                <p>
                  <a
                    href="https://drive.google.com/file/d/1VJym4R-N36ZUiCPD_eoBbyvspfQL8fVl/view?usp=sharing"
                    className="button button-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My CV
                  </a>
                  <Link to="/about" className="button button-2">
                    More About Me
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
