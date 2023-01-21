import "./home.css";
import perfil from "../../assets/foto.png";
import React, { useEffect } from "react";
import Social from "../../components/Social";
import Header from "../../components/Header";
 
function HomePage() {
 
 

  return (
    <div className="container-homepage ">
      <Header></Header>
      <main className="main">
        <div className="perfil">
          <div className="perfil-blue">
            <img src={perfil} alt="gif" />
          </div>
          <div className="perfil-habilidades"></div>
        </div>
        <div className="info">
          <h1>WEB DEVELOPER jr </h1>
          <p>
            Olá, me chamo Paulo Felipe, tudo Bem?
            <br />
            Bom, tenho 20 anos e sou apaixonado pela programação, à área que
            tenho por estudo é a de Programação WEB, constituida pela base que é
            HTML, CSS e JAVASCRIPT, atualmente estou cursando o Superior em{" "}
            <span className="lg">
              <a
                target={"_blank"}
                href="https://querobolsa.com.br/cursos-e-faculdades/sistemas-para-internet  "
              >
                SISTEMAS PARA INTERNET.
              </a>
            </span>
            &nbsp; Além disso, estudo e tenho experiências de projetos pessoais
            com algumas tecnologias e bibliotecas baseadas em JS, destaco aqui o
            REACTJS E REACT-NATIVE.
          </p>
          <Social />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
