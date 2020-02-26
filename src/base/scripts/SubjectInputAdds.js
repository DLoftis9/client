import React from 'react';
import PropTypes from 'prop-types';
// import CSSTransitionGroup from 'react-transition-group';

export default class SubjectInputAdds extends React.Component {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.helperspan = null; // is set via ref

    this.state = {
      content_add: 'Add something...',
      width: 100,
      myItems: [],
    };
    this.lastId = -1;
  }

  static propTypes = {
    containerName: PropTypes.string,
    instructions: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'subject-input-adds',
  };

  handleFocus(event) {
    this.setState({ content_add: '' });
  }

  handleChange(event) {
    const usr_input = event.target.value;
    this.setState({ content_add: usr_input });
  }

  handleKeypress(event) {
    if (event.key === 'Enter') {
      const newArray = this.state.myItems;
      const currentcontent = this.state.content_add.trim();
      if (!currentcontent) {
        return;
      }

      const currentWidth = this.helperspan.offsetWidth;
      newArray.push({
        content: currentcontent,
        id: ++this.lastId,
        itemWidth: currentWidth + 2,
      });
      this.setState({
        myItems: newArray,
        content_add: '',
      });
    }
  }

  handleBlur(event) {
    this.setState({ content_add: 'Add something...' });
  }

  handleClick(event) {
    const idToRemove = Number(event.target.dataset['item']);
    const newArray = this.state.myItems.filter(listitem => {
      return listitem.id !== idToRemove;
    });
    this.setState({ myItems: newArray });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.content_add !== this.state.content_add) {
      const helperWidth = this.helperspan.offsetWidth;
      this.setState({ width: Math.max(50, helperWidth + 1) });
    }
  }

  makeAddedList() {
    const elements = this.state.myItems.map((listitem, index) => (
      <li className="listItem" key={listitem.id} onClick={this.handleClick} data-item={listitem.id}>
        {listitem.content}
        <i className="fa fa-close" aria-hidden="true"></i>
      </li>
    ));
    return elements;
  }

  render() {
    const { containerName, instructions, title } = this.props;
    return (
      <div className={containerName}>
        <div className="wrapper">
          <h3 className="title">{title}</h3>
          <p className="instructions">{instructions}</p>
          <input
            className="input input-add-list"
            id="add"
            type="text"
            name="initvalue"
            autoComplete="off"
            maxLength="70"
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            onBlur={this.handleBlur}
            value={this.state.content_add}
          />
          <p className="paragraph" id="helperspan" ref={el => (this.helperspan = el)}>
            {this.state.content_add}
          </p>
        </div>
        {this.makeAddedList()}
      </div>
    );
  }
}
