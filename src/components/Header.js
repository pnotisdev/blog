import React from 'react';

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="logodiv">
        <a href="index.html">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="REACT" />
        </a>

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
