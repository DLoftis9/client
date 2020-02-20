import React from 'react';
import PropTypes from 'prop-types';

import EditSubjectInput from './EditSubjectInput';

const DATA = [
  {
    type: 'INPUT',
    text: 'Where?',
  },
  {
    type: 'INPUT',
    text: 'Just a test',
  },
];

const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="unordered-list">{children}</ul>
    </div>
  );
};

export default class EditTextInput extends React.Component {
  static propTypes = {
    setInputs: PropTypes.array.isRequired,
  };

  //   static defaultProps = {

  //   };

  state = {
    isEditingInput: false,
    showAddInputError: false,
  };

  editingInput = boolean => {
    const { isEditingInput } = this.state;
    this.setState({ isEditingInput: boolean });
  };

  render() {
    const { setInputs } = this.props;

    const displaySubjectList = this.props.setInputs.map((item, idx) => {
      const { type, text, editing } = item;
      if (type === 'INPUT') {
        return (
          <EditSubjectInput
            key={idx}
            text={text}
            editing={editing}
            setEditing={bool => this.editingInput(bool)}
          />
        );
      }
    });

    return (
      <section className="section">
        <List>{displaySubjectList}</List>
      </section>
    );
  }
}
