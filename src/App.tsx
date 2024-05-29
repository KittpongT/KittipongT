import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Inteoty from "./assets/w545.png";
import AboutMe from "./components/AboutMe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundImage: `url(${Inteoty})` }}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/AboutMe" element={<AboutMe></AboutMe>} />
      </Routes>
    </div>
  );
}

export default App;
