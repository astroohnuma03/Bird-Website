import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home/*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
