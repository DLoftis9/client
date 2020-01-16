import React from 'react';
import { shallow } from 'enzyme';
import Issue28p31 from '../../../components/publication-pages/Issue28p31';

describe('Issue28p31', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p31 />);
  });
});
