import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';
import Avatar from '../../components/social/Avatar';
import EditTextInputGroup from '../../../base/scripts/EditTextInputGroup';
import SubjectInputAdds from '../../../base/scripts/SubjectInputAdds';
import EditTextInputSingle from '../../../base/scripts/EditTextInputSingle';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

const DATA = [
  // This constant is necessary to create editable text inputs
  // Type must ALWAYS be set to 'INPUT' for the elements to appear
  {
    type: 'INPUT',
    text: 'San Dieg, CA',
    labelName: 'Location',
    labelNameEditing: 'Editing Location',
  },
  {
    type: 'INPUT',
    text: 'email@test.com',
    labelName: 'Email',
    labelNameEditing: 'Editing Email',
  },
  {
    type: 'INPUT',
    text: 'www.test.com',
    labelName: 'Website',
    labelNameEditing: 'Editing Website',
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
    extraClassName: PropTypes.string,
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
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={authUser.name} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>{authUser.name}'s Profile</h1>
              <Avatar userName={authUser.name} />

              {/*  */}
              <EditTextInputGroup title="Bio" />
              <EditTextInputSingle setInputs={DATA} />
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
      </>
    );
  }
}
