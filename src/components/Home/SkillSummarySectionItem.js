import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from '../Global/PText';

const ItemStyles = styled.div`
  text-align: center;
  .skillItem__icon {
    svg {
      width: 3rem;
    }
  }
  .skillItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .skillItem__icon {
      transform: translateX(-3%);
    }
  }
`;

export default function SkillSummarySectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles>
      <div className="skillItem__icon">{icon}</div>
      <div className="skillItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
