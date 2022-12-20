import "./home.css";
import perfil from "../../assets/foto.png";
import React from "react";
import Social from "../../components/Social";
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
          <h1>WEB DEVELOPER</h1>
          <p>
            Olá, me chamo Paulo Felipe. Nostrud consectetur non adipisicing
            Lorem laboris officia irure consequat cillum nostrud. Laborum qui
            dolor irure consectetur exercitation velit ex cupidatat sunt
            proident consectetur laborum labore. Ipsum enim quis consectetur ea
            est nisi eiusmod nostrud magna amet nulla.
          </p>
          <Social />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
