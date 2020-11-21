import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import previousLanding from '../../image/wtc landing screen.jpg';
import previousUserFlow from '../../image/Women transforming cities_User map-Current Usermap.jpg';
import newUserFlow from '../../image/Women transforming cities_User map-New Usermap.jpg';

import landingWeb from '../../image/Landing Desktop.jpg';
import aboutWeb from '../../image/About Desktop.jpg';
import eventWeb from '../../image/Events Desktop.jpg';

import landingMobile from '../../image/Landing Mobile.jpg';
import navMobile from '../../image/Hamburger Menu Mobile.jpg';
import aboutMobile from '../../image/About Mobile.jpg';
import eventMobile from '../../image/Events Mobile.jpg';

const WTC = () => {
  return (
    <div className="projects-container" id="wtc-layout">
      <div>
        <h1>Website UX Redesign Project <span>&#8544;</span></h1>
        <p>project summary</p>
        <p>project summary</p>
        <p>project summary</p>
        <p>project summary</p>
      </div>

      <div>
        <h2>Women Transforming Cities</h2>
        <p>WTC is a nonprofit organization based in Vancouver, Canada that works to educate, promote awareness and take action on issues such as affordable housing, violence against women, leadership, electoral reform, aboriginal women’s priorities, and the environment.</p>
        <a href="https://www.womentransformingcities.org/" className="website-links" target="_blank" rel="noopener noreferrer">
          <ArrowForwardIcon /> Link to WTC
        </a>
        <img src={previousLanding} alt="previous wtc site screen"/>
      </div>

      <div>
        <h2>Previous User Flow</h2>
        <p>problem summary</p>
        <p>problem summary</p>
        <p>problem summary</p>
        <p>problem summary</p>
        <img src={previousUserFlow} alt="previous wtc user flow"/>
      </div>

      <div>
        <h2>New User Flow</h2>
        <p>solution summary</p>
        <p>solution summary</p>
        <p>solution summary</p>
        <p>solution summary</p>
        <img src={newUserFlow} alt="new wtc user flow"/>
      </div>

      <div className="web-wireframe">
        <div>
          <h2>Landing page desktop wireframe</h2>
          <p>summary</p>
          <img src={landingWeb} alt="landing page desktop wireframe"/>
        </div>

        <div>
          <h2>About page desktop wireframe</h2>
          <p>summary</p>
          <img src={aboutWeb} alt="about page desktop wireframe"/>
        </div>

        <div>
          <h2>Events page desktop wireframe</h2>
          <p>summary</p>
          <img src={eventWeb} alt="events page desktop wireframe"/>
        </div>
      </div>

      <div className="mobile-wireframe">
        <div>
          <h2>Landing page mobile wireframe</h2>
          <p>summary</p>
          <img src={landingMobile} alt="landing page mobile wireframe"/>
        </div>

        <div>
          <h2>Mobile navigation menu wireframe</h2>
          <p>summary</p>
          <img src={navMobile} alt="navigation menu mobile wireframe"/>
        </div>

        <div>
          <h2>About page mobile wireframe</h2>
          <p>summary</p>
          <img src={aboutMobile} alt="about page mobile wireframe"/>
        </div>

        <div>
          <h2>Events page mobile wireframe</h2>
          <p>summary</p>
          <img src={eventMobile} alt="event page mobile wireframe"/>
        </div>
      </div>
    </div>
  );
}

export default WTC;