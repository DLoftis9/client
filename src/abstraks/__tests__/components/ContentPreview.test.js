import React from 'react';
import { shallow } from 'enzyme';
import ContentPreview from '../../components/ContentPreview';

describe('ContentPreview', () => {
  it('renders without crashing', () => {
    shallow(<ContentPreview />);
  });
});
