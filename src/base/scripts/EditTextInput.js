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
      <ul>{children}</ul>
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

export default class EditTextInput extends React.Component {
  state = {
    questionList: DATA,
    isEditingQuestion: false,
    showAddInputError: false,
  };

  addSubject = () => {
    const { isEditingQuestion } = this.state;

    if (isEditingQuestion) {
      this.setState({ showAddInputError: true });
    } else {
      const questionList = [
        ...this.state.questionList,
        {
          type: 'INPUT',
          text: '',
          editing: true,
        },
      ];

      this.setState({ questionList });
    }
  };

  editingQuestion = boolean => {
    const { isEditingQuestion } = this.state;
    this.setState({ isEditingQuestion: boolean });
  };

  render() {
    const displaySubjectList = this.state.questionList.map((item, idx) => {
      const { type, text, editing } = item;
      if (type === 'INPUT') {
        return (
          <EditSubjectInput
            key={idx}
            text={text}
            editing={editing}
            setEditing={bool => this.editingQuestion(bool)}
          />
        );
      }
    });

    // Error message that displays when first field is
    // empty before trying to add a new field
    const addInputError = (
      <Message messageClass="is-danger" message="Please save before adding another question." />
    );

    const showInputError = this.state.showAddInputError ? addInputError : null;

    return (
      <section className="section home-container">
        <List>{displaySubjectList}</List>
        <hr />
        {showInputError}
        <button className="button button-primary is-success" onClick={this.addSubject}>
          <i className="fa fa-plus"></i>Add Question
        </button>
      </section>
    );
  }
}
