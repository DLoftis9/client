import React from 'react';
import { shallow } from 'enzyme';
import Issue28p36 from '../../../components/publication-pages/Issue28p36';

describe('Issue28p36', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p36 />);
  });
});
