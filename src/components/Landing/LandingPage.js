import React from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div id="landing-layout">
      <ul>
        <li>
          <Link to="/wtc">WTC</Link>
        </li>
        <li>
          <Link to="/massybooks">MassyBooks</Link>
        </li>
        <li>
          <Link to="/vpl">VPL</Link>
        </li>
        <li>
          <Link to="/streetfood">Street Food</Link>
        </li>
        <li>
          <Link to="/devreact">Interactive React Development Portfolio</Link>
        </li>
        <li>
          <Link to="/gover">Gover</Link>
        </li>
      </ul>
    </div>
  );
}

export default LandingPage;