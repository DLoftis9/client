import React from 'react';
import PropTypes from 'prop-types';

import EditSubjectInput from './EditSubjectInput';

const DATA = [
  {
    type: 'INPUT',
    text: 'Input One',
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

const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="unordered-list">{children}</ul>
    </div>
  );
};

const Message = ({ messageClass, header, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="message-header">{header}</div>
      <div className="message-body">{message}</div>
    </article>
  );
};

export default class EditTextInputList extends React.Component {
//   static propTypes = {
//     setInputs: PropTypes.array.isRequired,
//   };

  //   static defaultProps = {

  //   };

  state = {
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
    const { isEditingInput } = this.state;
    this.setState({ isEditingInput: boolean });
  };

  render() {
    // const { setInputs } = this.props;

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
      <Message messageClass="error" message="Please save before adding another question." />
    );

    const showInputError = this.state.showAddInputError ? addInputError : null;

    return (
      <section className="section">
        <List>{displaySubjectList}</List>
        <hr />
        {showInputError}
        <button className="button button-primary is-success" onClick={this.addSubject}>
          <i className="fa fa-plus"></i>Add Subject
        </button>
      </section>
    );
  }
}
