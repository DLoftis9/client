import React from 'react';
import { shallow } from 'enzyme';
import Issue27p6 from '../../../components/publication-pages/Issue27p6';

describe('Issue27p6', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p6 />);
  });
});
