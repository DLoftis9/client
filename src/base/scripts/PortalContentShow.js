import React from 'react';
import PropTypes from 'prop-types';

const PortalContentShow = props => (
  <div className={props.body}>
    <div className={props.container}>
      <div className={props.row}>
        <div className={props.head}>
          <div onClick={props.handleHide} className={props.close}>
            <i className={props.closeIcon} />
          </div>
        </div>
      </div>

      {/* headerSocial content */}
      <div className={props.row}>{props.modalContentThird}</div>

      <div className={props.row}>
        <h2 className={props.title}> {props.modalTitle} </h2>
      </div>

      <div className={props.row}>{props.modalContent}</div>
      <div className={props.row}>{props.modalContentSecond}</div>
    </div>
  </div>
);

PortalContentShow.propTypes = {
  body: PropTypes.string,
  container: PropTypes.string,
  row: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.string,
  closeIcon: PropTypes.string,
  handleHide: PropTypes.func,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.object,
  modalContentSecond: PropTypes.object,
  modalContentThird: PropTypes.object,
};

export default PortalContentShow;
