import React from 'react';
import Loader from '../../scripts/Loader';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Loader', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });
});
