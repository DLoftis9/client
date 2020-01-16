import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ContactContent from '../../../components/containerContents/ContactContent';

describe('ContactContent', () => {
  it('renders without crashing', () => {
    shallow(<ContactContent />);
  });
});
