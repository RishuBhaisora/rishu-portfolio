import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
