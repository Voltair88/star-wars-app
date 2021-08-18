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
          <Accordion key={person.name}>
            <AccordionSummary
              style={{ padding: "0px" }}
              expandIcon={<ExpandMoreIcon />}
            >
              {person.name}
            </AccordionSummary>
            <p>test 2</p> 
            <AccordionDetails>
              <div className="person-details">
                <p>
                  <strong>Birth Year: </strong> {person.birth_year}
                </p>
                <p>
                  <strong>Hair:</strong> {person.hair_color}
                </p>
                <p>
                  <strong>Eye Color:</strong> {person.eye_color}
                </p>
                <p>
                  <strong>Height:</strong> {person.height}
                </p>
                <p>
                  <strong>Weight:</strong> {person.mass}
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Body>
  );
}

export default App;
