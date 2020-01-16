import React from 'react';
import { shallow } from 'enzyme';
import Issue28p22 from '../../../components/publication-pages/Issue28p22';

describe('Issue28p22', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p22 />);
  });
});
