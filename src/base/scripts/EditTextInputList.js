import React from 'react';
import PropTypes from 'prop-types';

import EditSubjectInput from './EditSubjectInput';
import EditInputMessage from './EditInputMessage';

const DATA = [
  // empty array so new inputs can be pushed into DATA
];

const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="unordered-list">{children}</ul>
    </div>
  );
};

export default class EditTextInputList extends React.Component {
  static propTypes = {
    componentName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'edit-text-input-list',
  };

  state = {
    // DATA is necessary to render a list of inputs
    inputsList: DATA,
    isEditingInput: false,
    showAddInputError: false,
  };

  addSubject = () => {
    const { isEditingInput } = this.state;

    if (isEditingInput) {
      this.setState({ showAddInputError: true });
    } else {
      const inputsList = [
        ...this.state.inputsList,
        {
          type: 'INPUT',
          text: '',
          editing: true,
        },
      ];

      this.setState({ inputsList });
    }
  };

  editingInput = boolean => {
    this.setState({ isEditingInput: boolean });
  };

  render() {
    const { componentName } = this.props;
    const displaySubjectList = this.state.inputsList.map((item, idx) => {
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

    // Error message that displays when first field is
    // empty before trying to add a new field
    const addInputError = (
      <EditInputMessage
        messageClass="error"
        message="Please save before adding another question."
      />
    );

    const showInputError = this.state.showAddInputError ? addInputError : null;

    return (
      <section className={componentName}>
        <List>{displaySubjectList}</List>
        <hr />
        {showInputError}
        <button className="button button-primary" onClick={this.addSubject}>
          <i className="fa fa-plus"></i>Add Subject
        </button>
      </section>
    );
  }
}
