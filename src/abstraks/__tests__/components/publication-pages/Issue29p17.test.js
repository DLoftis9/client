import React from 'react';
import { shallow } from 'enzyme';
import Issue29p17 from '../../../components/publication-pages/Issue29p17';

describe('Issue29p17', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p17 />);
  });
});
