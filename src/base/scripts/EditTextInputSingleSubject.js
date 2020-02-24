import React from 'react';
import PropTypes from 'prop-types';

import EditTextInputSingleMessage from './EditTextInputSingleMessage';

export default class EditTextInputSingleSubject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing,
      text: props.text,
      showError: false,
      labelName: props.labelName,
      labelNameEditing: props.labelNameEditing,
    };
  }

  static propTypes = {
    containerName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'edit-text-input-single-subject',
  };

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
    const { containerName } = this.props;
    const { editing, text, showError, labelName, labelNameEditing } = this.state;

    let showErrorMessage = showError ? (
      <EditTextInputSingleMessage
        messageClass="is-danger"
        header="Question Error"
        message="Please fill in blank input."
      />
    ) : null;

    const subjectInputWrapper = (
      <div className="question-input-wrapper">
        <label className="label">{labelNameEditing}</label>
        <form onSubmit={this.handleSaveSubject}>
          <input className="input" defaultValue={text} onChange={this.handleUpdateText} />
        </form>
        {showErrorMessage}
      </div>
    );

    const subjectWrapper = (
      <div className="subject-wrapper">
        <label className="label">{labelName}</label>
        <p className="paragraph">{text}</p>
      </div>
    );

    let display;

    if (editing) {
      display = subjectInputWrapper;
    } else {
      display = subjectWrapper;
    }

    const saveButtonComp = (
      <button className="button button-primary" onClick={this.handleSaveSubject}>
        <i className="fa fa-save"></i>Save
      </button>
    );

    const showSaveButton = editing ? saveButtonComp : null;

    const editButtonComp = (
      <button className="button button-primary" onClick={this.handleEditSubject}>
        <i className="fa fa-edit"></i>Edit
      </button>
    );

    const showEditButton = !editing ? editButtonComp : null;

    return (
      <div className={containerName}>
        <div className="box">
          {display}
          {showEditButton}
          {showSaveButton}
        </div>
      </div>
    );
  }
}
