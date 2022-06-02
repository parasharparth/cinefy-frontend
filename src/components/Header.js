import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";



function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const closeHamburger = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav id="header">
      <div class="logo">CINEFY</div>

      <div class="rightSide">
        <ul class="navbar-links" id={showLinks ? "hidden" : ""}>
          <Link to="/">
            <li>
              <a
                id="home-page"
                onClick={closeHamburger}
                class="active"
                href="/"
                data-after="Home"
              >
                Home
              </a>
            </li>
          </Link>
         
          <Link to="/bookings">
            <li>
              <a
                id="gallery-page"
                onClick={closeHamburger}
                class="active"
                href="/bookings"
                data-after="Gallery"
              >
                Bookings
              </a>
            </li>
          </Link>
          <Link to="/payment">
            <li>
              <a
                  id="payment"
                  onClick={closeHamburger}
                  class="active"
                  href="/payment"
                  data-after="Gallery"
              >
                Payment
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a
                id="about-page"
                onClick={closeHamburger}
                class="active"
                href="/about"
                data-after="About Us"
              >
                About Us
              </a>
            </li>
          </Link>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
}

export default Nav;