import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Work from '../../containers/Work';

describe('Work', () => {
  it('renders without crashing', () => {
    shallow(<Work />);
  });
});
