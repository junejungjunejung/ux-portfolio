import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import logo from '../image/jj-logo.jpg';

import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
 toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <div>
      <Toolbar id="header-layout" className={classes.toolbar}>

        <IconButton
          id="nav-hamburger-button"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(open, true)}
          edge="start"
        >
          <img src={logo} id="jj-logo" alt="june jung logo"/>
        </IconButton>

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

        <div id="june-jung">
          <Link to="/">June Jung</Link>
        </div>

        <div id="nav-social">
          <a href="https://www.linkedin.com/in/junejungjunejung/" className="social-links" target="_blank" rel="noopener noreferrer">
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </a>

          <a href="https://github.com/junejungjunejung" className="social-links" target="_blank" rel="noopener noreferrer">
            <IconButton color="inherit">
              <GitHub />
            </IconButton>
          </a>
        </div>
      </Toolbar>

      <Drawer
        anchor="left"
        open={open}
      >
        <div id="drawer-close-bttn">
          <IconButton onClick={toggleDrawer(open, false)}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
        <Divider />

        <div id="drawer-layout">
          <div
            id="nav-hamburger"
            onClick={toggleDrawer(open, false)}
            onKeyDown={toggleDrawer(open, false)}
            >
            <Link to="/"><div>Projects</div></Link>
            <Link to="/about"><div>About</div></Link>
            <Link to="/contact"><div>Contact</div></Link>
          </div>

          <div id="nav-social-hamburger">
            <a href="https://www.linkedin.com/in/junejungjunejung/" className="social-links" target="_blank" rel="noopener noreferrer">
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
            </a>

            <a href="https://github.com/junejungjunejung" className="social-links" target="_blank" rel="noopener noreferrer">
              <IconButton color="inherit">
                <GitHub />
              </IconButton>
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;