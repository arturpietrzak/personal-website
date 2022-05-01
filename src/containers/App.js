import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainPage from "../pages/MainPage";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";
import MorePage from "../pages/MorePage";

import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop";

import "../css/style.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <ScrollToTop />
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
