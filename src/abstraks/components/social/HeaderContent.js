import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoggedOutLinks from './LoggedOutLinks';

// This component renders the headerSocial content in the mobile menu

const propTypes = {
  authUser: PropTypes.object.isRequired,
  authUserName: PropTypes.string.isRequired,
};

const HeaderContent = props => (
  <>
    {props.authUser ? (
      <React.Fragment>
        <div className="avatar">
          <div className="avatar-image">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>

        <ul className="contents">
          <li className="avatar-name">
            <h2 className="user-name">{props.authUserName}</h2>
          </li>
          <li className="listItem profile">
            <Link className="anchor profile_anchor" to="/editprofile">
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
      </React.Fragment>
    ) : (
      <LoggedOutLinks />
    )}
  </>
);

HeaderContent.propTypes = propTypes;

export default HeaderContent;

//   {authUser ? (
//     // If authUser evaluates to a truthy value (there is an authenticated
//     // user in state), the Header class renders a <span> element containing
//     // a "Welcome" message that displays the user name. Render the user's
//     // name with {authUser.name}
//     <React.Fragment>
//       <div className="avatar">
//         <div className="avatar-image">
//           <i className="fa fa-user" aria-hidden="true"></i>
//         </div>
//       </div>

//       <Toggle
//         openContent={
//           <>
//             <span className="triangle-top"></span>
//             <ul className="menu">
//               <li className="avatar-name">
//                 <h2 className="user-name">{authUser.name}</h2>
//               </li>
//               <li className="listItem edit-profile">
//                 <Link className="anchor edit-profile_anchor" to="/editprofile">
//                   Profile
//                 </Link>
//               </li>
//               <li className="listItem discover">
//                 <Link className="anchor discover_anchor" to="/discover">
//                   Discover
//                 </Link>
//               </li>

//               <li className="listItem settings">
//                 <Link className="anchor settings_anchor" to="/settings">
//                   Settings
//                 </Link>
//               </li>

//               <li className="listItem privacy-policy">
//                 <Link className="anchor privacy-policy_anchor" to="/privacy-policy">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li className="listItem termsOfUse">
//                 <Link className="anchor termsOfUse_anchor" to="/terms-of-use">
//                   Terms Of Use
//                 </Link>
//               </li>
//               <li className="listItem log-out">
//                 <Link className="anchor log-out_anchor" to="/signout">
//                   Sign Out
//                 </Link>
//               </li>
//             </ul>
//           </>
//         }
//       />
//     </React.Fragment>
//   ) : (
//     // If authUser is falsy (the authenticatedUser state is null, for example),
//     // the Header class renders the default navigation, displaying the "Sign Up"
//     // and "Sign In" links
//     <LoggedOutLinks />
//   )}
