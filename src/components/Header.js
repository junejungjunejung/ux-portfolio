import React from 'react';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';

const Header = () => {
  return (
    <header id="header-layout">
      <div>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/">June Jung</Link>
      </div>

      <a href="https://www.linkedin.com/in/junejungjunejung/" className="Social-links" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit">
          <LinkedIn />
        </IconButton>
      </a>

      <a href="https://github.com/junejungjunejung" className="Social-links" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit">
          <GitHub />
        </IconButton>
      </a>
    </header>
  );
}

export default Header;