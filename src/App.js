import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Infos } from "./pages/Infos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default App;
