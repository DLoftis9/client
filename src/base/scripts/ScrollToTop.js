import React from 'react';
import { withRouter } from 'react-router-dom';

// Logic to handle <ScrollToTop /> when a new
// browser page is opened or reloaded
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
