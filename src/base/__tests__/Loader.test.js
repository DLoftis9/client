import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Loader from '../scripts/Loader';

describe('Loader', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });
});
