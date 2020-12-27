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
        <p>Street Food has over 1,000 food trucks through out many cities in Canada and US.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>There are seperate apps each for diffrent city. For the users who wants to check the other city's foodtruck, they need to download every each of them.</p>
          <p>I find lack of branding a issue. Once the user clicks the app icon button to access the app, there are no branding components to be found.</p>
          <p>Confusing nav button location. The user can only reach to the 'i' icon that provides 'more' functions such as logging in. This should be at the same hirarchical lever on the main app bar alongside of the 'Map', and 'List'.</p>
          <p>Sign up only available on the website not via the app. Sing in function is only for the users with foodtrucks for them to manage details of the food truck via the app. Only sign in method is through Twitter account.</p>
          <p>Too many links exiting the app and redirect to the Mail app which distracts work flow.</p>
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
        
        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-know what kind of food trucks are in my city</p>
          <p>-know the opening hours of the food trucks.</p>
          <p>-keep up with the locations the food trucks are operating</p>
          <p>-contact to food truck.</p>
          <p>-share my experiance with ppl.</p>
          <p>-check other city’s food trucks before visiting the city</p>
          <p>-add my own food truck info on the app to promote my bussiness</p>
        </div>

        <div>
          <h2 className="textbox">New User Flow</h2>
          <img className="big-img" src={newUserFlow} alt="thumbnail"/>
        </div>

        <div className="app-wireframe">
          <div>
            <h2>Splash screen wireframe</h2>
            <p>Added the splash screen with the logo and tagline to emphasize the branding to the users.</p>
            <img src={splash} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (landing) wireframe</h2>
            <p>on the top app bar shows which city the user is viewing and the map icon allows users to change cities. Relocated the more button to the bottom app bar for content hirarchy.</p>
            <img src={map} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (location selected) wireframe</h2>
            <p>When the user selects pin on the map, originally it showed the small lable above the pin with name of the truck and the operating hour of the day. now it shows the whole summary of the food truck including the image. </p>
            <img src={mapPinned} alt="thumbnail"/>
          </div>

          <div>
            <h2>Change city wireframe</h2>
            <p>When the user clicks on the map icon button, user can change the city for browsing food trucks. it has search bar for easy look out.</p>
            <img src={cities} alt="thumbnail"/>
          </div>

          <div>
            <h2>List wireframe</h2>
            <p>add ‘Opened’ sorting option for viewing instead of ‘A-Z’</p>
            <img src={list} alt="thumbnail"/>
          </div>

          <div>
            <h2>Individual food truck wireframe</h2>
            <p>in-app msg to food truck rather then exiting to the email app.add submit review function.</p>
            <img src={truckDetail} alt="thumbnail"/>
          </div>

          <div>
            <h2>More wireframe</h2>
            <p>‘tell a friend about this app’ change to mobile basic share function then via email app.separate the food truck info management for the food truck owners (currently need to find it in the listing).</p>
            <img src={more} alt="thumbnail"/>
          </div>

          <div>
            <h2>Manage my truck wireframe</h2>
            <p>The food truck owners can register their food truck and manage it via the app. sign up function is available once user gets in to the 'manage my truck' section unlike before which showed on 'i'(more) menu and gived unclear user expectation.</p>
            <img src={myTruck} alt="thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetFood;