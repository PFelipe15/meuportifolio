import "./header.css";

import React, { useState } from "react";
import LogoName from "../LogoName";
import { Link } from "react-router-dom";
import { NavigationContext } from "../../contexts/navContext";
import { useContext, useEffect } from "react";
function Header() {
  const { navigation, setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    if (navigation >= 0) {
      let navs = document.querySelectorAll(".header-container .nav ul a li ");
      navs[navigation].style.color = "white";
      
    }
  });

  return (
    <header className="header-container">
      <div className="logo">
        <LogoName></LogoName>
      </div>
      <nav className="nav">
        <ul className="menu">
          <Link to={"/"}>
            <li
              onClick={() => {
                setNavigation(0);
              }}
            >
              {" "}
              MENU
            </li>
          </Link>

          <Link to={"/Projetos"}>
            <li
              onClick={() => {
                setNavigation(1);
              }}
            >
              {" "}
              PROJETOS
            </li>
          </Link>
          <Link to={"/Contatos"}>
            <li
              onClick={() => {
                setNavigation(2);
              }}
            >
              {" "}
              CONTATOS
            </li>
          </Link>
        </ul>

        <div className="menu-hidden"></div>
      </nav>
    </header>
  );
}

export default Header;
