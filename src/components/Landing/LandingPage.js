import React from 'react';
import {Link} from "react-router-dom";
import thumbnail from '../../image/rectangle.jpg';
import wtcThumbnail from '../../image/wtc-thumbnail.jpg';
import massyThumbnail from '../../image/massy-thumbnail.jpg';
import reactThumbnail from '../../image/react-thumbnail.jpg';
import goverThumbnail from '../../image/gover-thumbnail.jpg';

const LandingPage = () => {
  return (
    <div>
      <div id="landing-intro">
        <h1>Hi, I'm June. A Web and Mobile UX/UI Designer & Front-End developer based in Vancouver, Canada.</h1>
      </div>
      <div id="landing-layout">
        <div>
          <Link to="/wtc">
            <img src={wtcThumbnail} alt="wtc thumbnail"/>
            <div>Women Transforming Cities</div>
            <div>Website UX Redesign Project <span>&#8544;</span></div>
          </Link>
        </div>

        <div>
          <Link to="/massybooks">
            <img src={massyThumbnail} alt="massy books thumbnail"/>
            <div>Massy Books</div>
            <div>Website UX Redesign Project <span>&#8545;</span></div>
          </Link>
        </div>

        <div>
          <Link to="/vpl">
            <img src={thumbnail} alt="vpl thumbnail"/>
            <div>Vancouver Public Library</div>
            <div>Mobile App UX Redesign Project <span>&#8544;</span></div>
          </Link>
        </div>

        <div>
          <Link to="/streetfood">
            <img src={thumbnail} alt="street food app thumbnail"/>
            <div>Street Food App</div>
            <div>Mobile App UX Redesign Project <span>&#8545;</span></div>
          </Link>
        </div>

        <div>
          <Link to="/devreact">
            <img src={reactThumbnail} alt="react development thumbnail"/>
            <div>Interactive React Development Portfolio</div>
            <div>Web Development Showcase Project</div>
          </Link>
        </div>

        <div>
          <Link to="/gover">
            <img src={goverThumbnail} alt="gover thumbnail"/>
            <div>Gover</div>
            <div>Multiplatform Service Design & Development Project</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;