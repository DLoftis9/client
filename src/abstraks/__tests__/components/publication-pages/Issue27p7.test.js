import React from 'react';
import { shallow } from 'enzyme';
import Issue27p7 from '../../../components/publication-pages/Issue27p7';

describe('Issue27p7', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p7 />);
  });
});
