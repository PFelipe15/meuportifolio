import { useState } from "react";

import "./App.css";
import {Routes, Route} from 'react-router-dom'
import LogoName from "./components/LogoName";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DetailsProjectPage from "./pages/DetailsProjectPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Projetos" element={<ProjectsPage />} />
      <Route path="/Details/:id" element={<DetailsProjectPage />} />
      <Route path="/Contatos" element={<ContactsPage />} />
    </Routes>
     
  );
}

export default App;
