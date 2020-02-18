import React from 'react';
import PropTypes from 'prop-types';

import EditInputElement from '../../../base/scripts/EditInputElement';

export default class Test extends React.PureComponent {
  state = {
    guests: [
      {
        name: 'Person',
        isConfirmed: false,
        isEditing: false,
      },
    ],
  };

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id),
    });

  toggleEditing = id => this.toggleGuestProperty('isEditing', id);

  //   setName = (name, id) =>
  //     this.setState({
  //       guests: this.state.guests.map(guest => {
  //         if (id === guest.id) {
  //           return {
  //             ...guest,
  //             name,
  //           };
  //         }
  //         return guest;
  //       }),
  //     });

  handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  render() {
    return (
      <div className="App">
        <EditInputElement
          isFiltered={this.state.isFiltered}
          guests={this.state.guests}
          toggleEditing={this.toggleEditing}
          //   setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}
