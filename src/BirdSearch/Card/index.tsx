import { Link } from "react-router-dom";

export default function BirdCard({ bird }: { bird: any; }) {
  const sections = bird.sections;

  return (
    <div id="bird-card">
      <Link to="/BirdSearch">Back</Link>
      <h2> {bird.name} </h2>
      <h2> {bird.scientificName} </h2>
      <img src={bird.image} alt={bird.name} width="200px" />
      <h4> {bird.family} </h4>
      <h4> {bird.genus} </h4>
      {sections.forEach((value: string, key: string) => {
        <div>
          <h4> {key}: </h4>
          <p> {value} </p>
        </div>
      })}
    </div>
  );
}