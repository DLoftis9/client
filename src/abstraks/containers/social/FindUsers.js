import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import { isAuthenticated, findPeople, follow } from '../../../base/social/utils/auth';

import Avatar from '../../components/social/Avatar';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class FindUsers extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      users: [],
      error: '',
      open: false,
    };
  }

  componentDidMount() {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    findPeople(userId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  clickFollow = (user, i) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    follow(userId, token, user._id).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        let toFollow = this.state.users;
        toFollow.splice(i, 1);
        this.setState({
          users: toFollow,
          open: true,
          followMessage: `Following ${user.name}`,
        });
      }
    });
  };

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'find-users',
  };
  render() {
    const url = config.apiBaseUrl;
    const { containerName } = this.props;
    const { users, open, followMessage } = this.state;

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
              <h1>Find Users</h1>

              <>{open && <p>{followMessage}</p>}</>

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
                      <button
                        onClick={() => this.clickFollow(user, i)}
                        className="button button-primary"
                      >
                        Follow
                      </button>
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
