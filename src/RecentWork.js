import React from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaArrowUpRightFromSquare, FaHandsHoldingCircle } from 'react-icons/fa6';
import projectInfo from './data/projectInfo';
import Footer from './Footer';

const RecentWork = () => {
  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <>
      <div className="projectCard ">
        {projectInfo.map((project) => (
          <div key={project.id}>
            <Row className="border boxshadowRecent projectImg">
              <Col md={4} className="mx-0 px-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="d-block w-100 h-100 projectImg"
                />
              </Col>
              <Col md={8} className="p-4">
                <div>
                  <h3>
                    {project.title}
                    {' '}
                    <span>
                      <FaHandsHoldingCircle className="iconSize" />
                      {' '}
                      {project.made}
                    </span>
                  </h3>
                  <p>{project.description}</p>
                  <ul className="techList d-flex justify-content-between">
                    {project.technologies.map((tech) => (
                      <li key={uuid()} className="techStyle">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-flex justify-content-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="button modalBtn">
                      <FaArrowUpRightFromSquare />
                      {' '}
                      See Live
                    </button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="button modalBtn">
                      <FaGithub />
                      {' '}
                      Source
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="displayNone">
              <p>display none</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RecentWork;
