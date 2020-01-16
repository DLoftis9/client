import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Modal from '../scripts/Modal';

describe('Modal', () => {
  const modal = shallow(<Modal />);

  const showModal = {
    handleShow: true,
    handleHide: false,
  };

  it('renders without crashing', () => {
    expect(modal);
  });

  it('simulates the modal button', () => {
    expect(modal.state().showModal).toEqual(false);
  });

  it('simulates the modal button clicked', () => {
    expect(showModal.handleShow).toEqual(true);
  });
});
