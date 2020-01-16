import React from 'react';
import { shallow } from 'enzyme';
import Issue27p30 from '../../../components/publication-pages/Issue27p30';

describe('Issue27p30', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p30 />);
  });
});
