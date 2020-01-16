import React from 'react';
import { shallow } from 'enzyme';
import Issue28p7 from '../../../components/publication-pages/Issue28p7';

describe('Issue28p7', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p7 />);
  });
});
