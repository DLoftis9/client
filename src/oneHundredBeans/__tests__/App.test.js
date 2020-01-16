import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
