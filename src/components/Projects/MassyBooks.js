import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousLanding from '../../image/massy-current-landing.jpg';
import previousUserFlow from '../../image/massy-usermap-current.jpg';
import newUserFlow from '../../image/massy-usermap-new.jpg';

import landingWeb from '../../image/massy-landing-desktop.jpg';
import shopWeb from '../../image/massy-shop-desktop.jpg';
import accountWeb from '../../image/massy-account-desktop.jpg';

import landingMobile from '../../image/massy-landing-mobile.jpg';
import hamburger from '../../image/massy-hamburger.jpg';
import shopMobile from '../../image/massy-shop-mobile.jpg';
import accountMobile from '../../image/massy-account-mobile.jpg';

const MassyBooks = () => {
  return (
    <div className="projects-container" id="massybooks-layout">
      <div className="textbox">
        <h1>Website UX Redesign Project <span>&#8545;</span></h1>

        <h2>Massy Books</h2>
        <p>Massy Books is 100% Indigenous owned and operated and a member of the Stó:lō Business Association. We acknowledge we operate on the traditional, ancestral, unceded, and occupied territory of the Musqueam, Squamish, and Tsleil-Waututh Nations.</p>

        <p>project summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        </div>

        <h2 className="textbox">Current Website Landing Screen</h2>
        <img className="big-img" src={previousLanding} alt="previous massy books site screen"/>
        <h2 className="textbox">Current User Flow</h2>
        <img className="big-img" src={previousUserFlow} alt="previous massy books user flow"/>

        <div className="textbox">
          <a href="https://www.massybooks.com/" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Link to Massy Books
          </a>
        </div>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Solution</h1>

          <p>solution summary</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        </div> 
        
        <h2 className="textbox">New User Flow</h2>
        <img className="big-img" src={newUserFlow} alt="new massy books user flow"/>
      </div>

      <div className="projects-secondary-container">
        <div className="web-wireframe">
          <div>
            <h2>Landing page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={landingWeb} alt="landing page desktop wireframe"/>
          </div>

          <div>
            <h2>Shop page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={shopWeb} alt="shop page desktop wireframe"/>
          </div>

          <div>
            <h2>My Account page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={accountWeb} alt="my account page desktop wireframe"/>
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
            <h2>Shop page mobile wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={shopMobile} alt="shop page mobile wireframe"/>
          </div>

          <div>
            <h2>My Account page mobile wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={accountMobile} alt="my account page mobile wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassyBooks;