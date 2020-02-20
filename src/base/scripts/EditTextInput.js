import React from 'react';
import PropTypes from 'prop-types';

import EditSubjectInput from './EditSubjectInput';

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
    componentName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'edit-text-input',
  };

  state = {
    isEditingInput: false,
    showAddInputError: false,
  };

  editingInput = boolean => {
    this.setState({ isEditingInput: boolean });
  };

  render() {
    const { componentName } = this.props;
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
      <section className={componentName}>
        <List>{displaySubjectList}</List>
      </section>
    );
  }
}
