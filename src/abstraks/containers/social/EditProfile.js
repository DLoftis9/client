import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import { isAuthenticated, read, update, updateUser } from '../../../base/social/utils/auth';
import ErrorDisplay from '../../components/social/ErrorDisplay';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import Loader from '../../../base/scripts/Loader';

export default class EditProfile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      email: '',
      password: '',
      about: '',
      error: '',
      fileSize: 0,
      redirectToProfile: false,
      loading: false,
    };
  }

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'edit-profile',
  };

  init = userId => {
    const token = isAuthenticated().token;

    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToProfile: true });
      } else {
        this.setState({
          id: data._id,
          name: data.name,
          email: data.email,
          about: data.about,
          error: '',
        });
      }
    });
  };

  componentDidMount() {
    this.userData = new FormData();

    const userId = this.props.match.params.userId;

    this.init(userId);
  }

  isValid = () => {
    const { name, email, password, fileSize } = this.state;

    if (fileSize > 1000000) {
      this.setState({
        error: ['File size should be less than 100mb'],
        loading: false,
      });
      return false;
    }

    if (name.length === 0) {
      this.setState({
        error: ['Name is required'],
        loading: false,
      });
      return false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({
        error: ['A valid email is required'],
        loading: false,
      });
      return false;
    }

    if (password.length >= 1 && password.length <= 5) {
      this.setState({
        error: ['Password must be at least 6 characters long'],
        loading: false,
      });
      return false;
    }

    return true;
  };

  change = name => event => {
    this.setState({ error: '' });

    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    const fileSize = name === 'photo' ? event.target.files[0].size : 0;

    this.userData.set(name, value);
    this.setState({ [name]: value, fileSize });
  };

  submit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.isValid()) {
      // this.setState({ loading: true });
      // const { name, email, password } = this.state;
      // const user = {
      //   name,
      //   email,
      //   password: password || undefined,
      // };

      const userId = this.props.match.params.userId;
      const token = isAuthenticated().token;

      // the user parameter handles input data
      // the this.userData parameter handles photo data

      // to update just text, replace this.userData with just user
      update(userId, token, this.userData).then(data => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          // updating user data in local storage
          updateUser(data, () => {
            // authenticate
            this.setState({
              redirectToProfile: true,
            });
          });
        }
      });
    }
  };

  render() {
    const {
      // context,
      containerName,
    } = this.props;
    const { id, name, email, password, about, redirectToProfile, error, loading } = this.state;

    if (redirectToProfile) {
      return <Redirect to={`/user/${id}`} />;
    }
    const url = config.apiBaseUrl;

    const photoUrl = id ? (
      `${url}/user/photo/${id}?${new Date().getTime()}`
    ) : (
      <div className="avatar-image default-image">
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    );

    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={isAuthenticated().user.name} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>Edit Profile</h1>

              <div className={containerName + `_image`}>
                <img
                  className="profile-image"
                  src={photoUrl}
                  onError={i =>
                    (i.target.src = `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`)
                  }
                  alt={name}
                />
              </div>

              <form className="form">
                <div className="input_photo">
                  <label className="label">Profile Photo</label>
                  <input
                    className="input_photo"
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={this.change('photo')}
                  />
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>

                <div className="input_name">
                  <label className="label">Name</label>
                  <input
                    className="input"
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={this.change('name')}
                    placeholder="Name"
                  />
                </div>

                <div className="input_email">
                  <label className="label">Email</label>
                  <input
                    className="input"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.change('email')}
                    placeholder="Email"
                  />
                </div>

                <div className="input_password">
                  <label className="label">Password</label>
                  <input
                    className="input"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.change('password')}
                    placeholder="Password"
                  />
                </div>

                <div className="input_about">
                  <label className="label">About</label>
                  <textarea
                    className="input"
                    id="about"
                    name="about"
                    type="text"
                    value={about}
                    onChange={this.change('about')}
                    placeholder="About"
                  />
                </div>

                <button
                  onClick={this.submit}
                  className="button button-primary submit"
                  type="submit"
                >
                  Update
                </button>
              </form>
              <div className="error form-error" style={{ display: error ? '' : 'none' }}>
                <ul className="unordered-list">
                  <ErrorDisplay errors={error} />
                </ul>
              </div>
              {loading ? <Loader /> : ''}
            </div>
          </div>
        </div>
      </>
    );
  }
}
