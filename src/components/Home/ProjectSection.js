import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from '../Global/SectionTitle';
import projects from '../../assets/data/projects';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    padding: 3rem 0;
  }
  .swiper-container {
    padding-top: 7rem;
    max-width: 80%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    margin-top: 0.1rem;
    margin-right: 5rem;
    position: absolute;
    height: 35px;
    width: 35px;
    background: var(--deep-blue);
    z-index: 10;
    right: 50px;
    left: auto;
    top: 0;
    color: var(--white);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      display: flex;
      margin-top: -2rem;
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
      .projectItem__img {
        width: 100%;
      }
    }
    .swiper-container {
      max-width: 90%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      height: 25px;
      width: 25px;
      transform: translateX(90%) translateY(50%);
    }
  }
`;

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={8}
            slidePerView={1}
            navigation
            breakpoints={{
              // when window width is greater or equal than 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is greater or equal than 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is greater or equal than 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                    prod={project.prod}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
