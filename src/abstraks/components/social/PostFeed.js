import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '../../../base/social/utils/config';
import { fetchPosts } from '../../../base/social/utils/auth';

export default class PostFeed extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      posts: [],
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
          <h1>Post Feed</h1>
          <div className="post-card">
            {posts.map((post, i) => {
              const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
              const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

              return (
                <div className="posts-list" key={i}>
                  <h3 className="post_title header-three">{post.title}</h3>
                  <p className="post_body paragraph">{post.body.substring(0, 250)}</p>

                  <p className="posted-by">
                    <span>Posted by: </span>
                    <Link to={`${posterId}`}>{posterName}</Link> |{' '}
                    <span className="callout">{new Date(post.created).toDateString()}</span>
                  </p>
                  <Link to={`/posts/${post._id}`} className="anchor anchor_view">
                    Read more
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
