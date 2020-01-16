import React from 'react';
import { shallow } from 'enzyme';
import Issue27p17 from '../../../components/publication-pages/Issue27p17';

describe('Issue27p17', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p17 />);
  });
});
