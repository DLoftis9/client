import React from 'react';
import { shallow } from 'enzyme';
import Issue29p16 from '../../../components/publication-pages/Issue29p16';

describe('Issue29p16', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p16 />);
  });
});
