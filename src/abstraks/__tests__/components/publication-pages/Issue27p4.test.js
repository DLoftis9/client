import React from 'react';
import { shallow } from 'enzyme';
import Issue27p4 from '../../../components/publication-pages/Issue27p4';

describe('Issue27p4', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p4 />);
  });
});
