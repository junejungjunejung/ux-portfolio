import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousLanding from '../../image/massy-current-landing.jpg';
import previousUserFlow from '../../image/massy-usermap-current.jpg';
import newUserFlow from '../../image/massy-usermap-new.jpg';

import landingWeb from '../../image/massy-landing-desktop.jpg';
import shopWeb from '../../image/massy-shop-desktop.jpg';
import accountWeb from '../../image/massy-account-desktop.jpg';

import landingMobile from '../../image/massy-landing-mobile.jpg';
import hamburger from '../../image/massy-hamburger.jpg';
import shopMobile from '../../image/massy-shop-mobile.jpg';
import accountMobile from '../../image/massy-account-mobile.jpg';

const MassyBooks = () => {
  return (
    <div className="projects-container" id="massybooks-layout">
      <div className="textbox">
        <h1>Website UX Redesign Project <span>&#8545;</span></h1>

        <h2>Massy Books</h2>
        <p>Massy Books is 100% Indigenous owned and operated and a member of the Stó:lō Business Association. We acknowledge we operate on the traditional, ancestral, unceded, and occupied territory of the Musqueam, Squamish, and Tsleil-Waututh Nations.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>The biggest hurdle for the users is that Massy Books utilizes 3rd party white-labled book shop plugin that is not intergrated with the website visually and structurly. To simply put it, two websites are linked via navigation 'Shop' tab. For example, Massy Books website has responsive view but the store plugin only has desktop view. another issue is, Massy Books has two seperate shopping cart on in the website selling fundraiser tickets, and other in the store plugin. It is not possible to go back to the original website once enter the shop plugin unless user type in the original website's url.</p>
          <p>When user signed up at the e-commerce plugin, it is only limited to that and main site was not connected.</p>
          <p>The footer is overwhermmingly large, it has duplicate of the entire menu and the 'Blog' section dosn't have any content. Also the 'Search' only ables users to search events. This needed to be refactored and trimed down.</p>
          <p>There are a lot of redirect links exiting the website and send the users to other organizations and articles, to avoid lowering user retention, this links needed to be changed to opening the new tabs.</p>
        </div>

        <h2 className="textbox">Current Website Landing Screen</h2>
        <img className="big-img" src={previousLanding} alt="previous massy books site screen"/>
        <h2 className="textbox">Current User Flow</h2>
        <img className="big-img" src={previousUserFlow} alt="previous massy books user flow"/>

        <div className="textbox">
          <a href="https://www.massybooks.com/" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Link to Massy Books
          </a>
        </div>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Solution</h1>

          <p>Rearranged and cleaned up main navigation bar to merge two part of the website the main site and the e-commerce plugin. Instead of 'Home' button, the logo is doing the functionality.'Books'section only had short text content and duplicate contact us, shop link, I moved them to other pages in the website.</p>

          <p>Reduced the size of the footer minimum with nessessary informations. But added the newsletter section on top of it consistant throughout the website to encourage user engagement.</p>
        </div> 
        
        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-support indigenous-owned business.</p>
          <p>-buy books from a local store.</p>
          <p>-attend art exhibitions.</p>
          <p>-See upcoming events.</p>
          <p>-follow exposure in media.</p>
        </div>

        <h2 className="textbox">New User Flow</h2>
        <img className="big-img" src={newUserFlow} alt="new massy books user flow"/>
      </div>

      <div className="projects-secondary-container">
        <div className="web-wireframe">
          <div>
            <h2>Landing page desktop wireframe</h2>
            <p>relocated the notification section from the one of text links in landing page content to it's own right under the top navigation bar for maximum visivility.</p>
            <p>Brought out information about the Massy books to the landing page from subsection of the About page.</p>
            <img src={landingWeb} alt="landing page desktop wireframe"/>
          </div>

          <div>
            <h2>Shop page desktop wireframe</h2>
            <p>Added submenus to 'shop'. Users can have view books more pre selected and less overwhelmming. the users can still go find recommended book list. although i merged two seperate parts, contents are not lost. but more defined.</p>
            <img src={shopWeb} alt="shop page desktop wireframe"/>
          </div>

          <div>
            <h2>My Account page desktop wireframe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis in magna ultricies malesuada ornare id dolor. Ut nec eros vel elit ultrices molestie. Donec molestie ornare turpis ac congue. In iaculis porta turpis quis convallis.</p>
            <img src={accountWeb} alt="my account page desktop wireframe"/>
          </div>
        </div>

        <div className="mobile-wireframe">
          <div>
            <h2>Landing page mobile wireframe</h2>
            <p>even in the mobile view, shopping cart persist for user reminder.</p>
            <img src={landingMobile} alt="landing page mobile wireframe"/>
          </div>

          <div>
            <h2>Mobile navigation menu wireframe</h2>
            <p>When one submenu accordion opens, other automatically closes to prevent content flowing and makes users to scroll due to the big navigation.</p>
            <img src={hamburger} alt="navigation menu mobile wireframe"/>
          </div>

          <div>
            <h2>Shop page mobile wireframe</h2>
            <p>mobile shop page hides category section from horizontal bar selectors to drow down menu for more focused and clear informationn.</p>
            <img src={shopMobile} alt="shop page mobile wireframe"/>
          </div>

          <div>
            <h2>My Account page mobile wireframe</h2>
            <p>Account submenu persist on the top of the screen so the users can easily switch betweet the options. instead of open and close hamburger menu.</p>
            <p>unlike the desktop view, Removed the breadcrumb navigation for clear information.</p>
            <img src={accountMobile} alt="my account page mobile wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassyBooks;