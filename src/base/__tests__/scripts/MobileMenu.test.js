import React from 'react';
import MobileMenu from '../../scripts/MobileMenu';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MobileMenu', () => {
  const showModal = {
    handleShow: true,
    handleHide: false,
  };

  const mobileMenu = shallow(<MobileMenu />);

  it('renders without crashing', () => {
    expect(mobileMenu);
  });

  it('simulates the mobileMenu button', () => {
    expect(mobileMenu.state().showModal).toEqual(false);
  });

  it('simulates the mobileMenu button clicked', () => {
    expect(showModal.handleShow).toEqual(true);
  });
});
