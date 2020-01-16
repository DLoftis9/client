import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Abstraks from '../../../containers/portfolio/Abstraks';

describe('Abstraks', () => {
  it('renders without crashing', () => {
    shallow(<Abstraks />);
  });
});
