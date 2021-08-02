import React from 'react';
import styled from 'styled-components';
import data from '../../assets/data/resumeData.json';

const EducationSectionStyles = styled.div`
  #resume {
    margin-top: 10rem;
    padding: 10rem 30rem;
  }

  /* Resume Section */
  #resume h1 {
    font: 18px/24px 'opensans-bold';
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  #resume h1 span {
    border-bottom: 3px solid #015956;
    padding-bottom: 6px;
  }
  #resume h3 {
    font: 25px/30px 'opensans-bold';
  }
  .education {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e8e8;
  }
  #resume .info {
    font: 16px/24px 'librebaskerville-italic';
    margin-bottom: 18px;
    margin-top: 9px;
  }
  #resume .info span {
    margin-right: 5px;
    margin-left: 5px;
  }
  #resume .date {
    font: 15px/24px 'opensans-regular', sans-serif;
    margin-top: 6px;
  }

  /* Skill Section */
  .skills-section {
    display: flex;
    align-self: center;
    justify-content: space-around;
  }
  .frontEnd-Icons,
  .backEnd-Icons,
  .devops-Icons {
    flex-wrap: wrap;
    width: 10px;
    height: 10px;
  }
  .bars {
    width: 95%;
    float: left;
    padding: 0;
    text-align: left;
  }
  .bars .skills {
    margin-top: 36px;
    list-style: none;
  }
  .bars li {
    position: relative;
    margin-bottom: 60px;
    background: #ccc;
    height: 42px;
    border-radius: 3px;
  }
  .bars li em {
    font: 15px 'opensans-bold', sans-serif;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
    position: relative;
    top: -36px;
  }
  .bar-expand {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding-right: 24px;
    background: #015956;
    display: inline-block;
    height: 42px;
    line-height: 42px;
    border-radius: 3px 0 0 3px;
  }
  @media only screen and (max-width: 768px) {
    #resume {
      padding: 5rem 5rem;
    }
  }
`;

export default function EducationSection({
  skillmessage1 = data.resume.skillmessage1,
  skillmessage2 = data.resume.skillmessage2,
  skillmessage3 = data.resume.skillmessage3,
  educations = data.resume.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  }),
}) {
  return (
    <EducationSectionStyles>
      <section id="resume">
        <div className="row education">
          <div className="header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="main-col">
            <div className="item">
              <div className="columns">{educations}</div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h1 className="text-center">{skillmessage1}</h1>
            <div className="skills-section">
              <div className="frontEnd-Icons">
                <img
                  src="https://img.icons8.com/color/70/000000/javascript.png"
                  alt="javascript-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/html-5.png"
                  alt="html-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/css3.png"
                  alt="css-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/json--v1.png"
                  alt="json-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/react-native.png"
                  alt="react-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/vue-js.png"
                  alt="view-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/bootstrap.png"
                  alt="bootstrap-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/api.png"
                  alt="api-icon"
                />
              </div>
            </div>

            <h1 className="text-center">{skillmessage2}</h1>
            <div className="skills-section">
              <div className="backEnd-Icons">
                <img
                  src="https://img.icons8.com/color/70/000000/nodejs.png"
                  alt="node-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/mongodb.png"
                  alt="mongodb"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/sql.png"
                  alt="sql-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/npm.png"
                  alt="npm-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/graphql.png"
                  alt="graphql"
                />
              </div>
            </div>

            <h1 className="text-center">{skillmessage3}</h1>
            <div className="skills-section">
              <div className="devops-Icons">
                <img
                  src="https://img.icons8.com/color/70/000000/git.png"
                  alt="git-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png"
                  alt="vs-icon"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/github--v1.png"
                  alt="github"
                />
                <img
                  src="https://img.icons8.com/color/70/000000/heroku.png"
                  alt="heroku"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </EducationSectionStyles>
  );
}
