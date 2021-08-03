import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  max-width: 220px;
  margin: 0 auto;
  .projectItem__img {
    width: 100%;
    height: 280px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 2px solid var(--shades-blue-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-blue);
    padding: 1rem;
    width: 100%;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 280px;
    }
    .projectItem__title {
      font-size: 1.8rem;
    }
    .projectItem__desc {
      font-size: 1.4rem;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non incidunt, voluptatibus laboriosam illo enim?',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
