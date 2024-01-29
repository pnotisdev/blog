import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="logodiv">
      <Link to="/">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" />
        </Link>

        <div className="filter">
          <Link to="/">BLOG</Link>
          <span className="footdogs"> / </span>
          <Link to="/code-projects">CODE PROJECTS</Link>
          <span className="footdogs"> / </span>
          <Link to="/about-me">ABOUT ME</Link>
          <span className="footdogs"> / </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
