import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as client from "../client.ts";
import DOMPurify from "dompurify";

export default function BirdCard() {
  const params = useParams();
  const bird_name = params.birdName;

  const [bird, setBird] = useState<any>({});
  const [loading, setLoading] = useState(true);
 
  const get_bird = async () => {
    const new_bird = await client.get_bird(bird_name as string);
    setBird(new_bird);
    setLoading(false);
    console.log(new_bird);
  };

  useEffect(() => {
    get_bird();
  }, [bird_name]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="bird-card">
      <Link to="/BirdSearch">Back</Link>
      <h2> {bird.name} </h2>
      <h2> <i>{bird.scientificName}</i> </h2>
      <img src={bird.image} alt={bird.name} width="200px" />
      <h4> Family: {bird.family} </h4>
      <h4> Genus: {bird.genus} </h4>
      {bird.sections?.map((section: any) => (
        <div>
          <h4> {section.title}: </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(section.text)
            }}
          />
        </div>
      ))}
    </div>
  );
}