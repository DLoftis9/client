import React from 'react';
import { shallow } from 'enzyme';
import Issue28p19 from '../../../components/publication-pages/Issue28p19';

describe('Issue28p19', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p19 />);
  });
});
