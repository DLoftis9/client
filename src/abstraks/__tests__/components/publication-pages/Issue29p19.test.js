import React from 'react';
import { shallow } from 'enzyme';
import Issue29p19 from '../../../components/publication-pages/Issue29p19';

describe('Issue29p19', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p19 />);
  });
});
