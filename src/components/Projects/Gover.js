import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import howitworks from '../../image/gover-howitworks.jpg';
import userflow from '../../image/gover-userflow.jpg';


import landingWeb from '../../image/gover-landing-web-wire.jpg';
import dashboardWeb from '../../image/gover-dashboard-web-wire.jpg';
import reportsWeb from '../../image/gover-reports-web-wire.jpg';
import reportItemWeb from '../../image/gover-report-item-web-wire.jpg';

import landingMobile from '../../image/gover-landing-mob-wire.jpg';
import dashboardMobile from '../../image/gover-dashboard-mob-wire.jpg';
import reportsMobile from '../../image/gover-reports-mob-wire.jpg';
import reportItemtMobile from '../../image/gover-report-item-mob-wire.jpg';


import homeWeb from '../../image/gover-home-web-wire.jpg';
import priceWeb from '../../image/gover-price-web-wire.jpg';
import aboutWeb from '../../image/gover-about-web-wire.jpg';
import contactWeb from '../../image/gover-contact-web-wire.jpg';

import homeMobile from '../../image/gover-home-mob-wire.jpg';
import menuMobile from '../../image/gover-menu-mob-wire.jpg';
import priceMobile from '../../image/gover-price-mob-wire.jpg';
import aboutMobile from '../../image/gover-about-mob-wire.jpg';
import contactMobile from '../../image/gover-contact-mob-wire.jpg';


import landingWebMock from '../../image/gover-landing-web-mock.jpg';
import dashboardWebMock from '../../image/gover-dashboard-web-mock.jpg';
import reportsWebMock from '../../image/gover-reports-web-mock.jpg';
import reportItemWebMock from '../../image/gover-report-item-web-mock.jpg';

import landingMobileMock from '../../image/gover-landing-mob-mock.jpg';
import dashboardMobileMock from '../../image/gover-dashboard-mob-mock.jpg';
import reportsMobileMock from '../../image/gover-reports-mob-mock.jpg';
import reportItemtMobileMock from '../../image/gover-report-item-mob-mock.jpg';


import homeWebMoc from '../../image/gover-home-web-mock.jpg';
import priceWebMoc from '../../image/gover-price-web-mock.jpg';
import aboutWebMoc from '../../image/gover-about-web-mock.jpg';
import contactWebMoc from '../../image/gover-contact-web-mock.jpg';

