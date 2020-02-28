import React from 'react';
// import PropTypes from 'prop-types';

// const propTypes = {
//   fill: PropTypes.string,
// };

const MenuSlideInLeft = () => (
  <nav role="navigation">
    <div className="menuToggle">
      {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}

      <input type="checkbox" />

      {/* Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff. */}

      <span></span>
      <span></span>
      <span></span>

      {/* Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic. */}

      <ul className="menu">
        <span >
          <li>Home</li>
        </span>
        <span >
          <li>About</li>
        </span>
        <span >
          <li>Info</li>
        </span>
        <span >
          <li>Contact</li>
        </span>
      </ul>
    </div>
  </nav>
);

// Loader.propTypes = propTypes;

export default MenuSlideInLeft;
