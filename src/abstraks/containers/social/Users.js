import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                    <li className="list-item" key={i}>
                      <Avatar userName={user.name} />
                      {/* <div className="email">{user.email}</div> */}
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
