import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NotFound extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'not-found',
  };
  render() {
    const { containerName } = this.props;
    return (
      <>
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>Not Found</h1>
              <p>Sorry! We couldn't find the page you're looking for.</p>

              <p className="account-redirect">
                You may{' '}
                <Link className="anchor account-redirect_link" to="/signin">
                  Sign In
                </Link>
                <span> | </span>
                <Link className="anchor account-redirect_link" to="/signup">
                  Sign Up
                </Link>
                <span> | </span>
                <Link className="anchor account-redirect_link" to="/">
                  Return Home
                </Link>
                <span> | </span>
                to sign in!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
