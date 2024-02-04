import React from "react";
import SvgNetflixLog from "../icons/NetflixLog";
import { Link } from "@reach/router";
import "../../images/netflix-logo.png" // must for build. // Import Way 2

import Nav from "./nav";

const Header = () => {
    return <div>
        <Link to="/">
            <SvgNetflixLog />
        </Link>
        <Nav />
        <div className="user-profile" >
        <div className="user">
          <div className="name">Imran Sayed</div>
          <div className="image">
            <img src="/images/netflix-logo.png" alt="netflix"/>
          </div>
        </div>
      </div>
    </div>
}

export default Header