import homeMobileMoc from '../../image/gover-home-mob-mock.jpg';
import menuMobileMoc from '../../image/gover-menu-mob-mock.jpg';
import priceMobileMoc from '../../image/gover-price-mob-mock.jpg';
import aboutMobileMoc from '../../image/gover-about-mob-mock.jpg';
import contactMobileMoc from '../../image/gover-contact-mob-mock.jpg';


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
      <div>
        <h1>Gover</h1>
        <h2>Multiplatform Service Design & Development Project</h2>
        <p>The inspection app that will make your work easier, faster, and better.</p>
        <p>The inspection app that will make your work easier, faster, and better.</p>
      </div>

      <div>
        <h2>My role</h2>
        <div id="role-container">
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
      </div>

      <div>
        <div>
          <h2>Analysis</h2>
          <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>

          <div>
            <h3>Personas</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            
            <div id="persona-container">
              <div>
                <h3>Mike Yeo</h3>
                <p>Real Estate Agent</p>
                <p>"A good real estate agent always keep up with local and regional market activities. I need an efficient way to organize and update my real estate documents, agreements and reports."</p>
                <div>
                  <h3>Goals</h3>
                  <p>-Easy way to access all the inspections he did.</p>
                  <p>-Creating a report quickly for sharing.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Inspections are usually done by a third party.</p>
                  <p>-Lack of a document sorting system which provides easy access.</p>  
                  <p>-Reports are documented manually.</p>              
                </div>
              </div>
              
              <div>
                <h3>Leticia Santos</h3>
                <p>Home Owner</p>
                <p>"As a landlord, I want to provide the best possible home experience to my renters."</p>
                <div>
                  <h3>Goals</h3>
                  <p>-Comparing inspection of properties before and after each renter's use.</p>
                  <p>-Review the inspection thoroughly and easily.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Heavy property management and maintenance.</p>
                  <p>-Lengthy eviction process.</p>  
                  <p>-Difficulty in keeping track of several property's status.</p>              
                </div>
              </div>
              
              <div>
                <h3>Matthew Cox</h3>
                <p>Equipment renting business owner</p>
                <p>"Filming equipment can be expensive. So I want to use my platform to support filmmaking lovers."</p>
                <div>
                  <h3>Goals</h3>
                  <p>-Keep track on rented item's general condition.</p>
                  <p>-Having a logical system to file rented equipments.</p>             
                </div>
                <div>
                  <h3>Frustration</h3>
                  <p>-Time consuming inspection process.</p>
                  <p>-Keeping records on rented items before and after condition.</p>  
                  <p>-Following item's renting history.</p>              
                </div>
              </div>                                
            </div>
          </div>

          <div id="problem-solution">
            <div>
              <h3>The problem</h3>
              <div>
                <p>1.Time consuming paperwork</p>
                <p>Paper inspection and report generation takes more than 2-3hours to complete.</p>              
              </div>              
              <div>
                <p>2.Photo organization</p>
                <p>Matching betweent inspection notes and big volumn of photos that were taken during the inspection can be overwhelming task.</p>              
              </div>     
              <div>
                <p>3.Manual note taking</p>
                <p>Stop to take notes during inspection can slow productivity.</p>              
              </div>      
              <div>
                <p>4.Limit of the physical documents</p>
                <p>Sending physical documents between stakeholders, and having it signed takes valuable time.</p>              
              </div>  
            </div> 

            <div>
              <h3>The Solution</h3>
              <div>
                <p>1.Inspection template</p>
                <p>Premade inspction templates are generated automatically based on the property type.</p>              
              </div>              
              <div>
                <p>2.Photo organization</p>
                <p>When the user takes/uploads photos, Gover Automatically links them to the item the user is inspecting.</p>              
              </div>     
              <div>
                <p>3.Streamline notes</p>
                <p>On mobile phone, the user can simply use the voice memo feature, and Gover will convert it to text.</p>              
              </div>      
              <div>
                <p>4.Save time on reports</p>
                <p>Report can be generated and shared to the landlord using Gover, which can be easily signed and confirmed.</p>              
              </div>                          
            </div> 
          </div>

          <div>
            <h3>How Gover works</h3>
            <img src={howitworks} alt=""/>
          </div> 

          <div>
            <h3>Userflow</h3>
            <p>Submitting a location you want to look up the weather for, which will fetch current weather forecast JSON data from the ‘Weather API’ REST API.</p>
            <img src={userflow} alt=""/>
          </div>

          <div>
            <h3>Wireframe</h3>

            <div>
              <div>
                <h4>Web App</h4>
                <div className="web-wireframe">
                  <div>
                    <h4>Landing page desktop wireframe</h4>
                    <img src={landingWeb} alt="desktop wireframe"/>
                  </div>
        
                  <div>
                    <h4>Dashboard desktop wireframe</h4>
                    <img src={dashboardWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h4>Reports desktop wireframe</h4>
                    <img src={reportsWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h4>Report item desktop wireframe</h4>
                    <img src={reportItemWeb} alt="desktop wireframe"/>
                  </div>
                </div>
        
                <div className="mobile-wireframe">
                  <div>
                    <h4>Landing page mobile wireframe</h4>
                    <img src={landingMobile} alt="mobile wireframe"/>
                  </div> 

                  <div>
                    <h4>Dashboard mobile wireframe</h4>
                    <img src={dashboardMobile} alt="mobile wireframe"/>
                  </div>

                  <div>
                    <h4>Reports mobile wireframe</h4>
                    <img src={reportsMobile} alt="mobile wireframe"/>
                  </div>
                  
                  <div>
                    <h4>Report Item mobile wireframe</h4>
                    <img src={reportItemtMobile} alt="mobile wireframe"/>
                  </div>
                </div>
              </div>

              <div>
                <h4>Corporate website</h4>
                <div className="web-wireframe">
                  <div>
                    <h4>Landing page desktop wireframe</h4>
                    <img src={homeWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h4>Pricing page desktop wireframe</h4>
                    <img src={priceWeb} alt="desktop wireframe"/>
                  </div>                  

                  <div>
                    <h4>About page desktop wireframe</h4>
                    <img src={aboutWeb} alt="desktop wireframe"/>
                  </div>

                  <div>
                    <h4>Contact page desktop wireframe</h4>
                    <img src={contactWeb} alt="desktop wireframe"/>
                  </div>
                </div>

                <div className="mobile-wireframe">
                  <div>
                    <h4>Landing page mobile wireframe</h4>
                    <img src={homeMobile} alt="mobile wireframe"/>
                  </div>
        
                  <div>
                    <h4>Mobile navigation wireframe</h4>
                    <img src={menuMobile} alt="mobile wireframe"/>
                  </div>
        
                  <div>
                    <h4>Pricing page mobile wireframe</h4>
                    <img src={priceMobile} alt="mobile wireframe"/>
                  </div> 

                  <div>
                    <h4>About page mobile wireframe</h4>
                    <img src={aboutMobile} alt="mobile wireframe"/>
                  </div>
        
                  <div>
                    <h4>Contact page mobile wireframe</h4>
                    <img src={contactMobile} alt="mobile wireframe"/>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3>Mockup</h3>

              <div>
                <h4>Web App</h4>
                <div className="web-mockup">
                  <div>
                    <h4>Landing page desktop mockup</h4>
                    <img src={landingWebMock} alt="desktop mockup"/>
                  </div>
        
                  <div>
                    <h4>Dashboard desktop mockup</h4>
                    <img src={dashboardWebMock} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h4>Reports desktop mockup</h4>
                    <img src={reportsWebMock} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h4>Report item desktop mockup</h4>
                    <img src={reportItemWebMock} alt="desktop mockup"/>
                  </div>
                </div>
        
                <div className="mobile-mockup">
                  <div>
                    <h4>Landing page mobile mockup</h4>
                    <img src={landingMobileMock} alt="mobile mockup"/>
                  </div>
        
                  <div>
                    <h4>Dashboard mobile mockup</h4>
                    <img src={dashboardMobileMock} alt="mobile mockup"/>
                  </div>
        
                  <div>
                    <h4>Reports mobile mockup</h4>
                    <img src={reportsMobileMock} alt="mobile mockup"/>
                  </div>
        
                  <div>
                    <h4>Report Item mobile mockup</h4>
                    <img src={reportItemtMobileMock} alt="mobile mockup"/>
                  </div>
                </div>
              </div>

              <div>
                <h4>Corporate website</h4>
                <div className="web-mockup">
                  <div>
                    <h4>Landing page desktop mockup</h4>
                    <img src={homeWebMoc} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h4>Pricing page desktop mockup</h4>
                    <img src={priceWebMoc} alt="desktop mockup"/>
                  </div>                  

                  <div>
                    <h4>About page desktop mockup</h4>
                    <img src={aboutWebMoc} alt="desktop mockup"/>
                  </div>

                  <div>
                    <h4>Contact page desktop mockup</h4>
                    <img src={contactWebMoc} alt="desktop mockup"/>
                  </div>
                </div>

                <div className="mobile-mockup">
                  <div>
                    <h4>Landing page mobile mockup</h4>
                    <img src={homeMobileMoc} alt="mobile mockup"/>
                  </div>
        
                  <div>
                    <h4>Mobile navigation mockup</h4>
                    <img src={menuMobileMoc} alt="mobile mockup"/>
                  </div>

                  <div>
                    <h4>Pricing page mobile mockup</h4>
                    <img src={priceMobileMoc} alt="mobile mockup"/>
                  </div>                  

                  <div>
                    <h4>About page mobile mockup</h4>
                    <img src={aboutMobileMoc} alt="mobile mockup"/>
                  </div>
        
                  <div>
                    <h4>Contact page mobile mockup</h4>
                    <img src={contactMobileMoc} alt="mobile mockup"/>
                  </div>
                </div>
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
              <a href="https://github.com/junejungjunejung/goverWebapp" className="website-links" target="_blank" rel="noopener noreferrer">
                <ArrowForwardIcon /> Visit Github to see the source code.
              </a>          
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gover;