import React from 'react';
import { shallow } from 'enzyme';
import Issue27p9 from '../../../components/publication-pages/Issue27p9';

describe('Issue27p9', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p9 />);
  });
});
