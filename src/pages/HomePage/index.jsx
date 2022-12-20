import "./home.css";
import perfil from "../../assets/foto.png";
import React from "react";

import Header from "../../components/Header";

function HomePage() {
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <div className="perfil">
          <div className="perfil-blue">
            <img src={perfil} alt="gif" />
          </div>
        </div>
        <div className="info">
          <h1>teste</h1>
          <p>
            Do excepteur reprehenderit voluptate id ea ipsum do. Esse id quis
            ullamco occaecat adipisicing laboris. Commodo velit do ad deserunt
            amet est laboris adipisicing labore fugiat ullamco elit. Et cillum
            in veniam minim quis incididunt. Consectetur amet est ad
            reprehenderit deserunt. Duis pariatur nostrud sint et nulla mollit
            elit voluptate est tempor aute sint ullamco. Laborum irure dolore
            quis consectetur duis cillum incididunt.
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
