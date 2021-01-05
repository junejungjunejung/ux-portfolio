import React from 'react';
import Divider from '@material-ui/core/Divider';
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
    <div className="projects-container" id="devreact-layout">
      <div className="textbox">
        <h1>Web Development Showcase Project</h1>
        <h2>Interactive React Development Portfolio</h2>

        <p>I wanted to create a website that can showcase my knowledge of frontend web development. The website is built utilizing React.js and Material-UI that are industry-standard toolsets in web development. I incorporated the usage of real-time chained API communications that users can interact with. Also, the Firebase development application for social authentication and CRUD operation uses their real-time database.</p>

        <div>
          <a href="http://junejungjunejung.github.io/" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Visit My React Website
          </a>
        </div>

        <div>
          <a href="https://github.com/junejungjunejung/react-dev-portfolio" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Visit Github to see the source code.
          </a> 
        </div> 
      </div>

      <Divider className="divider"/>

      <div className="textbox">
        <h2>Main Features</h2>
        <p>A. Weather Information : Chained API Interaction (Weather API, Unsplash)</p>
        <p>B. Daily dose of Cat facts : Asynchronous API Interaction (The Cat API, Meow Facts)</p>
        <p>C. Authentication : Firebase Authentication</p>
        <p>D. CRUD operation : Firebase Realtime Database</p>
      </div>
      
      <img className="react-img" src={reactLanding} alt="landing page screen grab"/>
      <img className="react-img" src={reactDashboard} alt="dashboard page screen grab"/>

      <div>
        <div className="textbox">
          <h2>A. Weather Information</h2>
          <p>When the user lands on my website, they will see the default background image brought from the 'Unsplash' API's JSON response.
          </p>
          <p>By submitting a name of cities the user wants to look current weather up for, 'WeatherInfo' component will send an XMLHttpRequest GET request to the 'Weather API' REST API via the Axios. Then a JSON string response will be sent back from the Weather API that will be then processed programmatically to show the human-readable text to the user.
          </p>
          <p>Part of the processed JSON string response will be set as States. Which 'App.js'  will fetch and use to bring a background image for the website that corresponds to the current weather information the user searched for from the 'Unsplash' API.</p>
          <img className="code-img" src={weatherCode1} alt="source code screen grab"/>
          <img className="code-img" src={weatherCode2} alt="source code screen grab"/>
        </div>

        <div className="textbox">
          <h2>B. Daily dose of Cat facts</h2>
          <p>When the user clicks the button below the default cat image brought from the 'TheCatAPI' REST API, this will make a chained asynchronous Axios API call first to the ‘Meow Facts’ REST API for a random cat fact and to the 'TheCatAPI' for a random cat image. These JSON responses will be set as States.</p>
          <p>If one or none of the two APIs aren't reachable, 'CatFacts' component will display the error message in the text box below the button.</p>
          <img className="code-img" src={catfactCode} alt="source code screen grab"/>
        </div>

        <div className="textbox">
          <h2>C. Authentication</h2>
          <p>The ‘GoogleAuthProvider’ method, one of many authentication methods ‘Firebase Authentication SDK’ provides, is used to let users log in and out with their Google account to enable the personal dashboard tab in the top navigation bar without signing up for the website.</p>
          <p>When the auth state changes by the user logging in, the Redux store will dispatch the 'login' action and the 'startSetPosts' action which will fetch posts created by users via uid from the 'Firebase Realtime Database' if posts exist.</p>
          <img className="code-img" src={authCode1} alt="source code screen grab"/>
          <img className="code-img" src={authCode2} alt="source code screen grab"/>
        </div>

        <div className="textbox">
          <h2>D. CRUD operation</h2>
          <p>Signed-in users can access the personal dashboard page via the tab on the top navigation bar that will only be visible when logged in. By utilizing cloud-hosted NoSQL ‘Firebase Realtime Database’, at the dashboard, users can write, read, edit, and delete posts.</p>
          <p>The Post Actions will communicate with the Firebase database and allow performing CRUD operation, and the Post Reducers will update the states in the Redux store.</p>
          <img className="code-img" src={crudCode} alt="source code screen grab"/>
        </div>
      </div>
    </div>
  );
}

export default DevReact;