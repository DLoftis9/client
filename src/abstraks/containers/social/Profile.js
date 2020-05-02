import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../base/social/utils/config';
import { isAuthenticated, read } from '../../../base/social/utils/auth';

import Avatar from '../../components/social/Avatar';
import FollowWidget from '../../components/social/FollowWidget';
import DeleteUser from '../../components/social/DeleteUser';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import { Redirect, Link } from 'react-router-dom';

export default class Profile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: '',
    };
  }

  // check for like functionality
  checkFollow = user => {
    const jwt = isAuthenticated();
    const match = user.followers.find(follower => {
      // one id has many other ids(followers) and vice versa
      return follower._id === jwt.user._id;
    });

    return match;
  };

  clickFollowButton = callApi => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    callApi(userId, token, this.state.user._id).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ user: data, following: !this.state.following });
      }
    });
  };

  init = userId => {
    const token = isAuthenticated().token;

    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        let following = this.checkFollow(data);
        this.setState({ user: data, following });
      }
    });
  };

  componentDidMount() {
    console.log('user id from route params: ', this.props.match.params.userId);

    const userId = this.props.match.params.userId;

    this.init(userId);
  }
  // original lifecycle method that needs
  // to be refactored componentWillReceiveProps
  UNSAFE_componentWillReceiveProps(props) {
    const userId = props.match.params.userId;

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
    const url = config.apiBaseUrl;
    const { containerName } = this.props;
    const { redirectToSignin, user } = this.state;

    if (redirectToSignin) {
      return <Redirect to="/signin" />;
    }

    const photoUrl = user._id
      ? `${url}/user/photo/${user._id}?${new Date().getTime()}`
      : `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`;

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
                <h1 className="header-one">{user.name}'s Profile</h1>
                <div className={containerName + `_image`}>
                  <img
                    className={containerName + `-image`}
                    src={photoUrl}
                    onError={i =>
                      (i.target.src = `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`)
                    }
                    alt={user.name}
                  />
                </div>
                <p>Email: {user.email}</p>
                <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
              </div>

              <div className="user-manage">
                {isAuthenticated().user && isAuthenticated().user._id === user._id ? (
                  <>
                    <button>
                      <Link to={`/editProfile/${user._id}`}>Edit Profile</Link>
                    </button>

                    <DeleteUser userId={user._id} />
                  </>
                ) : (
                  <FollowWidget
                    following={this.state.following}
                    onButtonClick={this.clickFollowButton}
                  />
                )}
              </div>

              <div className="user-manage">
                <p className="user-about">{user.about}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
