import React from 'react';
import PropTypes from 'prop-types';

import EditInputElement from '../../../base/scripts/EditInputElement';

export default class Test extends React.PureComponent {
  state = {
    isFiltered: false,
    pendingGuest: '',
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

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id,
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  render() {
    return (
      <div className="App">
        <EditInputElement
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          guests={this.state.guests}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}
