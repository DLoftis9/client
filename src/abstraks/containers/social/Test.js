import React from 'react';
import PropTypes from 'prop-types';

import EditTextInput from '../../../base/scripts/EditTextInput';
import EditTextInputList from '../../../base/scripts/EditTextInputList';

const DATA = [
  {
    type: 'INPUT',
    text: 'Input One',
  },
  {
    type: 'INPUT',
    text: 'Just a test',
  },
];

export default class Test extends React.PureComponent {
  state = {
    setInputs: DATA,
    // isEditingInput: false,
    // showAddInputError: false,
  };

  render() {
    return (
      <div className="App">
        <EditTextInput />
        {/* <EditTextInputList /> */}
      </div>
    );
  }
}
