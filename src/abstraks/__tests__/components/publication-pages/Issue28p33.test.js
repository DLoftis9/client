import React from 'react';
import { shallow } from 'enzyme';
import Issue28p33 from '../../../components/publication-pages/Issue28p33';

describe('Issue28p33', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p33 />);
  });
});
