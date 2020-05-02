import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../base/social/utils/config';
import { isAuthenticated } from '../../../base/social/utils/auth';
import { Link } from 'react-router-dom';

export default class Following extends React.PureComponent {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    componentName: 'profile-tabs',
  };
  render() {
    const url = config.apiBaseUrl;
    const {
      // context,
      componentName,
      following,
      followers,
    } = this.props;

    return (
      <div className={componentName}>
        <div className={componentName + `_following`}>
          <p>Following</p>
          {followers.map((person, i) => {
            return (
              <div key={i}>
                <div>
                  <Link to={`/user${person._id}`}>
                    <img
                      className="tab-image"
                      onError={i =>
                        (i.target.src = `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`)
                      }
                      src={`${url}/user/photo/${person._id}`}
                      alt={person.name}
                    />
                    <h3 className="header-three">{person.name}</h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className={componentName + `_followers`}>
          <p>Followers</p>
          {JSON.stringify(followers)}
        </div>
      </div>
    );
  }
}
