import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Hello animated" style={{ backgroundColor: this.props.color }}>
        <h1 className="title is-1">Hello, {this.props.color}!</h1>
      </div>
    );
  }
}

class ScrollTo extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.scrollToNode = this.scrollToNode.bind(this);
  }

  // This method goes into the container rendering the whole page
  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }

  // ref must be set on a non-react element
  // to make scrollIntoView work
  render() {
    const { refOne, refTwo, refThree } = this.props;

    return (
      <div className="App">
        <div className="buttons has-addons navigation">
          <span className="button" onClick={() => this.scrollToNode(this.red)}>
            Go to red
          </span>
          <span className="button" onClick={() => this.scrollToNode(this.green)}>
            Go to green
          </span>
          <span className="button" onClick={() => this.scrollToNode(this.yellow)}>
            Go to yellow
          </span>
        </div>

        <div ref={node => (this.red = node)}>
          <Hello color="red" />
        </div>
        <div ref={node => (this.green = node)}>
          <Hello color="green" />
        </div>
        <div ref={node => (this.yellow = node)}>
          <Hello color="yellow" />
        </div>
      </div>
    );
  }
}
