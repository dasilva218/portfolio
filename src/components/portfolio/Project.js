import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Project = (props) => {
  // State
  let [showInfo, setshowInfo] = useState(false);
  // Data
  const { name, languagesIcons, info, picture } = props.item;
  // Events
  let handleInfo = () => setshowInfo(!showInfo);
  // View
  return (
    <div className="project ">
      <div className="icons">
        {languagesIcons.map(
          (icon) => icon
          // <i className={icon} key={icon}></i>
        )}
      </div>
      <h3>{name}</h3>
      <img src={picture} alt="" onClick={handleInfo} />
      <span className="infos">
        <FaPlusCircle className="fas fa-plus-circle" onClick={handleInfo} />
      </span>

      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
            </div>
            <p className="text">{info}</p>
            <div className="button return" onClick={handleInfo}>
              retour sur la page
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
