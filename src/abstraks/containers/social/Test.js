import React from 'react';
import PropTypes from 'prop-types';

import EditTextInputSingle from '../../../base/scripts/EditTextInputSingle';

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

export default class Test extends React.PureComponent {
  state = {
    setInputs: DATA,
  };
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
        <EditTextInputSingle setInputs={DATA} />
      </div>
    );
  }
}
