import React from "react";

const ProgressBar = ({ languages, className, title }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>Années d'experience</span>
        <span>1 ans</span>
        <span>3 ans</span>
      </div>

      <div>
        {languages.map((item) => {
          let xpYears = 3;
          let ProgressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <ul>
                <li>{item.value}</li>
              </ul>
              <div className="progressBar" style={{ width: ProgressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
