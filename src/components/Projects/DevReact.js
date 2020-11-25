import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import reactLanding from '../../image/react-landing.jpg';
import reactDashboard from '../../image/react-dashboard.jpg';

import weatherCode1 from '../../image/weather-code1.jpg';
import weatherCode2 from '../../image/weather-code2.jpg';
import catfactCode from '../../image/catfact-code.jpg';
import authCode1 from '../../image/auth-code1.jpg';
import authCode2 from '../../image/auth-code2.jpg';
import crudCode from '../../image/crud-code.jpg';

const DevReact = () => {
  return (
    <div id="devreact-layout">
      <div>
        <h1>Interactive React Development Portfolio</h1>
        <h2>Web Development Showcase Project</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>

        <a href="http://junejungjunejung.github.io/" className="website-links" target="_blank" rel="noopener noreferrer">
          <ArrowForwardIcon /> Visit My React Website
        </a>
      </div>

      <div>
        <img className="react-img" src={reactLanding} alt="landing page screen grab"/>

        <div>
          <h2>A. Weather Information</h2>
          <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
          <p>Part of this string information will then be filtered to be used fetching an image that corresponds to the current weather from ‘Unsplash’ API. That will change the background image of the website.</p>
          <img className="code-img" src={weatherCode1} alt="source code screen grab"/>
          <img className="code-img" src={weatherCode2} alt="source code screen grab"/>
        </div>

        <div>
          <h2>B. Daily dose of Cat facts</h2>
          <p>When you click the button, this will make chained API calls to ‘TheCatApi’ for a random cat image and to ‘Meow Facts’ for a random cat fact</p>
          <p>If one of the two API isn’t reachable, the component will display the default image and the error message.</p>
          <img className="code-img" src={catfactCode} alt="source code screen grab"/>
        </div>
      </div>

      <div>
        <img className="react-img" src={reactDashboard} alt="dashboard page screen grab"/>

        <div>
          <h2>C. Authentication</h2>
          <p>The ‘GoogleAuthProvider’ method, one of many ‘Firebase SDK’ methods, is used to let users log in and out to use the personal dashboard without signing up to the website.</p>
          <p>When the user logs in, the Redux store fetches the posts created by users via uid from the database if posts exist.</p>
          <img className="code-img" src={authCode1} alt="source code screen grab"/>
          <img className="code-img" src={authCode2} alt="source code screen grab"/>
        </div>

        <div>
          <h2>D. CRUD operation</h2>
          <p>Signed-in users can access to the user dashboard page via the top navigation bar.</p>
          <p>By utilizing ‘Firebase Realtime Database’ that is a cloud-hosted NoSQL database, users can create, read, update, and delete posts.</p>
          <img className="code-img" src={crudCode} alt="source code screen grab"/>
        </div>
      </div>
    </div>
  );
}

export default DevReact;