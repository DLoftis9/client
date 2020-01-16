import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const propTypes = {
  componentName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'home-mid',
};

const HomeMidContent = props => (
  <div className={props.componentName}>
    <ScrollAnimation animateIn="fadeIn">
      <div className={props.componentName + `__container`}>
        <div className={props.componentName + `__issueRow`}>
          <h2 className={props.componentName + `__header`}>ONE HUNDRED</h2>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

HomeMidContent.propTypes = propTypes;
HomeMidContent.defaultProps = defaultProps;

export default HomeMidContent;
