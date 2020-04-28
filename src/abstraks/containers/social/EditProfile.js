import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { isAuthenticated, read, update } from '../../../base/social/utils/auth';
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
      error: '',
      redirectToProfile: false,
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
        this.setState({ id: data._id, name: data.name, email: data.email, error: '' });
      }
    });
  };

  componentDidMount() {
    console.log('user id from route params: ', this.props.match.params.userId);

    const userId = this.props.match.params.userId;

    this.init(userId);
  }

  isValid = () => {
    const { name, email, password } = this.state;

    if (name.length == 0) {
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

  change = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });

    this.setState({ error: '' });
  };

  submit = event => {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ loading: true });
      const { name, email, password } = this.state;
      const user = {
        name,
        email,
        password: password || undefined,
      };

      const userId = this.props.match.params.userId;
      const token = isAuthenticated().token;

      update(userId, token, user).then(data => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          // authenticate
          this.setState({
            redirectToProfile: true,
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
    const { id, name, email, password, redirectToProfile, error, loading } = this.state;

    if (redirectToProfile) {
      return <Redirect to={`/user/${id}`} />;
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
              <h1>Edit Post</h1>
              <form className="form">
                <div className="input_name">
                  <label className="label">Name</label>
                  <input
                    className="input"
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={this.change}
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
                    onChange={this.change}
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
                    onChange={this.change}
                    placeholder="Password"
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
