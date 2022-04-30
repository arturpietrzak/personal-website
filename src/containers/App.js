import MainPage from "../pages/MainPage";
import SkillsPage from "../pages/SkillsPage";
import "../css/style.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <Navbar handleClick={() => setExpanded(!expanded)} expanded={expanded} />
      <Routes>
        <Route
          path="/"
          element={<MainPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/skills"
          element={<SkillsPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/portfolio"
          element={<MainPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/more"
          element={<MainPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/contact"
          element={<MainPage handleClick={() => setExpanded(false)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
