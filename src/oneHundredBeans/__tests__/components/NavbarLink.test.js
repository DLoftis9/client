import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import NavbarLink from '../../components/NavbarLink';

describe('NavbarLink', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <NavbarLink />
      </MemoryRouter>,
    );
  });
});
