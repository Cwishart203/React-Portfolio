import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navbar } from "./component/navbar/navbar"
import { default as AboutMe } from "./pages/AboutMe"
import { default as Portfolio } from "./pages/Portfolio"
import { default as Footer } from "./component/footer/footer"
import { default as ContactMe } from "./pages/ContactMe"

function App() {
  return (
    <Router>
      < Navbar />
      < AboutMe />
      < Portfolio />
      < ContactMe />
      < Footer />
    </Router>
  );
}

export default App;
