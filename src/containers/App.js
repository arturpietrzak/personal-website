import MainPage from "../pages/MainPage";
import "../css/style.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/skills" element={<MainPage />} />
        <Route path="/projects" element={<MainPage />} />
        <Route path="/more" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
