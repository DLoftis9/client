import React from 'react';
import { shallow } from 'enzyme';
import Issue28p26 from '../../../components/publication-pages/Issue28p26';

describe('Issue28p26', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p26 />);
  });
});
