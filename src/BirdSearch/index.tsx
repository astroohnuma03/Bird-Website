import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Card from "./Card";
export default function BirdSearch() {
  const bird = {
    _id: "1", name: "New bird", scientificName: "New scientific bird",
    sections: {}, image: "New image", family: "New family", genus: "New genus"
  };

  return (
    <div id="birdsearch">
      <Routes>
        <Route path="/" element={<Navigate to="/BirdSearch/Home"/>} />
        <Route path="Home" element={<Home />} />
        <Route path="/Birds/:bid" element={<Card bird={bird}/>}/>
      </Routes>
    </div>
  );
}