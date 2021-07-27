import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
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
          <PText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            facilis ullam ea architecto dolore at modi eum, blanditiis
            praesentium deleniti laudantium quas, impedit provident explicabo
            exercitationem veniam, officia porro repudiandae.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
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
                title: 'WA 087880263752',
                path: 'WA/+6287880263752',
              },
              {
                title: 'nicolas.christianto22@gmail.com',
                path: 'mailto:nicolas.christianto22@gmail.com',
              },
              {
                title: 'Pogung, Sleman, DIY',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            @ 2021 - Nicolas C | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://google.com">
              Nichotelo
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
