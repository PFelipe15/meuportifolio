import "./projectpanel.css";

import React from "react";
import { Link } from "react-router-dom";
 

function ProjectPanel({ titulo, image, id }) {
  return (
    <div className="project-container">
      <h1>{titulo}</h1>
      <img src={image} alt="imageRepository" />
      <Link to={`/details/${id}`} params>
        <button>Ver mais</button>
      </Link>
    </div>
  );
}

export default ProjectPanel;
