import React from 'react';
import PropTypes from 'prop-types';

import EditTextInput from '../../../base/scripts/EditTextInput';
import EditTextInputGroup from '../../../base/scripts/EditTextInputGroup';

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

export default class Test extends React.PureComponent {
  state = {
    setInputs: DATA,
  };

  static propTypes = {
    containerName: PropTypes.string,
    subjectHeader: PropTypes.string,
    subjectParagraph: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'test',
  };

  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <EditTextInput setInputs={DATA} />
        <EditTextInputGroup subjectHeader="Skills" subjectParagraph="Add a skill" />
      </div>
    );
  }
}
