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
        <p>Massy Books is 100% Indigenous owned and operated and a member of the Stó:lō Business Association In Vancouver. They acknowledge that they operate on the traditional, ancestral, unceded, and occupied territory of the Musqueam, Squamish, and Tsleil-Waututh Nations.</p>
        <p>They support local and indigenous artists by holding performances and exhibitions in the gallery located in their store location.
        </p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>The biggest hurdle for the users of Massy Books is that they utilize 3rd party white-labeled e-commerce plugin that is not integrated with the website visually and structurally.</p>
          <p>To simply put it, two websites are linked together via the navigation 'Shop' tab. The main part of the Massy Books website has a responsive view however the e-commerce site only has a desktop view. 
          </p>
          <p>Sign up is only provided for the e-commerce site, the main website has no linked user engagement because of the websites being separate. Another issue is, Massy Books has two separate shopping carts on the main website selling fundraiser tickets, and others for books on the e-commerce site.</p>
          <p>Once the user enters the e-commerce site, it is not possible to go back to the main website unless the user types in the original website's URL.
          </p>
          <p>The footer is overwhelmingly large, it has a duplicate of the entire menu, and the 'Blog' section doesn't have any content. Also, the 'Search' only able users to search for events. This needed to be refactored and trimmed down.</p>
          <p>There are a lot of redirect links throughout the website that send the users to other organizations and to original articles. To avoid lowering the user retention rate, these links need to be changed to opening new tabs.</p>
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

          <p>The main navigation needed to be rearranged by their relevancy and cleaned up to merge two separate parts of the website, the main site and the e-commerce plugin.</p>

          <p>Removed the 'Home' button since the logo of Massy Books providing the same functionality, and the whole 'Books' section since it's only content was short text and duplicate of the 'Contact us', 'Shop' links. I moved the contents to other pages on the website.</p>

          <p>Reduced the size of the footer to a minimum with necessary information. But added the newsletter section on top of the footer that consistent throughout the website to encourage user engagement.</p>
        </div> 
        
        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-Support indigenous-owned business.</p>
          <p>-Buy books from a local store to support small bussiness owners.</p>
          <p>-Attend art exhibitions of local artists.</p>
          <p>-See upcoming events Massy Books holds.</p>
          <p>-Follow media exposures of Massy Books from the news to online articles.</p>
        </div>

        <h2 className="textbox">New User Flow</h2>
        <img className="big-img" src={newUserFlow} alt="new massy books user flow"/>
      </div>

      <div className="textbox">
        <div className="web-wireframe">
          <div>
            <h2>Landing page desktop wireframe</h2>
            <p>Relocated the notification section from one of the text links in the landing page content to underneath the top navigation bar for the content hierarchy.</p>
            <p>Brought out relative information about Massy books to the landing page from the subsection of the About page.</p>
            <img src={landingWeb} alt="landing page desktop wireframe"/>
          </div>

          <div>
            <h2>Shop page desktop wireframe</h2>
            <p>Added the submenu items to the 'shop' main navigation. The users can view books more pre-selected and less overwhelming manner. The users can find the recommended book list. Even though two separate parts of the website were merged together, there is no loss of content.</p>
            <img src={shopWeb} alt="shop page desktop wireframe"/>
          </div>

          <div>
            <h2>My Account page desktop wireframe</h2>
            <p>Created a submenu section for the 'My Account' page for users to manage not only the account details but also the payment methods, order history, my list, and more at a glance without needing to find it scattered throughout the website. </p>
            <img src={accountWeb} alt="my account page desktop wireframe"/>
          </div>
        </div>

        <div className="mobile-wireframe">
          <div>
            <h2>Landing page mobile wireframe</h2>
            <p>The shopping cart icon persists on the mobile view top navigation for user's reminder.</p>
            <img src={landingMobile} alt="landing page mobile wireframe"/>
          </div>

          <div>
            <h2>Shop page mobile wireframe</h2>
            <p>The mobile view of the 'Shop' page hides categories from the horizontal bar selectors to the drop-down menu for more focused and clear information.</p>
            <img src={shopMobile} alt="shop page mobile wireframe"/>
          </div>

          <div>
            <h2>My Account page mobile wireframe</h2>
            <p>The 'Account' submenu persists on the top of the screen for the users to easily switch between the menu items instead of going through the opening and closing of the hamburger menu.</p>
            <p>The breadcrumb navigation is removed for clear information delivery.</p>
            <img src={accountMobile} alt="my account page mobile wireframe"/>
          </div>

          <div>
            <h2>Mobile navigation menu wireframe</h2>
            <p>When one submenu accordion opens, the other automatically closes to prevent content from getting longer and forcing users to scroll through long navigation.</p>
            <img src={hamburger} alt="navigation menu mobile wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassyBooks;