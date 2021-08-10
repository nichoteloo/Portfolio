import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import robotImg from '../../assets/images/robot.jpg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--shades-blue-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-blue);
    padding: 1rem;
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
  .repo-icon {
    margin-top: 1.5rem;
    margin-left: 0.2rem;
    display: inline-block;
    background-color: var(--black);
    width: 23px;
    height: 23px;
    border-radius: 8px;
    text-align: center;
    transform: translateY(-10%);
  }
  .repo-icon .icon {
    transform: translateX(-4%) translateY(18%);
  }
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
    .projectItem__img {
      height: 350px;
      width: 100%;
    }
  }
`;

export default function ProjectItem({
  img = robotImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non incidunt, voluptatibus laboriosam illo enim? Debitis modi cumque, nam voluptatibus molestiae quas inventore dolorum, officiis voluptatum mollitia, ea quod quia.',
  link = 'https://github.com/nichoteloo/Undergraduate-Thesis',
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
      <a href={link} target="_blank" rel="noreferrer" className="repo-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
      </a>
    </ProjectItemStyles>
  );
}
