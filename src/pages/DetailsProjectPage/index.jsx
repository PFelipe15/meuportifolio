import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import "./detailsproject.css";
import { AiFillGithub } from "react-icons/ai";
import data from "../../services/dataProjects";
function DetailsProjectPage() {
  const { id } = useParams();

  const [project, setProject] = useState(
    data.data.find((project) => {
      return project.id == id;
    })
  );
  const [tecnologias, setTecnologias] = useState(project.tecnologias);
  return (
    <div className="container-detailsProjectPage">
      <Header />
      <main className="main-details">
        <div className="img-project">
          <img src={project.img} alt="teste" />
          <div className="tecnologia-container">
            <h3>TECNOLOGIAS USADAS:</h3>
            {tecnologias.map((item) => {
              return <h3 className="title-tecnologia">{item}</h3>;
            })}
          </div>
        </div>
        <div className="info-project">
          <h1>{project.titulo}</h1>
          <h3>{project.Descricao}</h3>

          <div className="link-container">
            <a href={project.link} target="_blank">
              Clique aqui para abrir o Repositorio:{" "}
              <AiFillGithub size={35} color="#fff" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailsProjectPage;
