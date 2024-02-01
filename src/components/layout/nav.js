import React from 'react';
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul >
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Nav