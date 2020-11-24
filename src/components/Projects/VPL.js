import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousAccount from '../../image/vpl-current-account.jpg';
import previousExplore from '../../image/vpl-current-explore.jpg';
import previousSearch from '../../image/vpl-current-search.jpg';

import previousUserFlow from '../../image/vpl-usermap-current.jpg';
import newUserFlow from '../../image/vpl-usermap-new.jpg';

import account from '../../image/vpl-account.jpg';
import book from '../../image/vpl-book.jpg';
import explore from '../../image/vpl-explore.jpg';
import filters from '../../image/vpl-filters.jpg';
import library from '../../image/vpl-library.jpg';
import locations from '../../image/vpl-locations.jpg';
import login from '../../image/vpl-login.jpg';
import plus from '../../image/vpl-plus.jpg';
import search from '../../image/vpl-search.jpg';

const VPL = () => {
  return (
    <div id="vpl-layout">
      <div>
        <h1>Mobile App UX Redesign Project <span>&#8544;</span></h1>
        <p>project summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
      </div>

      <div>
        <h2>Vancouver Public Library Mobile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <a href="https://apps.apple.com/app/vpl-mobile/id422360968?l=en" className="website-links" target="_blank" rel="noopener noreferrer">
          <ArrowForwardIcon /> Link to App Store
        </a>
        <div>
          <div>
            <p>Previous Explore Screen</p>
            <img src={previousExplore} alt="previous vpl explore screen"/>
          </div>

          <div>
            <p>Previous Search Screen</p>
            <img src={previousSearch} alt="previous vpl search screen"/>
          </div>

          <div>
            <p>Previous My VPL Screen</p>
            <img src={previousAccount} alt="previous vpl my account screen"/>
          </div>
        </div>
      </div>

      <div>
        <h2>Previous User Flow</h2>
        <p>problem summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <img src={previousUserFlow} alt="previous vpl user flow"/>
      </div>

      <div>
        <h2>New User Flow</h2>
        <p>solution summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <img src={newUserFlow} alt="new vpl user flow"/>
      </div>

      <div className="projects-secondary-container">
        <div className="mobile-wireframe">
          <div>
            <h2>Login wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={login} alt="login wireframe"/>
          </div>

          <div>
            <h2>Explore wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={explore} alt="explore wireframe"/>
          </div>

          <div>
            <h2>Individual book wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={book} alt="individual book wireframe"/>
          </div>

          <div>
            <h2>Search wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={search} alt="search wireframe"/>
          </div>

          <div>
            <h2>Search filters wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={filters} alt="search filters wireframe"/>
          </div>

          <div>
            <h2>Plus icon wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={plus} alt="plus icon wireframe"/>
          </div>

          <div>
            <h2>My VPL wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={account} alt="my vpl wireframe"/>
          </div>

          <div>
            <h2>Locations wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={locations} alt="locations wireframe"/>
          </div>

          <div>
            <h2>Individual library wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={library} alt="library wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VPL;