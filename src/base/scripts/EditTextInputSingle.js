// This component renders a text input html element.
// The component is ONLY editable and doesn't allow
// the ability to remove an entire element.
// The state's DATA for this component is external and
// is housed in the container where this component is being used.
// All other components that have to do with this
// component are in ./EditSubjectInput.js => ./EditInputMessage

import React from 'react';
import PropTypes from 'prop-types';

import EditTextInputSingleSubject from './EditTextInputSingleSubject';

const INPUTLIST = [{}];

const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul>{children}</ul>
    </div>
  );
};

export default class EditTextInputSingle extends React.Component {
  state = {
    inputList: INPUTLIST,
    isEditingQuestion: false,
    showInputSingleError: false,
  };

  static propTypes = {
    containerName: PropTypes.string,
    setInputs: PropTypes.array.isRequired,
  };

  static defaultProps = {
    containerName: 'edit-text-input-single',
  };

  editingQuestion = boolean => {
    this.setState({ isEditingQuestion: boolean });
  };

  render() {
    const { containerName } = this.props;
    const displaySetInputList = this.props.setInputs.map((item, idx) => {
      const { type, text, editing, labelName, labelNameEditing } = item;
      if (type === 'INPUT') {
        return (
          <EditTextInputSingleSubject
            key={idx}
            text={text}
            editing={editing}
            setEditing={bool => this.editingQuestion(bool)}
            labelName={labelName}
            labelNameEditing={labelNameEditing}
          />
        );
      }
    });

    return (
      <section className={containerName}>
        <h1 className="title is-1">React.js Editable Question List</h1>
        <List>{displaySetInputList}</List>
      </section>
    );
  }
}
