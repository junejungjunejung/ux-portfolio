import React from 'react';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import previousAccount from '../../image/vpl-current-account.jpg';
import previousExplore from '../../image/vpl-current-explore.jpg';
import previousSearch from '../../image/vpl-current-search.jpg';

import previousUserFlow from '../../image/vpl-usermap-current.jpg';
import newUserFlow from '../../image/vpl-usermap-new.jpg';

import account from '../../image/vpl-account.jpg';
import book from '../../image/vpl-book.jpg';
import explore from '../../image/vpl-explore.jpg';
import filters from '../../image/vpl-filters.jpg';
import library from '../../image/vpl-library.jpg';
import locations from '../../image/vpl-locations.jpg';
import login from '../../image/vpl-login.jpg';
import plus from '../../image/vpl-plus.jpg';
import search from '../../image/vpl-search.jpg';

const VPL = () => {
  return (
    <div className="projects-container" id="vpl-layout">
      <div className="textbox">
        <h1>Mobile App UX Redesign Project <span>&#8544;</span></h1>

        <h2>Vancouver Public Library Mobile</h2>
        <p>VPL has a standalone responsive website for informational purposes and also has a mobile app for library users with a library card to browse, search, hold books, and manage their checked out books. The mobile app is built with a white-labeled library app.</p>
        <p>While using the app, I found out that some features are broken and not functional, have empty or abundant contents. I wanted to update the outdated layout and simplify the structure to give a more coherent user experience.</p>
      </div>

      <Divider className="divider"/>

      <div>
        <div className="textbox">
          <h1>Problem Analysis</h1>
          <p>Only the users who previously signed up physically at one of the library locations and have a library card with an assigned PIN can sign in for the app using the card and PIN. </p>   
          <p>On the current VPL Mobile app, any user can access the app, however, most of the app's functionality is for the signed-in users and the login screen shows up at many stages in the app blocking user interaction.</p>
          <p>There are abundancies such as the email address info in 'Individual Library Location' since all VPL shares one email address, or the available location icons on the top app bar in the book detail page that provides identical functionality in different formats.</p>
          <p>Tabs in the 'More' page such as 'Privacy Statement', 'Terms of Use', 'Accessibility Statement' that has no content but redirecting to the VPL website, and the 'Cache Settings' tab which offers deleting cache is an irrelevant function which makes the app complicated and distracting for the user experience.</p>
          <p>Additionally, there are broken components to be refactored such as the 'Preferred Location for this Device' and 'Send Feedback about this App' tabs.</p>
          <p>Finally, there is the 'Fees' section in the 'My VPL' tab that is informational only. In order to pay the delay fee, the user has to call a library to make a credit card payment over the phone. Which can be improved for a better user experience.</p>
        </div>

        <h2 className="textbox">Current App Screens</h2>
        <div className="current-app-screen">          
          <div>
            <h3>Current Explore Screen</h3>
            <img src={previousExplore} alt="previous vpl explore screen"/>
          </div>

          <div>
            <h3>Current Search Screen</h3>
            <img src={previousSearch} alt="previous vpl search screen"/>
          </div>

          <div>
            <h3>Current My VPL Screen</h3>
            <img src={previousAccount} alt="previous vpl my account screen"/>
          </div>
        </div>

        <div>
          <h2 className="textbox">Current User Flow</h2>
          <img className="big-img" src={previousUserFlow} alt="previous vpl user flow"/>
        </div>

        <div className="textbox">
          <a href="https://apps.apple.com/app/vpl-mobile/id422360968?l=en" className="website-links" target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon /> Link to App Store
          </a>        
        </div>
      </div>

      <Divider className="divider"/>
      
      <div>
        <div className="textbox">
          <h1>Solution</h1>

          <p>Overall, I wanted to give VPL Mobile app a streamlined user experience by providing functionalities that can help the users perform most of the library process with the app and minimizing the need for physical visitings, and removing redundant, unnecessary contents complicating the user flow.</p>
          <p>For example, I moved the login screen from placed in several locations throughout the app blocking user's interaction to logging in once at the landing screen, added the digital sign-up functionality, also, add the in-app credit card payment section to enable users to pay the fee online.</p>
          <p>For the user interface, I made changes in layout to give a more coherent and unified look and a more modern interface.</p>
        </div>
        
        <div className="textbox">
          <h2>User Story</h2>
          <p>as a user, I want to…</p>
          <p>-Check which library location has the availability of books I want to read next.</p>
          <p>-Hold books and get notified when the books are ready for pick up.</p>
          <p>-Keep up with the status of books I borrowed from the library and check the overdue to avoid fines.</p>
          <p>-Know the library's events, and manage my events by adding them to my list.</p>
        </div>

        <div>
          <h2 className="textbox">New User Flow</h2>
          <img className="big-img" src={newUserFlow} alt="new vpl user flow"/>
        </div>

        <div className="app-wireframe">
          <div>
            <h2>Login wireframe</h2>
            <p>Added the 'Login or Register' screen as the landing page to prevent the user gets frustrated by getting blocked by the login screen several locations while using the app. Now the users can register in-app digitally, instead of needing to visit a library physically.</p>
            <img src={login} alt="login wireframe"/>
          </div>

          <div>
            <h2>Explore wireframe</h2>
            <p>Removed the 'Recently Reviewed' and the 'Just Ordered' categories and added 'Available Now' which affects user's decision more directly.  Changed the layout by removing the image only carousel, and instead of the nested listing, changed to tabs with visible list items with thumbnail images and details to utilize more space and to show more information.</p>
            <img src={explore} alt="explore wireframe"/>
          </div>

          <div>
            <h2>Individual book wireframe</h2>
            <p>The 'Available Locations' button lets the user know which location has the book available. Added the 'Reset' functionality for the book rating. Cleaned up user contents ('Comments', 'Summaries', 'Quotations', 'Age', 'Videos') and merged it to 'Reviews'.</p>
            <img src={book} alt="individual book wireframe"/>
          </div>

          <div>
            <h2>Search wireframe</h2>
            <p>The search page displays the default list instead of showing a blank page to the user. The summary text lets the user know the number of search results. Added how many stars the book has to give more information to the user.</p>
            <img src={search} alt="search wireframe"/>
          </div>

          <div>
            <h2>Search filters wireframe</h2>
            <p>Changed the filters layout from nested lists to multi choice tabs and a Rolodex selector for language filter. Simplified filters from 15 sections (Topic, Content, form/genre, language, publish date, region, author, etc.) to 4 to avoid overwhelming the users. Added the 'Apply' and the 'Clear All' button for more clear user experience.</p>
            <img src={filters} alt="search filters wireframe"/>
          </div>

          <div>
            <h2>Plus icon wireframe</h2>
            <p>Simplified the given options by removing abundance such as the 'Check Available Details' and the 'Map Available Copies' and removed the 'Download' button that redirects to the VPL website.</p>
            <img src={plus} alt="plus icon wireframe"/>
          </div>

          <div>
            <h2>My VPL wireframe</h2>
            <p>Added the 'My Account' tab to manage the user's payment method, and relocated the 'My Library Card Barcode' and the 'Preferred Location Device' tabs from the 'More' tab. Users can make in-app purchases instead of needing to call a library to make credit card payments or visit them physically.</p>
            <img src={account} alt="my vpl wireframe"/>
          </div>

          <div>
            <h2>Locations wireframe</h2>
            <p>Changed the layout by moving the filters ('View Nearest Location' and 'See List') to the top app bar, and made text buttons to icon buttons for visual clarity.</p>
            <img src={locations} alt="locations wireframe"/>
          </div>

          <div>
            <h2>Individual library wireframe</h2>
            <p>Changed the layout by moving the image location to the top to give more unified eye-tracking, removed the email contact since all library locations use the same email address, simplified opening hours by showing only today's hours instead of all week on one screen.</p>
            <img src={library} alt="library wireframe"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VPL;