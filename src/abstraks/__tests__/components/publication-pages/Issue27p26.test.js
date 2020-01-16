import React from 'react';
import { shallow } from 'enzyme';
import Issue27p26 from '../../../components/publication-pages/Issue27p26';

describe('Issue27p26', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p26 />);
  });
});
