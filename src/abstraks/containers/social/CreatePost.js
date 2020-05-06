import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { isAuthenticated, create } from '../../../base/social/utils/auth';
import ErrorDisplay from '../../components/social/ErrorDisplay';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import Loader from '../../../base/scripts/Loader';

export default class CreatePost extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      photo: '',
      error: '',
      user: {},
      fileSize: 0,
      loading: false,
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

  componentDidMount() {
    this.postData = new FormData();
    this.setState({ user: isAuthenticated().user });
  }

  isValid = () => {
    const { title, body, fileSize } = this.state;

    if (fileSize > 1000000) {
      this.setState({
        error: ['File size should be less than 100mb'],
        loading: false,
      });
      return false;
    }

    if (title.length === 0 || body.length === 0) {
      this.setState({
        error: ['All fields are required'],
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

    this.postData.set(name, value);
    this.setState({ [name]: value, fileSize });
  };

  submit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.isValid()) {
      const userId = isAuthenticated().user._id;
      const token = isAuthenticated().token;

      create(userId, token, this.postData).then(data => {
        if (data.error) this.setState({ error: data.error, loading: false });
        else {
          this.setState({
            loading: false,
            title: '',
            body: '',
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
    const { title, body, photo, user, error, loading, redirectToProfile } = this.state;

    if (redirectToProfile) {
      return <Redirect to={`/user/${user._id}`} />;
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
              <h1>New Post</h1>

              <form className="form">
                <div className="input_photo">
                  <label className="label">Post Photo</label>
                  <input
                    className="input_photo"
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={this.change('photo')}
                  />
                </div>

                <div className="input_title">
                  <label className="label">Title</label>
                  <input
                    className="input"
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={this.change('title')}
                    placeholder="Title"
                  />
                </div>

                <div className="input_body">
                  <label className="label">Body</label>
                  <textarea
                    className="input"
                    id="body"
                    name="body"
                    type="text"
                    value={body}
                    onChange={this.change('body')}
                    placeholder="Body"
                  />
                </div>

                <button
                  onClick={this.submit}
                  className="button button-primary submit"
                  type="submit"
                >
                  Create Post
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
