import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Home } from "./pages/Home";
import { Infos } from "./pages/Infos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default App;
