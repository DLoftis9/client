import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import config from '../../../base/social/utils/config';
import {
  isAuthenticated,
  singlePost,
  deletePost,
  like,
  unlike,
} from '../../../base/social/utils/auth';
import Loader from '../../../base/scripts/Loader';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import Comment from '../../components/social/Comment';

export default class SinglePost extends React.PureComponent {
  state = {
    post: '',
    redirectToHome: false,
    redirectToSignin: false,
    like: false,
    likes: 0,
    comments: [],
  };

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };

  componentDidMount = () => {
    const postId = this.props.match.params.postId;

    singlePost(postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          post: data,
          likes: data.likes.length,
          like: this.checkLike(data.likes),
          comments: data.comments,
        });
      }
    });
  };

  updateComments = comments => {
    this.setState({ comments });
  };

  likeToggle = () => {
    if (!isAuthenticated()) {
      this.setState({
        redirectToSignin: true,
      });
      return false;
    }

    let callApi = this.state.like ? unlike : like;
    const userId = isAuthenticated().user._id;
    const postId = this.state.post._id;
    const token = isAuthenticated().token;

    callApi(userId, token, postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          like: !this.state.like,
          likes: data.likes.length,
        });
      }
    });
  };

  // method to just delete post
  removePost = () => {
    const postId = this.props.match.params.postId;
    const token = isAuthenticated().token;

    deletePost(postId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          redirectToHome: true,
        });
      }
    });
  };

  /**
   * todo: refactor prompt to a component
   */
  deleteConfirmed = () => {
    let answer = window.confirm('Are you sure you want to delete this post?');

    if (answer) {
      this.removePost();
    }
  };

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'single-post',
  };
  render() {
    const url = config.apiBaseUrl;
    const {
      // context,
      containerName,
    } = this.props;

    const { post, redirectToHome, redirectToSignin, like, likes, comments } = this.state;

    const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
    const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

    if (redirectToHome) {
      return <Redirect to="/home" />;
    } else if (redirectToSignin) {
      return <Redirect to={'/signin'} />;
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
              <Link to={`/home`} className="anchor anchor_view">
                <i className="fa fa-arrow-left" />
                <p className="back-text">Back to Home</p>
              </Link>

              {!post ? (
                <Loader />
              ) : (
                <>
                  <div className="post-card">
                    {isAuthenticated().user && isAuthenticated().user._id === post.postedBy._id && (
                      <div className="user_manage">
                        <Link to={`edit/${post._id}`} className="edit">
                          <i className="edit-icon fa fa-pencil-square-o" aria-hidden="true"></i>
                          <p className="icon_text">Edit Post</p>
                        </Link>

                        <button onClick={this.deleteConfirmed} className="delete">
                          <i className="fa fa-close"></i>
                          <p className="icon_text">Delete Post</p>
                        </button>
                      </div>
                    )}

                    <h3 className="header-three">
                      <Link to={`${posterId}`}>{posterName}</Link>
                    </h3>
                    <h2 className="post_title header-two">{post.title}</h2>
                    <img
                      src={`${url}/post/photo/${post._id}`}
                      alt={post.title}
                      onError={i =>
                        (i.target.src =
                          'https://abstraksresources.s3-us-west-1.amazonaws.com/images/defaultPost.svg')
                      }
                      className="image-thumb image"
                    />

                    {/* the substring method controls how many characters are shown for the post body */}
                    <p className="post_body paragraph">{post.body}</p>

                    <p className="posted-by">
                      <span className="callout">{new Date(post.created).toDateString()}</span>
                    </p>

                    <Link to={`${posterId}`} className="anchor anchor_view">
                      <i className="fa fa-arrow-left" />
                      <p className="back-text">Back to {posterName}'s profile</p>
                    </Link>
                  </div>
                  <div className="user-response_menu">
                    <div className="like_toggle">
                      {like ? (
                        <span className="like" onClick={this.likeToggle}>
                          <i className="icon_like fa fa-heart" aria-hidden="true"></i>
                        </span>
                      ) : (
                        <span className="unlike" onClick={this.likeToggle}>
                          <i className="icon_unlike fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                      )}
                      <span className="likes">{likes}</span>
                    </div>

                    <Comment
                      postId={post._id}
                      comments={comments.reverse()}
                      updateComments={this.updateComments}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
