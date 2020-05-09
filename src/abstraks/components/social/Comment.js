import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import { comment, uncomment, isAuthenticated } from '../../../base/social/utils/auth';

export default class Comment extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'comments',
  };

  state = {
    text: '',
    error: '',
  };

  handleChange = event => {
    this.setState({ error: '' });
    this.setState({ text: event.target.value });
  };

  addComment = e => {
    e.preventDefault();

    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    const postId = this.props.postId;

    comment(userId, token, postId, { text: this.state.text }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ text: '' });
        // dispatch fresh list of comments to parent container(SinglePost)
        this.props.updateComments(data.comments);
      }
    });
  };

  render() {
    const url = config.apiBaseUrl;
    const {
      // context,
      containerName,
      comments,
    } = this.props;

    return (
      <>
        <span className="comments-total">
          <i className="fa fa-comment-o" aria-hidden="true">
            {comments.length}
          </i>
        </span>

        <div className={containerName}>
          {/* {JSON.stringify(comments)} */}

          {comments.map((comment, i) => (
            <React.Fragment key={i}>
              <div className="commenter-info">
                <Link className="user-profile_image" to={`/user/${comment.postedBy._id}`}>
                  <img
                    className="user-photo"
                    onError={i =>
                      (i.target.src =
                        'https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg')
                    }
                    src={`${url}/user/photo/${comment.postedBy._id}`}
                    alt={comment.postedBy.name}
                  />
                </Link>
                <div className="commenter-message">
                  <Link className="user-profile_link" to={`/user/${comment.postedBy._id}`}>
                    {comment.postedBy.name}{' '}
                  </Link>
                  <p className="text">{comment.text}</p>
                  <p className="user-post_info">
                    <span className="date">{new Date(comment.created).toDateString()}</span>
                    {/* <span>
                      {isAuthenticated().user &&
                        isAuthenticated().user._id === comment.postedBy._id && (
                          <>
                            <span onClick={() => this.deleteConfirmed(comment)} className="remove">
                              <i className="fa fa-close"></i>
                              Remove
                            </span>
                          </>
                        )}
                    </span> */}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
          <form className="form" onSubmit={this.addComment}>
            <input
              placeholder="Leave a comment"
              className="input text-area"
              type="text"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </>
    );
  }
}
