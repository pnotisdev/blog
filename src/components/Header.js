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
          <a href="#">BLOG</a>
          <span className="footdogs"> / </span>
          <a href="#">PHOTOGRAPHY</a>
          <span className="footdogs"> / </span>
          <a href="#">PROJECTS</a>
          <span className="footdogs"> / </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
