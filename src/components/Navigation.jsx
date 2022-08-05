import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "./Photo";
import { FaCog, FaGithub, FaHome, FaLeanpub } from "react-icons/fa";

const Navigation = () => {

  let date = new Date()
  const d = date.getFullYear()
  return (
    <section className="sidebar main_item">
      <div className="content_profil">
        <Photo />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              <FaHome className="icon" />
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              <FaLeanpub className="icon" />
              Competences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              <FaCog className="icon" />
              Realisations
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon ico_social" />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>&copy; {`da silva ${d}`} </p>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
