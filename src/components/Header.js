import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
 toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
      <Toolbar id="header-layout" className={classes.toolbar}>
        <ul id="nav-menu-layout">
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

        <div>
          <Link to="/">June Jung</Link>
        </div>

        <div>
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
        </div>
      </Toolbar>
  );
}

export default Header;