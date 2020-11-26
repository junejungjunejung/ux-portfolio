import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import howitworks from '../../image/gover-howitworks.jpg';

import assets from '../../image/gover-assets.jpg';
import color from '../../image/gover-color.jpg';
import icon1 from '../../image/gover-icon1.jpg';
import icon2 from '../../image/gover-icon2.jpg';
import logo from '../../image/gover-logo.jpg';
import typography from '../../image/gover-typography.jpg';

import architecture from '../../image/gover-architecture.jpg';

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
            <h3>Personas</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            
            <div>
              <h3>Name</h3>
              <p>Description</p>
              <p>Goals</p>
              <p>Frustration</p>
            </div>
            
            <div>
              <h3>Name</h3>
              <p>Description</p>
              <p>Goals</p>
              <p>Frustration</p>
            </div>
            
            <div>
              <h3>Name</h3>
              <p>Description</p>
              <p>Goals</p>
              <p>Frustration</p>
            </div>                      
          </div>

          <div>
            <div>
              <h3>The problem</h3>
              <p>problem</p>
              <p>problem</p>
              <p>problem</p>
            </div> 

            <div>
              <h3>The Solution</h3>
              <p>solution</p>
              <p>solution</p>
              <p>solution</p>
            </div> 
          </div>

          <div>
            <h3>How Gover works</h3>
            <img src={howitworks} alt=""/>
          </div> 

          <div>
            <h3>Userflow</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={thumbnail} alt=""/>
          </div>

          <div>
            <h3>Wireframe</h3>
            
            <div>
              <p>Web App</p>
              <img src={thumbnail} alt=""/>
            </div>

            <div>
              <p>Corporate website</p>
              <img src={thumbnail} alt=""/>
            </div>
          </div>

          <div>
            <h3>Mockup</h3>

            <div>
              <p>Web App</p>
              <img src={thumbnail} alt=""/>
            </div>

            <div>
              <p>Corporate website</p>
              <img src={thumbnail} alt=""/>
            </div>
          </div>        
        </div>

        <div>
          <h2>UI design</h2>

          <div>
            <h3>Logo</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={logo} alt=""/>
          </div>  

          <div>
            <h3>Color palette</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={color} alt=""/>
          </div> 

          <div>
            <h3>Icons</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={icon1} alt=""/>
            <img src={icon2} alt=""/>
          </div>  
          
          <div>
            <h3>Typography</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={typography} alt=""/>
          </div>         
          
          <div>
            <h3>Asset Design</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={assets} alt=""/>
          </div> 
        </div>

        <div>
          <h2>Frontend development</h2>

          <div>
            <h3>Gover Architecture</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={architecture} alt=""/>
          </div>  

          <div>
            <h3>Web App</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
          </div>  
                  
          <div>
            <h3>Corporate Website</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Gover;