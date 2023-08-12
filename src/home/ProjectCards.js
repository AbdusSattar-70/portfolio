import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import projectInfo from '../data/projectInfo.json';
import './home.css';

const ProjectCards = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/recent_work');
  };

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectInfo.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0
      ? projectInfo.length - 1 : prevIndex - 1));
  };

  const currentProject = projectInfo[currentProjectIndex];

  return (
    <div className="d-flex justify-content-between align-items-center m-0 p-0">
      <button
        type="button"
        className="btn btn-primary rounded-end-pill"
        onClick={handlePrevProject}
      >
        Prev
      </button>
      <div className="card project-card">
        <div className="card-overlay">
          <h5 className="card-title">{currentProject.title}</h5>
          <p className="card-text">{currentProject.description}</p>
          <div className="d-flex flex-column align-items-center">
            <Button onClick={handleSeeMore}>See More</Button>
          </div>
        </div>
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="card-img-top img-fluid"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary rounded-start-pill"
        onClick={handleNextProject}
      >
        Next
      </button>
    </div>
  );
};

export default ProjectCards;
