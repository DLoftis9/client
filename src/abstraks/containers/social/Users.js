import React from 'react';
import PropTypes from 'prop-types';

import { isAuthenticated, list } from '../../../base/social/utils/auth';

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
    const { containerName } = this.props;
    const { users } = this.state;

    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={isAuthenticated().user.name} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>Users</h1>
              <ul className="user-card">
                {users.map((user, i) => {
                  return (
                    <li class="list-item" key={i}>
                      <div className="avatar">
                        <div className="avatar-image">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="name">{user.name}</div>
                      <div className="email">{user.email}</div>
                      <div className="anchor anchor_view">View</div>
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
