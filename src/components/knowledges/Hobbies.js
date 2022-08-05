import React from "react";
import { FaEyeDropper, FaMusic, FaSearch } from "react-icons/fa";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <FaMusic className="i" />
          <span>Musique</span>
        </li>
        <li className="hobby">
          <FaSearch className="i" />
          <span>Recherche</span>
        </li>
        <li className="hobby">
          <FaEyeDropper className="i" />
          <span>Science</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
