import React from 'react';
import { shallow } from 'enzyme';
import Issue28p37 from '../../../components/publication-pages/Issue28p37';

describe('Issue28p37', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p37 />);
  });
});
