import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Modal from '../../base/scripts/Modal';

const propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  divClass: PropTypes.string.isRequired,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.object,
};

const defaultProps = {
  buttonLabel: 'Menu',
  buttonIcon: 'fa fa-chevron-down',
  buttonClass: 'button page-nav__button page-nav__button--menu',
  divClass: 'page-nav__anchor page-nav__anchor--publication',
};

const PageNav = props => (
  <nav className="page-nav__container container">
    <div className="page-nav__row row">
      <Link className="anchor page-nav__anchor page-nav__anchor--publication" to={props.prev}>
        <button className="button page-nav__button page-nav__button--prev">
          <span className="page-nav__icon page-nav__icon--prev">
            <i className="fa fa-arrow-left" />
            <span className="page-nav__title">Previous</span>
          </span>
        </button>
      </Link>

      {/* the modal is imported from base, and imported into the PageNav component that is imported into the individual publication-pages */}
      <Modal
        divClass={props.divClass}
        buttonLabel={props.buttonLabel}
        buttonClass={props.buttonClass}
        buttonIcon={props.buttonIcon}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent}
      />

      <Link className="anchor page-nav__anchor page-nav__anchor--publication" to={props.next}>
        <button className="button page-nav__button page-nav__button--next">
          <span className="page-nav__icon page-nav__icon--next">
            <span className="page-nav__title">Next</span>
            <i className="fa fa-arrow-right" />
          </span>
        </button>
      </Link>
    </div>
  </nav>
);

PageNav.propTypes = propTypes;
PageNav.defaultProps = defaultProps;

export default PageNav;
