import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as client from "../client.ts";

export default function BirdCard() {
  const { bird_name } = useParams();
  let bird = {
    _id: "1", name: "New bird", scientificName: "New scientific bird", sections: [],
    image: "Image of new bird", family: "New family", genus: "New genus"
  };
  const get_bird = async () => {
    const new_bird = await client.get_bird(bird_name as string);
    bird = new_bird;
  };
  const sections = bird.sections;
  useEffect(() => {
    get_bird();
  }, []);
  return (
    <div id="bird-card">
      <Link to="/BirdSearch">Back</Link>
      <h2> {bird.name} </h2>
      <h2> {bird.scientificName} </h2>
      <img src={bird.image} alt={bird.name} width="200px" />
      <h4> {bird.family} </h4>
      <h4> {bird.genus} </h4>
      {sections.map((section: any) => (
        <div>
          <h4> {section.title}: </h4>
          <p> {section.text} </p>
        </div>
      ))}
    </div>
  );
}