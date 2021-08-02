import React from 'react';
import styled from 'styled-components';

const AboutSectionStyles = styled.div`
  #about {
    margin-top: -10rem;
    padding: 10rem 30rem;
  }
  #about h2 {
    font: 4rem 'opensans-bold';
    margin-bottom: 12px;
  }
  #about p {
    line-height: 20px;
    font-size: 1.8rem;
    text-align: justify;
  }
  #about .download p {
    text-align: center;
    margin-top: 2rem;
  }
  #about .download .button {
    font-size: 2rem;
    margin-top: 6px;
    background: #015956;
    display: inline-block;
    height: 40px;
    width: 200px;
    border-radius: 12px;
  }
  #about .download .button:hover {
    background: #fff;
    color: #2b2b2b;
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
      font-size: 1.8rem;
      height: 35px;
      width: 180px;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <section id="about">
        <div className="row">
          <div className="main-col">
            <h2>Hello, I'm Nicolas!</h2>
            <br />
            <p>
              I am Full Stack Software Engineer in the SF Bay Area with a
              Bachelor’s Degree and 2+ years professional experience in Business
              Administration combined with 3 Liberal Arts Associate’s Degrees in
              Arts and Sciences. I am a naturally curious person which makes me
              want to always learn new things, a problem-solver who questions
              everything, and a hard worker who doesn't take life too seriously
              and enjoys the little things. I When I was younger I was exposed
              to coding for fun, but didn't know I could make a career out of
              it. Being from a small city across San Francisco, I wasn't exposed
              to all the opportunities I could make for myself.
            </p>
            <br />
            <p>
              Administration combined with 3 Liberal Arts Associate’s Degrees in
              Arts and Sciences. I am a naturally curious person which makes me
              want to always learn new things, a problem-solver who questions
              everything, and a hard worker who doesn't take life too seriously
              and enjoys the little things.
            </p>
            <div className="row">
              <div className="download">
                <p>
                  <a href="https://google.com" className="button">
                    DOWNLOAD MY RESUME
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AboutSectionStyles>
  );
}
