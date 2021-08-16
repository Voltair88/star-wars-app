import { useState, useEffect } from "react";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Body } from "./styles";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results);
      });
  }, []);
  const search = (term) => {
    fetch("https://swapi.dev/api/people/?search=" + term)
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results);
      });
  };
  return (
    <Body>
      <div className="people">
        <input
          type="text"
          placeholder="Search for a person"
          onChange={(e) => search(e.target.value)}
          className="search"
        />
        {people.map((person) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {person.name}
            </AccordionSummary>
            <AccordionDetails>
              <div className="person-details">
                <span>Height: {person.height}Cm </span> <br />
                <span>Mass: {person.mass}Kg </span> <br />
                <span>Hair Color: {person.hair_color} </span> <br />
                <span>Eye Color: {person.eye_color} </span> <br />
                <span>Birth Year: {person.birth_year} </span> <br />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Body>
  );
}

export default App;
