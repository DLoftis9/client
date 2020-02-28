import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
  authUserName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'header-content',
};

const HeaderContent = props => (
  <div className={props.componentName}>
    {/* <span className="glyphicon glyphicon-home">
              <Link to='/test'>
                discover
              </Link>
          </span>
          <span className="glyphicon glyphicon-cloud-download">Cloud</span>
          <span className="glyphicon glyphicon-trash">Trash</span>
          <span className="glyphicon glyphicon-upload">Upload</span> */}

    <ul className="menu">
      <li className="avatar-name">
        <h2 className="user-name">{props.authUserName}</h2>
      </li>
      <li className="listItem edit-profile">
        <Link className="anchor edit-profile_anchor" to="/editprofile">
          Profile
        </Link>
      </li>
      <li className="listItem discover">
        <Link className="anchor discover_anchor" to="/discover">
          Discover
        </Link>
      </li>

      <li className="listItem settings">
        <Link className="anchor settings_anchor" to="/settings">
          Settings
        </Link>
      </li>

      <li className="listItem privacy-policy">
        <Link className="anchor privacy-policy_anchor" to="/privacy-policy">
          Privacy Policy
        </Link>
      </li>
      <li className="listItem termsOfUse">
        <Link className="anchor termsOfUse_anchor" to="/terms-of-use">
          Terms Of Use
        </Link>
      </li>
      <li className="listItem log-out">
        <Link className="anchor log-out_anchor" to="/signout">
          Sign Out
        </Link>
      </li>
    </ul>
  </div>
);

HeaderContent.propTypes = propTypes;
HeaderContent.defaultProps = defaultProps;

export default HeaderContent;
