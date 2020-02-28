import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

const propTypes = {
  componentName: PropTypes.string,
  authUserName: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

const defaultProps = {
  componentName: 'header-content',
};

const HeaderContent = props => (
  <div className={props.componentName}>
    <ul className="menu">
      <Avatar userName={props.authUserName} />
      <li className="listItem edit-profile_listItem">
        <Link className="anchor edit-profile_anchor" to="/profile">
          Profile
        </Link>
      </li>

      <li className="listItem settings_listItem">
        <Link className="anchor settings_anchor" to="/settings">
          Settings
        </Link>
      </li>

      <li className="listItem privacy-policy_listItem">
        <Link className="anchor privacy-policy_anchor" to="/privacy-policy">
          Privacy Policy
        </Link>
      </li>
      <li className="listItem termsOfUse_listItem">
        <Link className="anchor termsOfUse_anchor" to="/terms-of-use">
          Terms Of Use
        </Link>
      </li>
      <li className="listItem log-out_listItem">
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
