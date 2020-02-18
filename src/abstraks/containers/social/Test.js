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

  toggleGuestProperty = (property, id) =>
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

  toggleEditing = id => this.toggleGuestProperty('isEditing', id);

  //   setName = (name, id) =>
  //     this.setState({
  //       inputs: this.state.inputs.map(guest => {
  //         if (id === guest.id) {
  //           return {
  //             ...guest,
  //             name,
  //           };
  //         }
  //         return guest;
  //       }),
  //     });

  //   handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  render() {
    return (
      <div className="App">
        <EditInputElement
          isFiltered={this.state.isFiltered}
          inputs={this.state.inputs}
          toggleEditing={this.toggleEditing}
          //   setName={this.setName}
          removeInput={this.removeInput}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}
