import React from 'react';
import PropTypes from 'prop-types';

import EditTextInputSingleMessage from '../../../base/scripts/EditTextInputSingleMessage';

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
        header="Error"
        message="Please fill in blank input."
      />
    ) : null;

    const subjectInputWrapper = (
      <div className="subject-input-wrapper">
        <label className="label">{labelNameEditing}</label>
        <form className="form" onSubmit={this.handleSaveSubject}>
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
      <button className="button subject-button_save" onClick={this.handleSaveSubject}>
        <div className="save">
          <span className="save_text">save</span>
          <i className="edit-icon fa fa-check" aria-hidden="true"></i>
        </div>
      </button>
    );

    const showSaveButton = editing ? saveButtonComp : null;

    const editButtonComp = (
      <button className="button subject-button_edit" onClick={this.handleEditSubject}>
        <div className="edit">
          <span className="edit_text">edit</span>
          <i className="edit-icon fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
      </button>
    );

    const showEditButton = !editing ? editButtonComp : null;

    return (
      <li className={containerName}>
        {display}
        {showEditButton}
        {showSaveButton}
      </li>
    );
  }
}
