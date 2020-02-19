import React from 'react';
import PropTypes from 'prop-types';

import EditTextInput from '../../../base/scripts/EditTextInput';

const DATA = [
  {
    type: 'INPUT',
    text: 'Where?',
  },
  {
    type: 'INPUT',
    text: 'Just a test',
  },
  {
    type: 'INPUT',
    text: 'Just a test',
  },
];

export default class Test extends React.PureComponent {
  state = {
    inputsList: DATA,
    // isEditingInput: false,
    // showAddInputError: false,
  };

  render() {
    return (
      <div className="App">
        <EditTextInput inputsList={DATA} />
      </div>
    );
  }
}
