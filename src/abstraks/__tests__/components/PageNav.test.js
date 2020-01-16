import React from 'react';
import { shallow } from 'enzyme';
import PageNav from '../../components/PageNav';
import { MemoryRouter } from 'react-router-dom';

describe('PageNav', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <PageNav />
      </MemoryRouter>,
    );
  });
});
