import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Tippy from '@tippyjs/react';
import projectInfo from '../data/projectInfo';

const ProjectCards = () => {
  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div className="projectCard">
      {projectInfo.map((project) => (
        <Link to={`/recent_work/${project.id}`} key={project.id}>
          <Tippy content="To See Project Details Please Click On It">
            <div className="boxshadow">
              <img
                src={project.image}
                alt={project.title}
                className="d-block w-100 h-100"
              />
              <p>{project.title}</p>
              <ul className="d-flex justify-content-between">
                {project.technologies.map((tech) => <li key={uuid()} className="techStyle">{tech}</li>)}
              </ul>
            </div>
          </Tippy>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
