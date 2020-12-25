import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousLanding from '../../image/wtc-current-landing.jpg';
import previousUserFlow from '../../image/wtc-usermap-current.jpg';
import newUserFlow from '../../image/wtc-usermap-new.jpg';

import landingWeb from '../../image/wtc-landing-desktop.jpg';
import aboutWeb from '../../image/wtc-about-desktop.jpg';
import eventWeb from '../../image/wtc-events-desktop.jpg';

import landingMobile from '../../image/wtc-landing-mobile.jpg';
import hamburger from '../../image/wtc-hamburger.jpg';
import aboutMobile from '../../image/wtc-about-mobile.jpg';
import eventMobile from '../../image/wtc-events-mobile.jpg';

const WTC = () => {
  return (
    <div className="projects-container" id="wtc-layout">
      <div className="textbox">
        <h1>Website UX Redesign Project <span>&#8544;</span></h1>
        
        <h2>Women Transforming Cities</h2>
        <p>WTC is a nonprofit organization based in Vancouver, Canada that works to educate, promote awareness and take action on issues such as affordable housing, violence against women, leadership, electoral reform, aboriginal women’s priorities, and the environment.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>As the latest statistics show that more than 50 percent of web traffic worldwide comes from mobile users, a website must have seamless responsiveness throughout flatforms. However, WTC's website doesn't have a mobile view, and when I accessed it via a mobile device, the website looked visually broken.</p>
          <p>The top navigation bar has unexpected behavior as in, the heading of the drop-down menu is a link of its own page, makes the user experience confusing. Also, the content of the said page overlaps with the pages from the drop-down menus.</p>
          <p>Several pages of the website are links to other websites and articles which lowers retention of the users and ultimately encourages the users to leave the website.</p>      
          <p>The overall layout of the website is distractive to the users because the elements don't have hierarchy and clear divisions to one another but are scattered around throughout the website.</p>
        </div>

        <h2 className="textbox">Current Website Landing Screen</h2>
        <img className="big-img" src={previousLanding} alt="previous wtc site screen"/>
        <h2 className="textbox">Current User Flow</h2>
        <img className="big-img" src={previousUserFlow} alt="previous wtc user flow"/>

        <div className="textbox">
          <a href="https://www.womentransformingcities.org/" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Link to WTC
          </a>
        </div>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Solution</h1>

          <p>First and foremost, I wanted to modernize the website by making it responsive and make it more accessible to a bigger audience.</p>
          <p>Secondly, I reorganized and simplified the top navigation by giving it a more expected behavior by removing the functionality in the header of the drop-down menus and merge the content together by rearranging them.</p>
          <p>The current WTC website landing page is mainly composed of links to recommended articles and since the landing page is the most valuable asset, I wanted to promote user involvement. I added CTA sections to encourage the users to register for events, join the membership, and donate to the organization as well as subscribe to newsletters.</p>
          <p>I decided to declutter the footer and reduce the size by removing the excessive white space which takes up valuable space that could be used otherwise.</p>
        </div>

        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-Following up to date news related to social movements.</p>
          <p>-Read articles on the organization’s activity.</p>
          <p>-See upcoming events and share events on my social media platform.</p>
          <p>-Be part of the community by becoming a member.</p>
          <p>-Be part of the community by becoming a volunteer.</p>
          <p>-Help the organization by donation.</p>
        </div>

        <h2 className="textbox">New User Flow</h2>
        <img className="big-img" src={newUserFlow} alt="new wtc user flow"/>
      </div>     

      <div className="projects-secondary-container">
        <div className="web-wireframe">
          <div>
            <h2>Landing page desktop wireframe</h2>
            <p>Reduced the vertical space of the top navigation bar by relocating the 'Donate' button end of the right side to make it less distracting.</p>
            <p>Changed the layout of the article to modular cards for an easy transition to the mobile view.</p>
            <p>Added 'Events', 'Membership', and 'Donate' CTA sections to encourage user interaction.</p>
            <img src={landingWeb} alt="landing page desktop wireframe"/>
          </div>

          <div>
            <h2>About page desktop wireframe</h2>
            <p>Merged three separate pages to the 'Who We Are' page without reducing or removing the content but rearranging the layout. The users can oversee the organization as a whole.</p>
            <p>Originally, the users can see WTC team member's names and roles by hovering over a profile photo. I changed it to card design with the information visible since mobile doesn't have the hover functionality available.</p>
            <img src={aboutWeb} alt="about page desktop wireframe"/>
          </div>

          <div>
            <h2>Events page desktop wireframe</h2>
            <p>The 'Events' page was in the 'Our Work' section originally but I relocated them to the 'Get Involved' section for relevance in context.</p>
            <p>The page was displaying the whole content of the events including all the fine text and links to related sites make them hard to read. Instead, I changed it to summary cards.</p>
            <p>Changed the original pagination to infinite scroll for mobile view friendly user interaction.
            </p>
            <img src={eventWeb} alt="events page desktop wireframe"/>
          </div>
        </div>

        <div className="mobile-wireframe">
          <div>
            <h2>Landing page mobile wireframe</h2>
            <p>To give equal importance throughout the sections in landing views, I decided the layout of the articles horizontal swipe instead of stacking vertically and taking up the major portion of the screen.</p>
            <img src={landingMobile} alt="landing page mobile wireframe"/>
          </div>

          <div>
            <h2>Mobile navigation menu wireframe</h2>
            <p>I chose a vertically stacked hamburger navigation for the mobile view. Submenus are visible by toggling accordion-style menu buttons.</p>
            <img src={hamburger} alt="navigation menu mobile wireframe"/>
          </div>

          <div>
            <h2>About page mobile wireframe</h2>
            <p>Because board members are stakeholders of the organization, even though the length of the screen gets longer, I decided to show all the profiles unlike the volunteer section, only a small number of them are visible in mobile view.</p>
            <img src={aboutMobile} alt="about page mobile wireframe"/>
          </div>

          <div>
            <h2>Events page mobile wireframe</h2>
            <p>Users can have the same experience through different platforms. Because the fluid box design enables to have unified visual without sacrificing the contents.</p>
            <img src={eventMobile} alt="event page mobile wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WTC;