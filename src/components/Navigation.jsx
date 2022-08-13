import React from "react";
import { FaCog, FaGithub, FaHome, FaLeanpub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import photoProfil from "../wil.jpg";

const Navigation = () => {
  let date = new Date();
  const d = date.getFullYear();
  return (
    <section className="sidebar">
      <div className="content-profil">
        <div className="content-image">
          <img src={photoProfil} alt="photoprofil" />
          <h3>da silva wilfrid</h3>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <FaHome className="icon" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <FaLeanpub className="icon" />
              <span>Competences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/realisations"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <FaCog className="icon" />
              <span>Realisations</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/dasilva218"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="ico_social" />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>&copy; da silva {d}</p>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
