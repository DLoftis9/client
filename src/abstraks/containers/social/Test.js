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

  render() {
    return (
      <div className="App">
        <EditTextInput setInputs={DATA} />
        <EditTextInputGroup />
      </div>
    );
  }
}
