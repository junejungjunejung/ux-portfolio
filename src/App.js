import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './components/Landing/LandingPage';
import DevReact from './components/Projects/DevReact';
import Gover from './components/Projects/Gover';
import MassyBooks from './components/Projects/MassyBooks';
import StreetFood from './components/Projects/StreetFood';
import VPL from './components/Projects/VPL';
import WTC from './components/Projects/WTC';

import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import { createBrowserHistory } from 'history';
import './App.css';

const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  }
}));

const ScrollTop = (props) =>{
  const classes = useStyles();

  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const App = (props) => {
  return (
    <Router history={history}>
      <div id="main-layout">
        <Header />
        <Toolbar id="back-to-top-anchor" />

        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/devreact" component={DevReact} />
          <Route path="/gover" component={Gover} />
          <Route path="/massybooks" component={MassyBooks} />
          <Route path="/streetfood" component={StreetFood} />
          <Route path="/vpl" component={VPL} />
          <Route path="/wtc" component={WTC} />
          <Route path="/" component={LandingPage} />
        </Switch>
      
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <Footer/>
      </div>
  </Router>
  );
}

export default App;
