import React from 'react';
import { shallow } from 'enzyme';
import Issue28p12 from '../../../components/publication-pages/Issue28p12';

describe('Issue28p12', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p12 />);
  });
});
