import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import { isAuthenticated, list } from '../../../base/social/utils/auth';

import Avatar from '../../components/social/Avatar';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class Tools extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'users',
  };
  render() {
    const url = config.apiBaseUrl;
    const { containerName } = this.props;
    const { users } = this.state;

    return (
      <>
        {/* menu for small devices */}
        <MenuSlideIn
          // extraClassName={containerName}
          bodyContent={<HeaderContent />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>Users</h1>
              <ul className="user-card">
                {users.map((user, i) => {
                  return (
                    <li className="list-item" key={i}>
                      <Link className="anchor_card" to={`/user/${user._id}`}>
                        <div className={containerName + `_image`}>
                          <img
                            className={containerName + `-image image`}
                            src={`${url}/user/photo/${user._id}`}
                            onError={i =>
                              (i.target.src = `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`)
                            }
                            alt={user.name}
                          />
                        </div>
                        <p className="user_name">{`${user.name}`}</p>
                      </Link>
                      <Link to={`/user/${user._id}`} className="anchor anchor_view">
                        View
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
