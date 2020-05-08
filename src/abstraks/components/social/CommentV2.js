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
  };

  handleChange = event => {
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
      <div className={containerName}>
        <h4>Leave a comment</h4>
        <form className="form" onSubmit={this.addComment}>
          <input className="input text-area" type="text" onChange={this.handleChange} />
        </form>
        {JSON.stringify(comments)}

        <div>
          <h4 className="header-four">{comments.length} Comments</h4>
          {comments.map((comment, i) => (
            <div key={i}>
              <div>
                <Link to={`/user/${comment.postedBy._id}`}>
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
                <div>
                  <p className="text">{comment.text}</p>
                  <p className="user-post_info">
                    Posted by{' '}
                    <Link to={`/user/${comment.postedBy._id}`}>{comment.postedBy.name} </Link>
                    on {new Date(comment.created).toDateString()}
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
