import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ messageClass, header, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="message-header">{header}</div>
      <div className="message-body">{message}</div>
    </article>
  );
};

export default class EditTextInputSingleSubject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing,
      text: props.text,
      showError: false,
    };
  }

  handleEditQuestion = () => {
    const { editing } = this.state;
    this.props.setEditing(true);
    this.setState({ editing: true });
  };

  handleSaveQuestion = () => {
    const { editing, text } = this.state;

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
    const { children } = this.props;
    const { editing, text, showError } = this.state;

    let showErrorMessage = showError ? (
      <Message
        messageClass="is-danger"
        header="Question Error"
        message="Please fill in blank input."
      />
    ) : null;

    const questionInputWrapper = (
      <div className="question-input-wrapper">
        <strong>Edit Question:</strong>
        <form onSubmit={this.handleSaveQuestion}>
          <input className="input" defaultValue={text} onChange={this.handleUpdateText} />
        </form>
        {showErrorMessage}
      </div>
    );

    const questionWrapper = (
      <div className="question-wrapper">
        <strong>Question:</strong>
        <br />
        <h3 className="title is-3">{text}</h3>
      </div>
    );

    let display;

    if (editing) {
      display = questionInputWrapper;
    } else {
      display = questionWrapper;
    }

    const saveButtonComp = (
      <button className="button button-primary" onClick={this.handleSaveQuestion}>
        <i className="fa fa-save"></i>Save
      </button>
    );

    const showSaveButton = editing ? saveButtonComp : null;

    const editButtonComp = (
      <button className="button button-primary" onClick={this.handleEditQuestion}>
        <i className="fa fa-edit"></i>Edit
      </button>
    );

    const showEditButton = !editing ? editButtonComp : null;

    return (
      <div className="question-container">
        <div className="box">
          {display}
          {showEditButton}
          {showSaveButton}
        </div>
      </div>
    );
  }
}
