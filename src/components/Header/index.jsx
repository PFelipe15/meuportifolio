import "./header.css";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import LogoName from "../LogoName";

function Header() {
  function getMenu() {
    let menu = document.querySelector(".header-container .nav .menu-Mobile");
    let menuDesktop = document.querySelector(".header-container .nav .menu-Desktop");
    let logo = document.querySelector(".header-container .logo-Mobile");
    if (menu.style.display == "flex") {
      menu.style.display = "none";
      logo.style.display = "flex";
    } else {
      menu.style.display = "flex";
      logo.style.display = "none";
    }
  }

  return (
    <header className="header-container">
      <div className="logo">
        <LogoName></LogoName>
      </div>
      <nav className="nav">
        <ul className="menu">
          <a href="#">
            <li> MENU</li>
          </a>
          <a href="#">
            <li> PROJETOS</li>
          </a>
          <a href="#">
            <li> CONTATOS</li>
          </a>
        </ul>

       

        <div className="menu-hidden">
           
        </div>
      </nav>
    </header>
  );
}

export default Header;
