import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import Loader from '../../../base/scripts/Loader';
import { fetchPosts } from '../../../base/social/utils/auth';

export default class PostFeed extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetchPosts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  }

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'post-feed',
  };
  render() {
    const url = config.apiBaseUrl;
    const { containerName } = this.props;
    const { posts } = this.state;

    return (
      <>
        <div className={containerName}>
          {!posts.length ? (
            <Loader />
          ) : (
            <div className="post-card">
              {posts.map((post, i) => {
                const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
                const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

                return (
                  <div className="posts-list" key={i}>
                    <div className="image-post_container">
                      <img
                        src={`${url}/post/photo/${post._id}`}
                        alt={post.title}
                        onError={i =>
                          (i.target.src =
                            'https://abstraksresources.s3-us-west-1.amazonaws.com/images/defaultPost.svg')
                        }
                        className="image-post image"
                      />
                    </div>

                    <h3 className="post_title header-three">{post.title}</h3>
                    {/* the substring method controls how many characters are shown for the post body */}
                    <p className="post_body paragraph">
                      {post.body.substring(0, 250)}
                      <Link to={`/post/${post._id}`} className="anchor anchor_view">
                        Read more
                      </Link>
                    </p>

                    <p className="posted-by">
                      <span className="text">Posted by: </span>
                      <Link className="anchor" to={`${posterId}`}>
                        {posterName}
                      </Link>{' '}
                      | <span className="callout">{new Date(post.created).toDateString()}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}
