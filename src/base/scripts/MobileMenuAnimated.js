import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileMenuAnimatedShow from './MobileMenuAnimatedShow';
import MobileMenuAnimatedHide from './MobileMenuAnimatedHide';

const propTypes = {
  overlay: PropTypes.string.isRequired,
  body: PropTypes.string,
  container: PropTypes.string,
  row: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.string,
  closeIcon: PropTypes.string,
  handleHide: PropTypes.func,
  menuTitle: PropTypes.string,
  menuContent: PropTypes.object,
  menuNav: PropTypes.object,

  divClass: PropTypes.string,
  buttonClass: PropTypes.string,
  setShowMessage: PropTypes.func,
  buttonLabel: PropTypes.string,
  buttonIcon: PropTypes.string,
  size: PropTypes.string,
  modal: PropTypes.element,
};

const defaultProps = {
  overlay: 'modal menu__overlay',
  body: 'menu__body',
  container: 'menu__container container',
  row: 'menu__row row',
  head: 'menu__head',
  title: 'menu__title',
  close: 'menu__close',
  closeIcon: 'fa fa-close',
  size: 'lg',
};

function MobileMenuAnimated(props) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <React.Fragment>
      {showButton && (
        <MobileMenuAnimatedHide
          divClass={props.divClass}
          buttonClass={props.buttonClass}
          buttonIcon={props.buttonIcon}
          setShowMessage={() => setShowMessage(true)}
          size={props.size}
        />
      )}
      <MobileMenuAnimatedShow
        body={props.body}
        container={props.container}
        row={props.row}
        head={props.head}
        title={props.title}
        close={props.close}
        closeIcon={props.closeIcon}
        setShowButtonFalse={() => setShowButton(false)}
        setShowButtonTrue={() => setShowButton(true)}
        setShowMessage={() => setShowMessage(false)}
        inShowMessage={showMessage}
        menuTitle={props.menuTitle}
        menuContent={props.menuNav}
        menuContentSecond={props.menuContentSecond}
      />
    </React.Fragment>
  );
}

MobileMenuAnimated.propTypes = propTypes;
MobileMenuAnimated.defaultProps = defaultProps;

export default MobileMenuAnimated;
