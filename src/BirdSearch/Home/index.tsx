import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import { FaSearch } from "react-icons/fa";
import * as client from "../client";

export default function Home() {
  var search = "";
  //const navigate = useNavigate();
  const bird_lookup = async () => {
    const bird = await client.get_bird(search)
    console.log(bird);
  };
  return (
    <Container fluid>
      <h1>Bird</h1>
      <p>This will be the home page</p>
      <img src="/images/bird.jpg" alt="Image of a crow" width="200px"/>
      <InputGroup className="w-50 mx-auto rounded my-4" size="lg">
        <Button onClick={bird_lookup} variant="outline-dark" id="search-bar-submit" className="px-4 fs-5 text-dark">
          <FaSearch />
        </Button>
        <Form.Control className="flex-fill px-3 py-2 fs-5"
                      placeholder="Search for your favorite bird..."
                      aria-label="Bird search bar"
                      onChange={(e) => search = e.target.value}/>
      </InputGroup>
    </Container>
  );
}