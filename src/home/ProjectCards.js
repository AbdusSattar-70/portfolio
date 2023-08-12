import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import projectInfo from '../data/projectInfo.json';

function ProjectCards() {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/recent_work');
  };

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  if (!projectInfo || projectInfo.length === 0) {
    return <div>No doctors found.</div>;
  }

  const groupSize = 3;
  const totalGroups = Math.ceil(projectInfo.length / groupSize);

  const handleNextGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  };

  const handlePrevGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
  };

  setTimeout(() => {
    handleNextGroup();
  }, 19000);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-0 p-0">
        <button
          type="button"
          className="btn btn-primary rounded-end-pill"
          onClick={handlePrevGroup}
          disabled={currentGroupIndex === 0}
        >
          Prev
        </button>
        <div className="card-group w-100">
          {projectInfo
            .slice(currentGroupIndex * groupSize, (currentGroupIndex + 1) * groupSize)
            .map((project) => (
              <div key={project.id} className="card d-flex align-items-center">
                <img src={project.image} alt={project.name} />
                <div className="card-body">
                  <p className="card-title">{project.name}</p>
                  <p className="card-text">{project.link}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          type="button"
          className="btn btn-primary rounded-start-pill"
          onClick={handleNextGroup}
          disabled={currentGroupIndex === totalGroups - 1}
        >
          Next
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Button onClick={handleSeeMore}>See More </Button>
      </div>
    </>
  );
}

export default ProjectCards;
