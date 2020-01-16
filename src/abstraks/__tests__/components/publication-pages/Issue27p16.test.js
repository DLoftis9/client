import React from 'react';
import { shallow } from 'enzyme';
import Issue27p16 from '../../../components/publication-pages/Issue27p16';

describe('Issue27p16', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p16 />);
  });
});
