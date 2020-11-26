import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import thumbnail from '../../image/rectangle.jpg';

const StreetFood = () => {
  return (
    <div className="projects-container" id="streetfood-layout">
      <div>
        <h1>Mobile App UX Redesign Project <span>&#8545;</span></h1>

        <h2>Street Food App</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>

        <p>project summary</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
      </div>

      <div>
        <h1>Problem Analysis</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>

        <div>
          <h2>Current App Screens</h2>
          
          <div>
            <p>Current Map Screen</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <p>Current List Screen</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <p>Current More Screen</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>
        </div>

        <div>
          <h2>Current User Flow</h2>
          <img src={thumbnail} alt="thumbnail"/>
        </div>

        <a href="https://apps.apple.com/app/street-food-vancouver/id412748042?l=en" className="website-links" target="_blank" rel="noopener noreferrer">
          <ArrowForwardIcon /> Link to App Store
        </a>
      </div>

      <div className="projects-secondary-container">
        <div>
          <h1>Solution</h1>

          <p>solution summary</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
          
          <h2>New User Flow</h2>
          <img src={thumbnail} alt="thumbnail"/>
        </div>

        <div className="app-wireframe">
          <div>
            <h2>Splash screen wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (landing) wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (location selected) wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>Change city wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>List wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>Individual food truck wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>More wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>

          <div>
            <h2>Manage my truck wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={thumbnail} alt="thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetFood;