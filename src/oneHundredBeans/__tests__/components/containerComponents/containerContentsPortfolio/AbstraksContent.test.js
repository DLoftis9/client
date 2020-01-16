import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AbstraksContent from '../../../../components/containerContents/containerContentsPortfolio/AbstraksContent';

describe('AbstraksContent', () => {
  it('renders without crashing', () => {
    shallow(<AbstraksContent />);
  });
});
