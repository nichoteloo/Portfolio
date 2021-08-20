import React from 'react';
import styled from 'styled-components';
import PText from '../Global/PText';

const AboutItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-conter: flex-start;
  position: relative;
  margin-top: 4rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--shades-blue-1);
    padding: 1rem;
    border-radius: 8px;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      max-width: 250px;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyle>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyle>
  );
}
