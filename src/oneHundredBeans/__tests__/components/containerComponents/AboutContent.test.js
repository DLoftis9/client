import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AboutContent from '../../../components/containerContents/AboutContent';

describe('AboutContent', () => {
  it('renders without crashing', () => {
    shallow(<AboutContent />);
  });
});
