import React from 'react';
import PropTypes from 'prop-types';

import EditInputElement from '../../../base/scripts/EditInputElement';

export default class Test extends React.PureComponent {
  state = {
    inputs: [
      {
        name: 'Person',
        isEditing: false,
      },
    ],
  };

  toggleInputProperty = (property, id) =>
    this.setState({
      inputs: this.state.inputs.map(input => {
        if (id === input.id) {
          return {
            ...input,
            [property]: !input[property],
          };
        }
        return input;
      }),
    });

  removeInput = id =>
    this.setState({
      inputs: this.state.inputs.filter(input => id !== input.id),
    });

  toggleEditing = id => this.toggleInputProperty('isEditing', id);

  render() {
    return (
      <div className="App">
        <EditInputElement
          inputs={this.state.inputs}
          toggleEditing={this.toggleEditing}
          removeInput={this.removeInput}
        />
      </div>
    );
  }
}
