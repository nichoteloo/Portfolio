import React from 'react';
import styled from 'styled-components';
import { BiCog, BiCodeAlt, BiCloudUpload } from 'react-icons/bi';
import SkillSummarySectionItem from './SkillSummarySectionItem';
import SectionTitle from '../Global/SectionTitle';

const SkillSummaryItemStyles = styled.div`
  padding: 22rem 0;
  .skill__allItems {
    display: flex;
    gap: 4rem;
    padding: 0 5rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .skill__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
    .skill__allItems:nth-child(3) {
      transform: translateX(2%);
    }
  }
`;

export default function SkillSummarySection() {
  return (
    <SkillSummaryItemStyles>
      <SectionTitle heading="Skill Summary" />
      <div className="skill__allItems">
        <SkillSummarySectionItem
          icon={<BiCog />}
          title="backend engineer"
          desc="I do api design for the website with more reusable structure."
        />
        <SkillSummarySectionItem
          icon={<BiCodeAlt />}
          title="application developer"
          desc="I also develop system design, including optimization or desktop apps."
        />
        <SkillSummarySectionItem
          icon={<BiCloudUpload />}
          title="iot engineer"
          desc="I develop iot application with robust and efficient design."
        />
      </div>
    </SkillSummaryItemStyles>
  );
}
