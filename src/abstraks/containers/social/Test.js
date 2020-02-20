import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SubjectInputAdds from '../../../base/scripts/SubjectInputAdds';



export default class Test extends React.PureComponent {

  static propTypes = {
    containerName: PropTypes.string,

  };

  static defaultProps = {
    containerName: 'test',
  };

  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <SubjectInputAdds />
      </div>
    );
  }
}
