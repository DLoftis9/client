import React from 'react';
import PropTypes from 'prop-types';

import { isAuthenticated, read } from '../../../base/social/utils/auth';

import Avatar from '../../components/social/Avatar';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import { Redirect, Link } from 'react-router-dom';

export default class Profile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      user: '',
      redirectToSignin: false,
    };
  }

  init = userId => {
    const token = isAuthenticated().token;

    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        this.setState({ user: data });
      }
    });
  };

  componentDidMount() {
    console.log('user id from route params: ', this.props.match.params.userId);

    const userId = this.props.match.params.userId;

    this.init(userId);
  }

  static propTypes = {
    containerName: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClassName: PropTypes.string,
    instructions: PropTypes.string,
    title: PropTypes.string,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'profile',
    instructions: 'Hit "Enter" to confirm, Click a pill to remove',
    title: 'Skills',
  };

  render() {
    const { containerName } = this.props;
    const { redirectToSignin, user } = this.state;
    if (redirectToSignin) {
      return <Redirect to="/signin" />;
    }

    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={isAuthenticated().user.name} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <div className="user-info">
                <h1 className="header-one">{isAuthenticated().user.name}'s Profile</h1>
                <Avatar userName={isAuthenticated().user.name} />
                <p>Email: {isAuthenticated().user.email}</p>
                <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
              </div>

              <div className="user-manage">
                {isAuthenticated().user && isAuthenticated().user._id == user._id && (
                  <>
                    <button>
                      <Link to={`/user/edit/${user._id}`}>Edit Profile</Link>
                    </button>

                    <button>delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
