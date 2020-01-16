import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const propTypes = {
  body: PropTypes.string,
  container: PropTypes.string,
  row: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.string,
  closeIcon: PropTypes.string,
  setShowButtonFalse: PropTypes.func,
  setShowButtonTrue: PropTypes.func,
  setShowMessage: PropTypes.func,
  inShowMessage: PropTypes.bool,
  menuTitle: PropTypes.string,
  menuContent: PropTypes.object,
  menuContentSecond: PropTypes.object,
};

function MobileMenuAnimatedShow(props) {
  return (
    <CSSTransition
      in={props.inShowMessage}
      timeout={300}
      classNames="mobile-menu"
      unmountOnExit
      onEnter={props.setShowButtonFalse}
      onExited={props.setShowButtonTrue}
      dismissible="true"
    >
      <div className="showMessage" variant="primary" dismissible onClose={props.setShowMessage}>
        <div className="modal menu__overlay" />
        <div className={props.body}>
          <div className={props.container}>
            <div className={props.row}>
              <div className={props.head}>
                <span className={props.close} onClick={props.setShowMessage}>
                  <i className={props.closeIcon} />
                </span>
                <h2 className={props.title}>{props.menuTitle}</h2>
              </div>
            </div>

            <div className={props.row}>{props.menuContent}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

MobileMenuAnimatedShow.propTypes = propTypes;

export default MobileMenuAnimatedShow;
