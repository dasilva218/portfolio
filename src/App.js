import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portefolio from "./pages/Portefolio";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Knowledges />} />
            <Route path="/portfolio" element={<Portefolio />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
