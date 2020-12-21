import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousList from '../../image/sf-current-list.jpg';
import previousMap from '../../image/sf-current-map.jpg';
import previousTruckDetail from '../../image/sf-current-truck-detail.jpg';

import previousUserFlow from '../../image/sf-usermap-current.jpg';
import newUserFlow from '../../image/sf-usermap-new.jpg';

import cities from '../../image/sf-cities.jpg';
import list from '../../image/sf-list.jpg';
import map from '../../image/sf-map.jpg';
import mapPinned from '../../image/sf-map-pinned.jpg';
import more from '../../image/sf-more.jpg';
import myTruck from '../../image/sf-my-truck.jpg';
import splash from '../../image/sf-splash.jpg';
import truckDetail from '../../image/sf-truck-detail.jpg';

const StreetFood = () => {
  return (
    <div className="projects-container" id="streetfood-layout">
      <div className="textbox">
        <h1>Mobile App UX Redesign Project <span>&#8545;</span></h1>

        <h2>Street Food App</h2>
        <p>A mobile app provides location and schedule of city's food trucks.</p>

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

        <h2 className="textbox">Current App Screens</h2>
        <div className="current-app-screen">      
          <div>
            <p>Current Map Screen</p>
            <img src={previousMap} alt="thumbnail"/>
          </div>

          <div>
            <p>Current List Screen</p>
            <img src={previousList} alt="thumbnail"/>
          </div>

          <div>
            <p>Current Food Truck Detail Screen</p>
            <img src={previousTruckDetail} alt="thumbnail"/>
          </div>
        </div>

        <div>
          <h2 className="textbox">Current User Flow</h2>
          <img className="big-img" src={previousUserFlow} alt="thumbnail"/>
        </div>

        <div className="textbox">
          <a href="https://apps.apple.com/app/street-food-vancouver/id412748042?l=en" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Link to App Store
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
        
        <div>
          <h2 className="textbox">New User Flow</h2>
          <img className="big-img" src={newUserFlow} alt="thumbnail"/>
        </div>

        <div className="app-wireframe">
          <div>
            <h2>Splash screen wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={splash} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (landing) wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={map} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (location selected) wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={mapPinned} alt="thumbnail"/>
          </div>

          <div>
            <h2>Change city wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={cities} alt="thumbnail"/>
          </div>

          <div>
            <h2>List wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={list} alt="thumbnail"/>
          </div>

          <div>
            <h2>Individual food truck wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={truckDetail} alt="thumbnail"/>
          </div>

          <div>
            <h2>More wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={more} alt="thumbnail"/>
          </div>

          <div>
            <h2>Manage my truck wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={myTruck} alt="thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetFood;