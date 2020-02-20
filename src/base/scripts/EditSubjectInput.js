import React from 'react';

import EditInputMessage from './EditInputMessage';

export default class EditSubjectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing,
      text: props.text,
      showError: false,
    };
  }

  handleEditSubject = () => {
    this.props.setEditing(true);
    this.setState({ editing: true });
  };

  handleSaveSubject = () => {
    const { text } = this.state;

    if (text !== '') {
      this.props.setEditing(false);
      this.setState({
        editing: false,
        text,
      });
    } else {
      this.setState({ showError: true });
    }
  };

  handleUpdateText = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ text: value });
    this.setState({ showError: false });
  };

  render() {
    const { editing, text, showError } = this.state;

    // Error for individual input field
    let showErrorMessage = showError ? (
      <EditInputMessage messageClass="error" message="Please fill in blank input." />
    ) : null;

    // Input label while editing
    const subjectInputWrapper = (
      <div className="subject-input-wrapper">
        <label className="label">Editing:</label>
        <form className="form" onSubmit={this.handleSaveSubject}>
          <input
            className="input"
            type={this.props.inputType}
            defaultValue={text}
            onChange={this.handleUpdateText}
          />
        </form>
        {showErrorMessage}
      </div>
    );

    // Wrapper Title
    const subjectWrapper = (
      <div className="subject-wrapper">
        <label className="label">Label:</label>
        <p className="paragraph">{text}</p>
      </div>
    );

    let display;

    if (editing) {
      display = subjectInputWrapper;
    } else {
      display = subjectWrapper;
    }

    // Save button
    const saveButtonComp = (
      <button className="button button-primary" onClick={this.handleSaveSubject}>
        <div className="save">
          <p className="button_text">Save</p>
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
      </button>
    );

    const showSaveButton = editing ? saveButtonComp : null;

    // Edit button
    const editButtonComp = (
      <button className="button button-primary" onClick={this.handleEditSubject}>
        <div className="edit">
          <p className="button_text">Edit</p>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
      </button>
    );

    const showEditButton = !editing ? editButtonComp : null;

    return (
      <li className="list-item subject-container">
        {display}
        {showEditButton}
        {showSaveButton}
      </li>
    );
  }
}
