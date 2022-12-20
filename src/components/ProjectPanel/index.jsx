import "./projectpanel.css";

import React from "react";

// import { Container } from './styles';

function ProjectPanel({ titulo, image }) {
  return (
    <div className="project-container">
      <h1>{titulo}</h1>
      <img src={image} alt="imageRepository" />
      <button>Ver mais</button>
    </div>
  );
}

export default ProjectPanel;
