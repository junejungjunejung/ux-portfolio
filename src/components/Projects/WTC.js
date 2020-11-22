import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousLanding from '../../image/wtc-current-landing.jpg';
import previousUserFlow from '../../image/wtc-usermap-current.jpg';
import newUserFlow from '../../image/wtc-usermap-new.jpg';

import landingWeb from '../../image/wtc-landing-desktop.jpg';
import aboutWeb from '../../image/wtc-about-desktop.jpg';
import eventWeb from '../../image/wtc-events-desktop.jpg';

import landingMobile from '../../image/wtc-landing-mobile.jpg';
import hamburger from '../../image/wtc-hamburger.jpg';
import aboutMobile from '../../image/wtc-about-mobile.jpg';
import eventMobile from '../../image/wtc-events-mobile.jpg';

const WTC = () => {
  return (
    <div className="projects-container" id="wtc-layout">
      <div>
        <h1>Website UX Redesign Project <span>&#8544;</span></h1>
        <p>project summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <img src={previousUserFlow} alt="previous wtc user flow"/>
      </div>

      <div>
        <h2>New User Flow</h2>
        <p>solution summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <img src={newUserFlow} alt="new wtc user flow"/>
      </div>

      <div className="projects-secondary-container">
        <div className="web-wireframe">
          <div>
            <h2>Landing page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={landingWeb} alt="landing page desktop wireframe"/>
          </div>

          <div>
            <h2>About page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={aboutWeb} alt="about page desktop wireframe"/>
          </div>

          <div>
            <h2>Events page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={eventWeb} alt="events page desktop wireframe"/>
          </div>
        </div>

        <div className="mobile-wireframe">
          <div>
            <h2>Landing page mobile wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={landingMobile} alt="landing page mobile wireframe"/>
          </div>

          <div>
            <h2>Mobile navigation menu wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={hamburger} alt="navigation menu mobile wireframe"/>
          </div>

          <div>
            <h2>About page mobile wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={aboutMobile} alt="about page mobile wireframe"/>
          </div>

          <div>
            <h2>Events page mobile wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={eventMobile} alt="event page mobile wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WTC;