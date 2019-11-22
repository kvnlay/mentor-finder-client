import React from "react";
import { GiBackup } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <a href="/">
          <GiBackup size={40} style={{ color: "#007bff" }} />
        </a>
        <p>
          Mentor Finder is a platform for professionals to find and vet mentors
          across specialties. Finding a mentor can be challenging.
        </p>
      </div>
      <ul>
        <h3>FEATURES</h3>
        <li>
          <Link to="/">Find Mentors</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <ul>
        <h3>COMPANY</h3>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <h3>FOLLOW</h3>
        <ul>
          <li>
            <a
              href="https://www.twitter.com/kvnlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/kingsley-omotayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kvnlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
