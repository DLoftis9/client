import React from 'react';
import { shallow } from 'enzyme';
import Issue28p9 from '../../../components/publication-pages/Issue28p9';

describe('Issue28p9', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p9 />);
  });
});
