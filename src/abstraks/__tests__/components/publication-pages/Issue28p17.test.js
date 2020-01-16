import React from 'react';
import { shallow } from 'enzyme';
import Issue28p17 from '../../../components/publication-pages/Issue28p17';

describe('Issue28p17', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p17 />);
  });
});
