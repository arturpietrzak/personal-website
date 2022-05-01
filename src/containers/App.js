import MainPage from "../pages/MainPage";
import SkillsPage from "../pages/SkillsPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import MorePage from "../pages/MorePage";
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
          element={<PortfolioPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/contact"
          element={<ContactPage handleClick={() => setExpanded(false)} />}
        />
        <Route
          path="/more"
          element={<MorePage handleClick={() => setExpanded(false)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
