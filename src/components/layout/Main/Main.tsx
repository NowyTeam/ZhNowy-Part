import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import { Routes, Route } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
