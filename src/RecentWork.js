import React from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import projectInfo from './data/projectInfo';

const RecentWork = () => {
  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div className="projectCard">
      {projectInfo.map((project) => (
        <div key={project.id}>
          <Row>
            <Col md={4} className="mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="d-block w-100 h-100 projectItem"
              />
            </Col>
            <Col md={8}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="techList d-flex">
                  {project.technologies.map((tech) => (
                    <li key={uuid()} className="techStyle">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="button">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaArrowUpRightFromSquare />
                    {' '}
                    See Live
                  </a>
                </button>
                <button type="button" className="button">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    {' '}
                    Source
                  </a>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default RecentWork;
