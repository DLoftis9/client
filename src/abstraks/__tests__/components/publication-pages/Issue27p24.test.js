import React from 'react';
import { shallow } from 'enzyme';
import Issue27p24 from '../../../components/publication-pages/Issue27p24';

describe('Issue27p24', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p24 />);
  });
});
