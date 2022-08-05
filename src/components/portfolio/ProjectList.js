import React, { useState } from "react";
import { portfolioData, radio } from "../../data/portfolioData";
import Project from "./Project";

const ProjectList = () => {
  const [data] = useState(portfolioData);
  const [radios] = useState(radio);

  const [selectedRadio, setselectedRadio] = useState("javascript");

  const handleRadio = function (e) {
    let radio = e.target.value;
    setselectedRadio(radio);
  };

  return (
    <div className="portfolioContent ">
      <ul className="radioDisplay">
        {radios.map((radio) => {
          return (
            <li key={radio.id}>
              <input
                type="radio"
                name="radio"
                checked={radio.value === selectedRadio}
                value={radio.value}
                id={radio.value}
                onChange={handleRadio}
              />
              <label htmlFor={radio.value}>{radio.value}</label>
            </li>
          );
        })}
      </ul>

      <div className="projects">
        {data
          .filter((item) => item.languages.includes(selectedRadio))
          .map((item) => {
            return <Project key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ProjectList;
