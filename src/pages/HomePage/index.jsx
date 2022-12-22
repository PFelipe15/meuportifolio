import "./home.css";
import perfil from "../../assets/foto.png";
import React from "react";
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
            Bom, tenho 20 anos e sou apaixonado pela programação.
          </p>

          <Social />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
