import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navbar } from "./component/navbar/navbar"
import { default as Aboutme } from "./pages/Aboutme"
import { default as Portfolio } from "./pages/Portfolio"

function App() {
  return (
    <div className="App">
      < Navbar />
      < Aboutme />
        {/* <Route path="/About" exact component={() => <Aboutme />} /> */}

    </div>
  );
}

export default App;
