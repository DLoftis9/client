import React from 'react';
import { shallow } from 'enzyme';
import Issue28p11 from '../../../components/publication-pages/Issue28p11';

describe('Issue28p11', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p11 />);
  });
});
