import React from 'react';
import styled from 'styled-components';
import HomeImg from '../assets/images/hero.png';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HomeStyles = styled.div`
  .home {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
  }
  .home__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .home__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .home__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .home__info {
    margin-top: -18rem;
  }
  .home__social,
  .home__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .home__social {
    left: 50px;
  }
  .home__scrollDown {
    right: 50px;
  }
  .home__social__indicator,
  .home__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .home__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .home__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .home {
      min-height: 750px;
    }
    .home__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .home__name {
        font-size: 4.5rem;
      }
    }
    .home__img {
      height: 300px;
    }
    .home__info {
      margin-top: 3rem;
    }
    .home__social {
      left: 50px;
      bottom: -15%;
      width: 20px;
      .home__social__indicator {
        width: 20px;
        p {
          font-size: 1.3rem;
        }
        img {
          max-height: 22px;
        }
      }
      .home__social__text {
        ul {
          li {
            a {
              font-size: 1.3rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
      .home__scrollDown {
        right: 0;
        widht: 20px;
        gap: 1rem;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default function HomeSection() {
  return (
    <HomeStyles>
      <div className="home">
        <div className="container">
          <h1 className="home__heading">
            <span>Hello, this is</span>
            <span className="home__name">Nicolas C</span>
          </h1>
          <div className="home__img">
            <img src={HomeImg} alt="" />
          </div>
          <div className="home__info">
            <PText>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="home__social">
            <div className="home__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="home__social__text">
              <ul>
                <li>
                  <a href="facebook.com" target="_blank" rel="noreferrer">
                    FB
                  </a>
                </li>
                <li>
                  <a href="twitter.com" target="_blank" rel="noreferrer">
                    TW
                  </a>
                </li>
                <li>
                  <a href="linkedin.com" target="_blank" rel="noreferrer">
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
