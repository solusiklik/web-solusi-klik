import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./home/Why";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
