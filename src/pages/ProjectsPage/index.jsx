import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import data from "../../services/dataProjects";
import foto from "../../assets/corona.png";
import "./projects.css";
import ProjectPanel from "../../components/ProjectPanel";
function ProjectsPage() {
  const [projects, setProjects] = useState(data.data);

  return (
    <div className="container">
      <Header />
      <div className="projects-container">
        <h1>MEUS PROJETOS</h1>
        <div className="project-list">
          {projects.map((project) => {
            return  (
              <ProjectPanel titulo={project.titulo} image={project.img}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
