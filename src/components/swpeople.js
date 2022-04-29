import { useState, useEffect } from "react";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchData } from "../utils/api";

export function List() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setPeople(response));
  }, []);

  const search = (term) => {
    fetch("https://swapi.dev/api/people/?search=" + term)
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results);
      });
  };

  //fetchdata is loading

  return (
    <div>
      <div className="people">
        <input
          type="text"
          placeholder="Search for a person"
          onChange={(e) => search(e.target.value)}
          className="search"
        />
        {people.length < 1 ? (
          <div>Loading...</div>
        ) : (
          people.map((person) => (
            <Accordion key={person.name}>
              <AccordionSummary
                style={{ padding: "0px" }}
                expandIcon={<ExpandMoreIcon />}
              >
                {person.name}
              </AccordionSummary>
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
          ))
        )}
      </div>
    </div>
  );
}
