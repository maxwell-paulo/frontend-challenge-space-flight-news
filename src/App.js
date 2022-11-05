import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Searchbar } from "./components/Searchbar/Searchbar.js";
import { Home } from "./pages/Home";
import { Infos } from "./pages/Infos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default App;
