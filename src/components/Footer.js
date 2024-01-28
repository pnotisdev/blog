import React from 'react';
import { ReactComponent as GithubIcon } from '../svgs/github-mark-white.svg';

const Footer = () => {
  return (
    <div id="footer">
      <div className="social-media">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

//Not finished, just a simple github image added.