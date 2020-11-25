import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import thumbnail from '../../image/rectangle.jpg';

const Gover = () => {
  return (
    <div id="gover-layout">
      <div>
        <h1>Gover</h1>
        <h2>Multiplatform Service Design & Development Project</h2>
        <p>The inspection app that will make your work easier, faster, and better.</p>
        <p>The inspection app that will make your work easier, faster, and better.</p>       
        <a href="https://gover-corporate.firebaseapp.com/" className="website-links" target="_blank" rel="noopener noreferrer">
          <ArrowForwardIcon /> Visit Gover Corporate Website
        </a>
      </div>

      <div>
        <h2>My role</h2>

        <div>
          <h3>UX design</h3>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
        </div>

        <div>
          <h3>UI design</h3>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
        </div>

        <div>
          <h3>Frontend development</h3>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
          <p>"The inspection app that will make your work easier, faster, and better."</p>
        </div>
      </div>

      <div>
        <div>
          <h2>UX design</h2>

          <div>
            <h3>Userstory</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>

          <div>
            <h3>Userflow</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>

          <div>
            <h3>Wireframe</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>

          <div>
            <h3>Mockup</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>        
        </div>

        <div>
          <h2>UI design</h2>

          <div>
            <h3>Logo</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>  

          <div>
            <h3>Color palette</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div> 

          <div>
            <h3>Icons</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>  
          
          <div>
            <h3>Typography</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>           
        </div>

        <div>
          <h2>Frontend development</h2>

          <div>
            <h3>Web App</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>  
                  
          <div>
            <h3>Corporate Website</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Gover;