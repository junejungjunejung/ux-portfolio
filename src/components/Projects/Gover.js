import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import competitors from '../../image/competitors.jpg';
import howitworks from '../../image/gover-howitworks.jpg';
import userflow from '../../image/gover-userflow.jpg';

import landingWeb from '../../image/gover-landing-web-wire.jpg';
import dashboardWeb from '../../image/gover-dashboard-web-wire.jpg';
import reportsWeb from '../../image/gover-reports-web-wire.jpg';
import reportItemWeb from '../../image/gover-report-item-web-wire.jpg';

import homeWeb from '../../image/gover-home-web-wire.jpg';
import priceWeb from '../../image/gover-price-web-wire.jpg';
import aboutWeb from '../../image/gover-about-web-wire.jpg';
import contactWeb from '../../image/gover-contact-web-wire.jpg';

import landingWebMock from '../../image/gover-landing-web-mock.jpg';
import dashboardWebMock from '../../image/gover-dashboard-web-mock.jpg';
import reportsWebMock from '../../image/gover-reports-web-mock.jpg';
import reportItemWebMock from '../../image/gover-report-item-web-mock.jpg';

import homeWebMoc from '../../image/gover-home-web-mock.jpg';
import priceWebMoc from '../../image/gover-price-web-mock.jpg';
import aboutWebMoc from '../../image/gover-about-web-mock.jpg';
import contactWebMoc from '../../image/gover-contact-web-mock.jpg';

import assets from '../../image/gover-assets.jpg';
import color from '../../image/gover-color.jpg';
import icon1 from '../../image/gover-icon1.jpg';
import icon2 from '../../image/gover-icon2.jpg';
import logo from '../../image/gover-logo.jpg';
import typography from '../../image/gover-typography.jpg';

import architecture from '../../image/gover-architecture.jpg';

