import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navbar } from "./component/navbar/navbar"
import { default as AboutMe } from "./pages/AboutMe"
import { default as Portfolio } from "./pages/Portfolio"
import { default as Footer } from "./component/footer/footer"

function App() {
  return (
    <div className="App">
      < Navbar />
      < AboutMe />
      < Portfolio />
      < Footer />
    </div>
  );
}

export default App;
