import React, { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // State to store project data
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);
  // console.log(projects)
  const handleEyeClick = project => {
    setSelectedProject(project);
  };
  // console.log(selectedProject)
  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {projects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <Link to={`/project-details/${project.id}`}> {/* Include project ID in the URL */}
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye onClick={() => handleEyeClick(project)} />
                  </div>
                  <img src={project.image} alt={project?.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project?.title}</h3>
                <p className="project-category">{project?.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;