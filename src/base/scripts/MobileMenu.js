import React from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';
import PortalOverlay from './PortalOverlay';
import PortalContentShow from './PortalContentShow';
import PortalContentHide from './PortalContentHide';

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  static propTypes = {
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
    menuContentThird: PropTypes.object,
    menuNav: PropTypes.object,

    divClass: PropTypes.string,
    buttonClass: PropTypes.string,
    handleShow: PropTypes.func,
    buttonLabel: PropTypes.string,
    buttonIcon: PropTypes.string,
    modal: PropTypes.element,
  };

  static defaultProps = {
    overlay: 'modal menu__overlay',
    body: 'menu__body',
    container: 'menu__container container',
    row: 'menu__row row',
    head: 'menu__head',
    title: 'menu__title',
    close: 'menu__close',
    closeIcon: 'fa fa-close',
  };

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      overlay,
      body,
      container,
      row,
      head,
      title,
      close,
      closeIcon,
      menuTitle,
      menuContent,
      menuContentThird,
      menuNav,

      divClass,
      buttonClass,
      buttonLabel,
      buttonIcon,
    } = this.props;

    // Show a mobileMenu on click.
    const modal = this.state.showModal ? (
      <Portal>
        <PortalOverlay overlay={overlay} />
        <PortalContentShow
          body={body}
          container={container}
          row={row}
          head={head}
          title={title}
          close={close}
          closeIcon={closeIcon}
          handleHide={this.handleHide}
          modalTitle={menuTitle}
          modalContent={menuContent}
          modalContentSecond={menuNav}
          modalContentThird={menuContentThird}
        />
      </Portal>
    ) : null;

    // this is the default state, when the mobileMenu is hidden
    return (
      <PortalContentHide
        divClass={divClass}
        buttonClass={buttonClass}
        handleShow={this.handleShow}
        buttonLabel={buttonLabel}
        buttonIcon={buttonIcon}
        modal={modal}
      />
    );
  }
}
