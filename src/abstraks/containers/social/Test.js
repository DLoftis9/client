import React from 'react';
import PropTypes from 'prop-types';

import EditTextInputSingle from '../../../base/scripts/EditTextInputSingle';

const DATA = [
  {
    type: 'Location',
    text: 'San Dieg, CA',
  },
  {
    type: 'Email',
    text: 'email@test.com',
  },
  {
    type: 'Email',
    text: 'email@test.com',
  },
  {
    type: 'Websites',
    text: 'email@test.com',
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
