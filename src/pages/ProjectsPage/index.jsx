import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import data from "../../services/dataProjects";
import "./projects.css";
import ProjectPanel from "../../components/ProjectPanel";
function ProjectsPage() {
  const [projects, setProjects] = useState(data.data);

  return (
    <div className="container-projectspage">
      <Header></Header>
      <main className="projects-container">
        <div className="title-container">
          <h1 className="title-project">MEUS PROJETOS</h1>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            return <ProjectPanel titulo={project.titulo} image={project.img} id={project.id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
