import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  padding-top: 4rem;
  background-color: var(--black);
  .container {
    display: flex;
    gap: 3rem;
    transform: translateX(1.5%);
  }
  .footer__col1 {
    flex: 2;
    text-align: justify;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col2 {
    margin-left: 5rem;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .copyright {
    background-color: #222831;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 1.5rem;
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3.5rem;
      }
    }
    .footer__col1 {
      margin-right: 2rem;
    }
    .footer__col2 {
      margin-left: 0;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Nicolas C.</h1>
          <PText>Junior Software Developer.</PText>
          <PText>
            Focused on Backend and IoT Development. Work with Python and PHP
            most of the time, but am also familiar with Go and Java. Reach me
            out and let's collaborate together !
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                icon: 'home',
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                icon: 'user-secret',
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                icon: 'laptop',
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                icon: 'phone',
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                icon: 'telegram',
                title: 'nichotelo',
                path: 'https://t.me/nichotelo',
              },
              {
                icon: 'envelope',
                solid: true,
                title: 'nichotelo@outlook.com',
                path: 'mailto:nichotelo@outlook.com',
              },
              {
                icon: 'map-marker-alt',
                solid: true,
                title: 'Yogyakarta, IDN',
                path: 'https://goo.gl/maps/XQdnSuna1YzKZU1L7',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                icon: 'github',
                title: 'nichoteloo',
                path: 'https://github.com/nichoteloo',
              },
              {
                icon: 'twitter',
                title: 'nichotelo',
                path: 'https://twitter.com/nichotelo',
              },
              {
                icon: 'linkedin',
                title: 'nicolaschristianto',
                path: 'https://www.linkedin.com/in/nicolaschristianto/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>@ 2021 - Nicolas C</PText>{' '}
        </div>
      </div>
    </FooterStyle>
  );
}
