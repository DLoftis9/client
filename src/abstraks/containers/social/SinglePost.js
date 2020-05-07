import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '../../../base/social/utils/config';
import { isAuthenticated, singlePost } from '../../../base/social/utils/auth';
import Loader from '../../../base/scripts/Loader';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class SinglePost extends React.PureComponent {
  state = {
    post: '',
    loading: false,
  };

  componentDidMount = () => {
    const postId = this.props.match.params.postId;
    singlePost(postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ post: data });
      }
    });
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

    const { post, loading } = this.state;
    const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
    const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

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
                <div className="post-card">
                  {isAuthenticated().user && isAuthenticated().user._id === post.postedBy._id && (
                    <div className="user_manage">
                      <button className="edit">
                        <i className="edit-icon fa fa-pencil-square-o" aria-hidden="true"></i>
                        <p className="icon_text">Edit Post</p>
                      </button>

                      <button className="delete">
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
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
