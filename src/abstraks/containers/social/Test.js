import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SubjectInputAdds from '../../../base/scripts/SubjectInputAdds';
import EditTextInputGroup from '../../../base/scripts/EditTextInputGroup';

export default class Test extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'test',
  };

  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <SubjectInputAdds title="Subject Input Adds" instructions="INstructions here" />
        <EditTextInputGroup title="Test Title" />
      </div>
    );
  }
}
