import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import BirdSearch from "./BirdSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="BirdSearch" />} />
          <Route path="/BirdSearch/*" element={<BirdSearch />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
