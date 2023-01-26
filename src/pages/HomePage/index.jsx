import "./home.css";
import perfil from "../../assets/javascript.png";
import React, { useEffect } from "react";
import Social from "../../components/Social";
import Header from "../../components/Header";
 



function HomePage() {


  return (
    <div className="container-homepage ">
      <Header></Header>
      <main className="main">
        {<div className="perfil">
          <div className="perfil-blue">
            {<img src={perfil} alt="gif" />}


          </div>
          <div className="perfil-habilidades"></div>
        </div>}
        <div className="info">
          <h1>WEB DEVELOPER jr </h1>
          <p>
          Meu nome é Paulo Felipe, tenho 20 anos e sou natural do Interior do Maranhão, localizado no nordeste do Brasil. Desde cedo, sempre fui uma pessoa preocupada em ajudar os outros e buscar o bem-estar coletivo. Eu acredito que a tecnologia tem um papel fundamental nesse processo e, por isso, me apaixonei pela programação.

Atualmente, estou estudando Programação WEB, a minha especialidade é HTML, CSS e JavaScript, que são as principais bases utilizadas para construir uma extrutura Web. Além disso, estou cursando uma graduação em Sistemas para Internet, que esta me capacitando mais nessa aréa.

Mas, além da minha formação acadêmica, eu também tenho experiência em projetos pessoais baseados em REACTJS e REACT-NATIVE, tive uma experiência em grupo para o desenvovilmento de um sistema de doações de cestas Basicas.

Eu estou sempre em busca de novos desafios e busco minha primeira oportunidade para crescer como desenvolvedor. Acredito que a programação é uma ferramenta poderosa para mudar o mundo e quero fazer parte desse processo.
          </p>
          <Social />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
