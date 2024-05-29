import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Inteoty from "./assets/w545.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${Inteoty})` }}>
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