const Gover = () => {
  return (
    <div className="projects-container" id="gover-layout">
      <div className="textbox">
        <h1>Multiplatform Service Design & Development Project</h1>
        <h2>Gover</h2>
        <p>Gover is a multiplatform service that enables property and equipment inspection seamless and faster.</p>
        <p>There are three parts to the project that are the native Android app, the web app, and the corporate website. I took part in designing and developing mainly the web app and the corporate website.</p>
      </div>

      <div className="textbox">
        <h2>My role</h2>
        <div id="role-container">
          <div>
            <h3>UX design</h3>
            <p>I researched and created the User Personas, designed the user flow for the Gover corporate website and Web application. Also, I developed the wireframe and the mockup for the Gover web application.</p>
          </div>

          <div>
            <h3>UI design</h3>
            <p>As a part of the design team, I created the brand identity and designed assets such as icons, buttons, and cards used throughout the platforms include the Gover web application, the corporate website, the Android application.</p>
          </div>

          <div>
            <h3>Frontend development</h3>
            <p>I developed the functional vertical prototype of the Gover web application that utilizes the Email authentication and the PDF viewer component with the Angular JS and the Bootstrap4 in 2 months period.</p>
          </div>
        </div>
      </div>

      <Divider className="divider"/>

      <div className="textbox">
        <div>
            <h2>UX Design</h2>
            <p>There are many property inspection apps available out there. However, most of these apps are catering to big property management firms, with complicated inspection customization. Gover is offering a simple and affordable solution for small scale property and equipment owners.
            </p>

            <div>
              <h3>Competitive Landscape</h3>
              <img src={competitors} alt=""/>
            </div> 

            <h3>Personas</h3>
            <p>I created three personas with different goals and frustrations. To cater to the users with different backgrounds and needs, I decided to provide inspection templates based on their chosen property type.</p>
            
            <div id="persona-container">
              <div>
                <div>
                  <h3>Mike Yeo</h3>
                  <p>Real Estate Agent</p>
                  <p>"A good real estate agent always keeps up with local and regional market activities. I need an efficient way to organize and update my real estate documents, agreements, and reports."</p>
                </div>
                <div>
                  <h3>Goals</h3>
                  <p>-Easy way to access all the inspections he did.</p>
                  <p>-Creating a report quickly for sharing with clients and coworkers.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Usually, third-party contractors do the inspection and create a time delay.</p>
                  <p>-Lack of a inspection report sorting system that provides easy access.</p>  
                  <p>-Reports need to be documented manually.</p>              
                </div>
              </div>
              
              <div>
                <div>
                  <h3>Leticia Santos</h3>
                  <p>Home Owner</p>
                  <p>"As a landlord, I want to provide the best possible home experience to my renters."</p>
                </div>
                <div>
                  <h3>Goals</h3>
                  <p>-Comparing the inspection of a property before and after each renter's use.</p>
                  <p>-Review the inspection report thoroughly and conveniently.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Keeping up with property management and maintenance.</p>
                  <p>-Lengthy eviction process.</p>  
                  <p>-Difficulty in keeping track of several properties statuses.</p>              
                </div>
              </div>
              
              <div>
                <div>
                  <h3>Matthew Cox</h3>
                  <p>Equipment renting business owner</p>
                  <p>"Filming equipment can be expensive. So I want to use my platform to support filmmaking lovers."</p>
                </div>
                <div>
                  <h3>Goals</h3>
                  <p>-Keeping track of rented item's general condition.</p>
                  <p>-Having a logical system to document rented equipment.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Time-consuming inspection process.</p>
                  <p>-Keeping the records on rented items before and after condition.</p>  
                  <p>-Following the renting history of the item.</p>              
                </div>
              </div>                                
            </div>
          </div>

          <div className="textbox" id="problem-solution">
            <div>
              <h3>The problem</h3>
              <div>
                <b>1.Time consuming paperwork</b>
                <p>Paper inspection and report generation take more than 2-3hours to complete.</p>              
              </div>              
              <div>
                <b>2.Photo organization</b>
                <p>Matching between inspection notes and a large volume of photos that were taken during the inspection can be an overwhelming task.</p>              
              </div>     
              <div>
                <b>3.Manual note taking</b>
                <p>The need for stop to take notes during inspection can slow productivity.</p>              
              </div>     
              <div>
                <b>4.Limit of the physical documents</b>
                <p>Sending physical documents between stakeholders, and having them signed takes valuable time.</p>              
              </div>  
            </div> 

            <div>
              <h3>The Solution</h3>
              <div>
                <b>1.Inspection template</b>
                <p>Premade inspection templates are generated automatically based on the property type.</p>              
              </div>              
              <div>
                <b>2.Photo organization</b>
                <p>When the user takes/uploads photos, Gover Automatically links them to the item the user is inspecting.</p>              
              </div>     
              <div>
                <b>3.Streamline notes</b>
                <p>On a mobile device, the user can simply use the voice memo feature, and Gover will convert it to text.</p>              
              </div>      
              <div>
                <b>4.Save time on reports</b>
                <p>The report can be generated and shared with the landlord using Gover, which can be readily signed and confirmed.</p>              
              </div>                          
            </div> 
          </div>

          <Divider className="divider"/>
          <div>
            <h3>How Gover works</h3>
            <img src={howitworks} alt=""/>
          </div> 

          <h3>Userflow</h3>
          <div className="textbox">
            <p>The user flow below shows that the corporate website is connected to the web app via the login button. The web app can be only accessible by users with credentials. The web app provides the same functionality as the Android app except for the native mobile behavior such as the camera roll and the voice to text access.</p>
          </div>
          <img src={userflow} alt=""/>

          <Divider className="divider"/>

          <div>
            <h3>Wireframe - Web App</h3>
            <div>
              <div>
                <div className="web-wireframe">
                  <div>
                    <h3>Landing page desktop wireframe</h3>
                    <p className="textbox"> Only the signed-in users can access to Gover's main service.</p>
                    <img src={landingWeb} alt="desktop wireframe"/>
                  </div>
        
                  <div>
                    <h3>Dashboard desktop wireframe</h3>
                    <img src={dashboardWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h3>Reports desktop wireframe</h3>
                    <img src={reportsWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h3>Report item desktop wireframe</h3>
                    <img src={reportItemWeb} alt="desktop wireframe"/>
                  </div>
                </div>
              </div>

              <div>
                <h3>Wireframe - Corporate website</h3>
                <div className="web-wireframe">
                  <div>
                    <h3>Landing page desktop wireframe</h3>
                    <img src={homeWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h3>Pricing page desktop wireframe</h3>
                    <img src={priceWeb} alt="desktop wireframe"/>
                  </div>                  

                  <div>
                    <h3>About page desktop wireframe</h3>
                    <img src={aboutWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h3> Contact page desktop wireframe</h3>
                    <img src={contactWeb} alt="desktop wireframe"/>
                  </div>
                </div>
              </div>
            </div>

            <Divider className="divider"/>

            <div>
              <h3>Mockup - Web App</h3>
              <div>
                <div className="web-mockup">
                  <div>
                    <h3>Landing page desktop mockup</h3>
                    <img src={landingWebMock} alt="desktop mockup"/>
                  </div>
        
                  <div>
                    <h3>Dashboard desktop mockup</h3>
                    <img src={dashboardWebMock} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h3>Reports desktop mockup</h3>
                    <img src={reportsWebMock} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h3>Report item desktop mockup</h3>
                    <img src={reportItemWebMock} alt="desktop mockup"/>
                  </div>
                </div>
              </div>

              <div>
                <h3>Mockup - Corporate website</h3>
                <div className="web-mockup">
                  <div>
                    <h3>Landing page desktop mockup</h3>
                    <img src={homeWebMoc} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h3>Pricing page desktop mockup</h3>
                    <img src={priceWebMoc} alt="desktop mockup"/>
                  </div>                  

                  <div>
                    <h3>About page desktop mockup</h3>
                    <img src={aboutWebMoc} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h3>Contact page desktop mockup</h3>
                    <img src={contactWebMoc} alt="desktop mockup"/>
                  </div>
                </div>
              </div>
            </div>      
          </div>

          <Divider className="divider"/>

          <div>
            <h2 className="textbox">UI design</h2>

            <div className="textbox">
              <h3>Logo</h3>
              <p>Gover is short for 'go over'. The top part of the letter 'g' symbolizes the magnify glass for inspecting closely. The responsive logo can be used as an icon and a favicon.</p>
            </div>  
            <img src={logo} alt=""/>


            <div className="textbox">
              <h3>Color palette</h3>
              <p>To avoid the stereotypical image of inspection, we decided to utilize bright and vivid colors. The primary brand color is saturated coral, and the accent color is a linear gradient green that is complementary to the primary color.</p>
            </div>
            <img src={color} alt=""/> 

            <div className="textbox">
              <h3>Icons</h3>
              <p>There are the simple lined style icons for primary use throughout all platforms and the multi-colored isometric icons for accent use mainly for visual user engagement.</p>
            </div>
            <img src={icon1} alt=""/>
            <img src={icon2} alt=""/>  
            
            <div className="textbox">
              <h3>Typography</h3>
              <p>We chose Saira for Headings and Montserrat for body text. Both san-serif fonts convey a more casual approach to the inspection process.</p>
            </div>
            <img src={typography} alt=""/>
       
            
            <div className="textbox">
              <h3>Asset Design</h3>
              <p>We designed modular cards for list items and forms to accommodate the fluid responsive design.</p>
            </div>
            <img src={assets} alt=""/>
          </div>

          <Divider className="divider"/>

          <div>
            <h2 className="textbox">Frontend development</h2>

            <div className="textbox">
              <h3>Gover Architecture</h3>
              <p>Gover is hosted in AWS. The backend server is built with Django. It's APIs are built with Django REST framework using Python language. We chose PostgreSQL, an advanced relational database management system for our database. Both the native Android app and the Angular web app communicate with each other through the backend.</p>
            </div> 
            <img src={architecture} alt=""/>
 

            <div className="textbox">
              <h3>Web App</h3>
              <p>Although my preferred frontend development tool currently is React.js, Angular JS was the first introduction to JavaScript frameworks. The project time line allowed me 2 months to develop a fuctional vertical prototype and I chose Angular JS and styled it with Bootstrap4 as my main tools. There are three main features...</p>

              <p>1) User Authentication: the users can log in to the service with their email and password token via the POST method.</p>
              <p>2) API request: The user dashboard list gets populated by requesting inspection data from the database with the HttpClient GET method.</p>
              <p>3) PDF viewer: By utilizing the 'ng2-pdf-viewer' npm package, the user can view and download the inspection reports.</p>
              <a href="https://github.com/junejungjunejung/goverWebapp" className="website-links" target="_blank" rel="noopener noreferrer">
                <ArrowForwardIcon />Visit Github to see the source code.
              </a>          
            </div>  
          </div>
        </div>
    </div>
  );
}

export default Gover;