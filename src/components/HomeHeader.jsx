import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function HomeHeader() {
  return (
    <header id="home-showcase">
      <div className="container">
        <div className="showcase-content">
          <h1><span>Connect</span> With Your Community</h1>
          <p>
            713 Community is a space for <span>Houston</span> to share and connect with one
            another
          </p>
          <a href="#about" className="btn btn-primary">
            <FontAwesomeIcon icon={faChevronDown} /> Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
