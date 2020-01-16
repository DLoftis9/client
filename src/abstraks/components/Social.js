import React from 'react';

const Social = () => (
  <div className="social">
    <div className="social__container">
      <a
        className="social__icon social__icon--facebook"
        href="https://www.facebook.com/Abstraks-163119513734216/"
      >
        <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>
      <a
        className="social__icon social__icon--instagram"
        href="https://www.instagram.com/abstraksmag/"
      >
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a
        className="social__icon social__icon--twitter"
        href="https://twitter.com/abstraksmag?lang=en"
      >
        <i className="fa fa-twitter-square" aria-hidden="true" />
      </a>
      <a className="social__icon social__icon--tumblr" href="http://abstraksmag.tumblr.com/">
        <i className="fa fa-tumblr-square" aria-hidden="true" />
      </a>
    </div>
  </div>
);

export default Social;
