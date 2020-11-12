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

import { createBrowserHistory } from 'history';
import './App.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
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
        <Footer />
      </div>
  </Router>
  );
}

export default App;
