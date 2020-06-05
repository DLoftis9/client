import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../base/social/utils/config';
import { isAuthenticated } from '../../../base/social/utils/auth';
import { Link } from 'react-router-dom';

export default class Following extends React.PureComponent {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    componentName: 'following',
  };
  render() {
    const url = config.apiBaseUrl;
    const {
      // context,
      componentName,
      following,
    } = this.props;

    return (
      <div className={componentName}>
        {following.map((person, i) => {
          return (
            <div className="thumbnail" key={i}>
              <Link className="link" to={`/user/${person._id}`}>
                <img
                  className="tab-image"
                  onError={i =>
                    (i.target.src = `https://abstraksresources.s3-us-west-1.amazonaws.com/images/avatar.svg`)
                  }
                  src={`${url}/user/photo/${person._id}`}
                  alt={person.name}
                />
                <h3 className="header-three">{person.name}</h3>
                {/* <h3 className="header-three">{person.body}</h3> */}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
