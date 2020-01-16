import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  refMethodOne: PropTypes.func,
  refMethodTwo: PropTypes.func,
  refMethodThree: PropTypes.func,
};

const ScrollToNavbar = props => (
  <div className="scrollTo">
    <div className="navbar__button" onClick={props.refMethodOne}>
      <div className="anchor anchor__navbar">About</div>
    </div>
    {/*  */}
    <div className="navbar__button" onClick={props.refMethodTwo}>
      <div className="anchor anchor__navbar">Work</div>
    </div>
    {/*  */}
    <div className="navbar__button" onClick={props.refMethodThree}>
      <div className="anchor anchor__navbar">Contact</div>
    </div>
  </div>
);

ScrollToNavbar.propTypes = propTypes;

export default ScrollToNavbar;
