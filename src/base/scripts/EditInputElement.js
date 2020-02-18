import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditInput from './EditInput';

export default class EditInputElement extends Component {
  render() {
    return (
      <>
        <span>Just a span</span>
        <EditInput />
      </>
    );
  }
}
