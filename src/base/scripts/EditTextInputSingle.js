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

const DATA = [
  { type: 'QUESTION', text: 'Where?' },
]

const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul>
        {children}  
      </ul>
    </div>
  )
}

const Message = ({ messageClass, header, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="message-header">
        {header}
      </div>
      <div className="message-body">
        {message}
      </div>
    </article>
  );
}

// class Question extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editing: props.editing,
//       text: props.text,
//       showError: false
//     }
//   }
  
//   handleEditQuestion = () => {
//     const { editing } = this.state;
//     this.props.setEditing(true);
//     this.setState({ editing: true });
//   }
  
//   handleSaveQuestion = () => {
//     const { editing, text } = this.state;
    
//     if (text !== '') {
//       this.props.setEditing(false);
//       this.setState({
//         editing: false,
//         text
//       });
//     } else {
//       this.setState({ showError: true });
//     }
//   }
  
//   handleUpdateText = (e) => {
//     e.preventDefault();
//     const {value} = e.target;
//     this.setState({ text: value });
//     this.setState({ showError: false });
//   }
  
//   render() {
//     const { children } = this.props;
//     const { editing, text, showError } = this.state;
    
//     let showErrorMessage = (showError) ? 
//         <Message
//           messageClass="is-danger"
//           header="Question Error"
//           message="Please fill in blank input."
//         /> :
//         null;
    
//     const questionInputWrapper = (
//       <div className="question-input-wrapper">
//         <strong>Edit Question:</strong>
//         <form onSubmit={this.handleSaveQuestion}>
//           <input className="input" defaultValue={text} onChange={this.handleUpdateText} />
//         </form>
//         {showErrorMessage}
//       </div>
//     );

//     const questionWrapper = (
//       <div className="question-wrapper">
//         <strong>Question:</strong><br />
//         <h3 className="title is-3">{text}</h3>
//       </div>
//     );
    
//     let display;
    
//     if (editing) {
//       display = questionInputWrapper;
//     } else {
//       display = questionWrapper;
//     }
    
//     const saveButtonComp = (
//       <button className="button button-primary" onClick={this.handleSaveQuestion}>
//         <i className="fa fa-save"></i>Save
//       </button>
//     );
    
//     const showSaveButton = (editing) ? saveButtonComp : null;
    
//     const editButtonComp = (
//       <button className="button button-primary" onClick={this.handleEditQuestion}>
//         <i className="fa fa-edit"></i>Edit
//       </button>
//     );
    
//     const showEditButton = (!editing) ? editButtonComp : null;
    
//     return (
//       <div className="question-container">
//         <div className="box">
//           {display}
//           {showEditButton}
//           {showSaveButton}
//         </div>
//       </div>
//     )
//   }
// }

export default class EditTextInputSingle extends React.Component {
  state = {
    questionList: DATA,
    isEditingQuestion: false,
    showAddQuestionError: false
  }
  
  addQuestion = () => {
    const { isEditingQuestion } = this.state;
    
    if (isEditingQuestion) {
      this.setState({ showAddQuestionError: true });
    } else {
      const questionList = [
        ...this.state.questionList,
        {
          type: 'QUESTION',
          text: '',
          editing: true
        }
      ];
      
      this.setState({ questionList });
    }
  }
  
  editingQuestion = (boolean) => {
    const {isEditingQuestion} = this.state;
    this.setState({ isEditingQuestion: boolean });
  }
  
  render() {
    
    const displayQuestionList = this.state.questionList.map((item, idx) => {
      const { type, text, editing } = item;
      if (type === 'QUESTION') {
        return (
          <EditTextInputSingleSubject
            key={idx}
            text={text}
            editing={editing}
            setEditing={(bool) => this.editingQuestion(bool)}
          />
        );
      }
    });
    
    const addQuestionError = (
      <Message 
        messageClass="is-danger" 
        header="Add Question Error"
        message="Please save before adding another question."
      />
    );
    
    const showQuestionError = this.state.showAddQuestionError ? addQuestionError : null;
    
    return (
      <section className="section home-container">
        <h1 className="title is-1">
          React.js Editable Question List
        </h1>
        <List>
          {displayQuestionList}
        </List>
        <hr />
        {showQuestionError}
        <button className="button is-success" onClick={this.addQuestion}>
          <i className="fa fa-plus"></i>Add Question
        </button>
      </section>
    )
  }
}