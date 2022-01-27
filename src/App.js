import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as Navbar } from "./component/navbar/navbar"
import { default as AboutMe } from "./pages/AboutMe"
import { default as Portfolio } from "./pages/Portfolio"
import { default as Footer } from "./component/footer/footer"
import { default as ContactMe } from "./pages/ContactMe"

function App() {
  return (
    <Router>
      < Navbar />
        <Routes>
          <Route path="/react-portfolio/" element={<AboutMe />} />
          <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio/contact" element={<ContactMe />} />
        </Routes>
      < Footer />
    </Router>
  );
}

export default App;
