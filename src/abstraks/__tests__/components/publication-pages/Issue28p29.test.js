import React from 'react';
import { shallow } from 'enzyme';
import Issue28p29 from '../../../components/publication-pages/Issue28p29';

describe('Issue28p29', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p29 />);
  });
});
