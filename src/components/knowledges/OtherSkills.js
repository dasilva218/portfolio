import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const OtherSkills = () => {
  return (
    <div className="otherSkills ">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <FaCheckSquare className="url" />
            Adobe Premiere
          </li>
          <li>
            <FaCheckSquare className="url" />
            Illustrator
          </li>
          <li>
            <FaCheckSquare className="url" />
            Indesign
          </li>
          <li>
            <FaCheckSquare className="url" />
            Photoshop
          </li>

          <li>
            <FaCheckSquare className="url" />
            Access
          </li>
          <li>
            <FaCheckSquare className="url" />
            Excel
          </li>
          <li>
            <FaCheckSquare className="url" />
            Word
          </li>
          <li>
            <FaCheckSquare className="url" />
            Powerpoint
          </li>

          <li>
            <FaCheckSquare className="url" />
            Git & GItHUb
          </li>

          <li>
            <FaCheckSquare className="url" />
            AdobeXD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
