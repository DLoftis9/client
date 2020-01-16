import React from 'react';
import { shallow } from 'enzyme';
import Issue28p15 from '../../../components/publication-pages/Issue28p15';

describe('Issue28p15', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p15 />);
  });
});
