import logo from './logo.svg';
import './App.css';
import { default as Aboutme } from "./pages/Aboutme"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Aboutme />
        {/* <Route path="/About" exact component={() => <Aboutme />} /> */}

    </div>
  );
}

export default App;
