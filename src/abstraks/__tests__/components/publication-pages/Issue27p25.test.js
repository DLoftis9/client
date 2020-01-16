import React from 'react';
import { shallow } from 'enzyme';
import Issue27p25 from '../../../components/publication-pages/Issue27p25';

describe('Issue27p25', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p25 />);
  });
});
