import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import BirdCard from "./Card";
export default function BirdSearch() {

  return (
    <div id="birdsearch">
      <Routes>
        <Route path="/" element={<Navigate to="/BirdSearch/Home"/>} />
        <Route path="Home" element={<Home />} />
        <Route path="/Birds/:birdName" element={<BirdCard />}/>
      </Routes>
    </div>
  );
}