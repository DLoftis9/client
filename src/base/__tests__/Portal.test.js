import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// import { MemoryRouter } from 'react-router-dom';

describe('Portal', () => {
  it('should mount modal on the div', () => {
    const wrapper = shallow(
      <div id="modal-root" className="modal-root">
        <div className="child" />
        <div className="child" />
      </div>,
    );

    expect(wrapper.children()).toHaveLength(2);
  });

  it('should unmount modal from the div', () => {
    const wrapper = mount(<div id="modal-root" className="modal-root" />);

    expect(wrapper.find('div').children()).toHaveLength(0);
  });
});
