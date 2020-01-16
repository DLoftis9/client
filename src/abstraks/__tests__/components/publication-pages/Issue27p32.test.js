import React from 'react';
import { shallow } from 'enzyme';
import Issue27p32 from '../../../components/publication-pages/Issue27p32';

describe('Issue27p32', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p32 />);
  });
});
