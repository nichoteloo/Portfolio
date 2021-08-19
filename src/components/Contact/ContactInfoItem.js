import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import PText from '../Global/PText';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-blue);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--shades-blue-1);
    padding: 1rem;
    align-item: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    gap: 3rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'this is an info',
  link = 'https://google.com',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <a href={link} target="_blank" rel="noreferrer">
          <PText>{text}</PText>
        </a>
      </div>
    </ItemStyles>
  );
}
