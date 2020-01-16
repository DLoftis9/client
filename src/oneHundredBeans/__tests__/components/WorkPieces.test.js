import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import WorkPieces from '../../components/WorkPieces';

describe('WorkPieces', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <WorkPieces />
      </MemoryRouter>,
    );
  });
});
