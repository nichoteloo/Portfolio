import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FonColStyle = styled.div`
  max-width: 180px;
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    display: flex;
  }
  .title-1 {
    margin-left: 1.5rem;
    transform: translateY(-10%);
  }
  .title-2 {
    margin-left: 1.5rem;
    transform: translateY(-20%);
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      icon: 'user',
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      icon: 'user',
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <FonColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>
                <FontAwesomeIcon icon={item.icon} />
                <div className="title-1">{item.title}</div>
              </Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.solid ? (
                  <FontAwesomeIcon icon={item.icon} />
                ) : (
                  <FontAwesomeIcon icon={['fab', item.icon]} />
                )}
                <div className="title-2">{item.title}</div>
              </a>
            )}
          </li>
        ))}
      </ul>
    </FonColStyle>
  );
}
