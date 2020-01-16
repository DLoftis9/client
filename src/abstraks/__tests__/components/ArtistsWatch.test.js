import React from 'react';
import { shallow } from 'enzyme';
import ArtistsWatch from '../../components/ArtistsWatch';

describe('ArtistsWatch', () => {
  it('renders without crashing', () => {
    shallow(<ArtistsWatch />);
  });
});
