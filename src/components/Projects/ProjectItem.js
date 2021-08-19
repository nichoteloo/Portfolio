import React from 'react';
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
  .add-ons {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
  }
  .add-ons .left {
    flex: 2;
  }
  .add-ons .right {
    flex: 1;
    display: flex;
  }
  .add-ons .left .repo-icon {
    margin-left: 0.2rem;
    display: inline-block;
    background-color: var(--black);
    width: 23px;
    height: 23px;
    border-radius: 8px;
    text-align: center;
    transform: translateY(-10%);
  }
  .add-ons .left .repo-icon .icon {
    transform: translateX(-4%) translateY(18%);
  }
  .add-ons .right .dev {
    background-color: #ef5353;
    font-size: 1.4rem;
    margin: 0 1rem;
    text-align: center;
    width: 32px;
    height: 15px;
    font-family: 'Montserrat-Bold';
    color: var(--black);
    border-radius: 4px;
    font-weight: bold;
  }
  .add-ons .right .prod {
    background-color: #5be7a9;
    font-size: 1.4rem;
    margin: 0 1rem;
    text-align: center;
    width: 36px;
    height: 15px;
    font-family: 'Montserrat-Bold';
    color: var(--black);
    border-radius: 4px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) and (min-width: 368px) {
    margin: 0 2rem;
    .projectItem__img {
      height: 350px;
      width: 100%;
    }
    .add-ons .right {
      flex: 1;
    }
  }
  @media only screen and (max-width: 368px) {
    .projectItem__img {
      height: 300px;
      width: 90%;
    }
    .projectItem__info {
      margin-right: 3.3rem;
    }
    .add-ons .right {
      flex: 1.2;
      margin-right: 3.3rem;
    }
  }
`;

export default function ProjectItem({
  img = robotImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non incidunt, voluptatibus laboriosam illo enim? Debitis modi cumque, nam voluptatibus molestiae quas inventore dolorum, officiis voluptatum mollitia, ea quod quia.',
  link = 'https://github.com/nichoteloo/Undergraduate-Thesis',
  prod = false,
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="projectItem__img"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
      </div>
      <div className="add-ons">
        <div className="left">
          <a href={link} target="_blank" rel="noreferrer" className="repo-icon">
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
          </a>
        </div>
        <div className="right">
          <h1>Status : </h1>
          <div className={prod ? 'prod' : 'dev'}>{prod ? 'prod' : 'dev'}</div>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
