import React from 'react';
import { shallow } from 'enzyme';
import Issue27p27 from '../../../components/publication-pages/Issue27p27';

describe('Issue27p27', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p27 />);
  });
});
