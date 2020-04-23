import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';
import Avatar from '../../components/social/Avatar';
import EditTextInputGroup from '../../../base/scripts/EditTextInputGroup';
import SubjectInputAdds from '../../../base/scripts/SubjectInputAdds';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import EditTextInputSingle from '../../components/social/EditTextInputSingle';

export default class Profile extends React.PureComponent {
  toggleLikeClick = () => {
    const { context } = this.props;
    context.actions.handleLikeClick();
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
    const isToggleOn = context.isToggleOn;
    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent 
            // authUserName={authUser.username} 
            />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1 className='header-one'>
                {/* {authUser.username} */}
                User's Profile
                </h1>
              <Avatar 
              // userName={authUser.username} 
              />
              {/* <p>{emailUser.email}</p> */}

              {/*  */}
              <EditTextInputGroup title="Bio" />
              <EditTextInputSingle
                setInputs={[
                  {
                    type: 'INPUT',
                    text: '',
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
                ]}
              />
              <SubjectInputAdds instructions={instructions} title={title} />
              {/*  */}
              <Tabs>
                <div className="posts" label="Posts">
                  <PostResponse toggleLike={isToggleOn} likeMethod={this.toggleLikeClick} />
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
