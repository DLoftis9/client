import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';
import Avatar from '../../components/social/Avatar';
import EditTextInput from '../../../base/scripts/EditTextInput';
import EditTextInputGroup from '../../../base/scripts/EditTextInputGroup';
import SubjectInputAdds from '../../../base/scripts/SubjectInputAdds';

const DATA = [
  {
    type: 'INPUT',
    text: 'Input One Blah',
  },
  {
    type: 'INPUT',
    text: 'Just a test',
  },
];
export default class Profile extends React.PureComponent {
  state = {
    setInputs: DATA,
  };

  static propTypes = {
    containerName: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClassName: PropTypes.string,
    instructions: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'profile',
    instructions: 'Hit "Enter" to confirm, Click a pill to remove',
    title: 'Skills',
  };
  render() {
    const { context, containerName, instructions, title } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className={containerName}>
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The Profile page</h1>
            <Avatar userName={authUser.name} />

            {/*  */}
            <EditTextInput setInputs={DATA} />
            <EditTextInputGroup subjectHeader="Skills" subjectParagraph="Add a skill" />
            <SubjectInputAdds instructions={instructions} title={title} />
            {/*  */}
            <Tabs>
              <div className="posts" label="Posts">
                <PostResponse />
              </div>
              <div className="following" label="Following">
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
              </div>
              <div className="followers" label="Followers">
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
