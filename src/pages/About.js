import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';

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
          <div className="about__info__item" />
        </div>
      </div>
    </AboutPageStyle>
  );
}
