import { useState } from "react";

import "./App.css";
import {Routes, Route} from 'react-router-dom'
import LogoName from "./components/LogoName";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Projetos" element={<ProjectsPage />} />
    </Routes>
    </div>
  );
}

export default App;
