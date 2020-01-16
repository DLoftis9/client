import React from 'react';
import { shallow } from 'enzyme';
import Issue28p20 from '../../../components/publication-pages/Issue28p20';

describe('Issue28p20', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p20 />);
  });
});
