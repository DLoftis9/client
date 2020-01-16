import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Router from '../../containers/Router';

describe('Router', () => {
  it('renders without crashing', () => {
    shallow(<Router />);
  });
});
