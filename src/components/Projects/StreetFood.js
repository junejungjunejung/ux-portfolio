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
        <p>Street Food App is a mobile app that provides locations and schedules of the city's food trucks. They offer information for over 1,000 food trucks throughout many cities in Canada and the US.</p>
        <p>I found an opportunity to improve the app's UX while exploring what the app provides.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>There is a seperate app for each city. For the users who want to check another city's food trucks, they must download every city's application. This is a major user deterrent.</p>
          <p>The lack of branding elements, is a UX/UI issue. Once the user clicks the app icon button and enters the app, there are no branding components to be found creating a disjointed experience.</p>
          <p>Confusing navigation structure. The 'i' icon button should be at the same hierarchical level on the main bottom app bar alongside the 'Map' and the 'List'.</p>
          <p>Currently, Sign up is only available on the 'Street Food App' website but via the app, the only sign-in method is exclusively using a Twitter account. </p>
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

          <p>Add a function that allows users to easily switch between different cities instead of download every one of the separate apps for each city that burdened the users by taking up a lot of space on their mobile device.</p>
          <p>For a stronger experience and brand identity, I added the splash screen with the logo and tagline.</p>
          <p>Relocated and refactored the navigation. Originally, the 'i' icon that provides Sign-in for the food truck owners, getting contact with the app developers, share, etc. was only reachable at the 'Map' section's top app bar.</p>
          <p>I added a section for the users with food trucks to sign up through the app because a Twitter exclusive sign-in restricts user account access.</p>
          <p>Unnecessary links redirecting users are removed and replaced with in-app functions such as messaging within the app to contact the developers or the food trucks.</p>
        </div>
        
        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-Know what kind of food trucks are in my city.</p>
          <p>-Check other city’s food trucks before visiting the city.</p>
          <p>-Know the opening hours and the locations of the food trucks.</p>
          <p>-Contact the food truck.</p>
          <p>-Share my experience with people.</p>
          <p>-Add my food truck info on the app to promote my business.</p>
        </div>

        <div>
          <h2 className="textbox">New User Flow</h2>
          <img className="big-img" src={newUserFlow} alt="thumbnail"/>
        </div>

        <div className="app-wireframe">
          <div>
            <h2>Splash screen wireframe</h2>
            <p>The splash screen with the logo and the tagline emphasizes the branding of the 'Street Food App' to the users.</p>
            <img src={splash} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (landing) wireframe</h2>
            <p>The top app bar shows which city the user is viewing and the map icon on the righthand side allows users to change cities. Relocated the 'More' button to the right end of the bottom main app bar for content hierarchy.</p>
            <img src={map} alt="thumbnail"/>
          </div>

          <div>
            <h2>Map (location selected) wireframe</h2>
            <p>When the user selects a pin on the map, originally it showed the small label right above the pin with the name of the food truck and the operating hours of that day. Now it shows the whole summary of the food truck including the image thumbnail that gives a clearer view.</p>
            <img src={mapPinned} alt="thumbnail"/>
          </div>

          <div>
            <h2>Change city wireframe</h2>
            <p>When the user clicks on the map icon button next to the city name, the user can change the city for browsing food trucks. It has a search bar for an easy look up.</p>
            <img src={cities} alt="thumbnail"/>
          </div>

          <div>
            <h2>List wireframe</h2>
            <p>Instead of 'A-Z' sorting, I added the 'Opened' sorting option for browsing at the 'List' section. List item now has a thumbnail image and a label to indicate what kind of food they are serving to give users more complete information.</p>
            <img src={list} alt="thumbnail"/>
          </div>

          <div>
            <h2>Individual food truck wireframe</h2>
            <p>The in-app messaging function is added for the users to communicate with the food truck operator through the app service rather than exiting to the email app, unlike the current app. Also, now users can submit reviews to share their experience with others.</p>
            <img src={truckDetail} alt="thumbnail"/>
          </div>

          <div>
            <h2>More wireframe</h2>
            <p>The ‘Tell a friend about this app’ and contacting the Street Food App developers were the links that let users exiting the app and redirect them to the native mobile email app. 
            This changed to the standard mobile share function, and the messaging to the developers done via the in-app message function. </p>
            <img src={more} alt="thumbnail"/>
          </div>

          <div>
            <h2>Manage my truck wireframe</h2>
            <p>Separate the food truck management for the food truck owners (currently need to find it in the listing) and add it into the 'More' -> 'Manage My Truck' section.</p>
            <p>Now, the food truck owners can register their food trucks and manage them via the app. Sign up/in is available once the user gets into the 'Manage My Truck' section unlike the before which showed on the 'i' icon menu header and gave unclear user expectations.</p>
            <img src={myTruck} alt="thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetFood;