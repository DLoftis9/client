import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import HomeContent from '../../../components/containerContents/HomeContent';

// describe('HomeContent', () => {
//   it('renders without crashing', () => {
//     shallow(<HomeContent />);
//   });
// });

describe('HomeContent', () => {
  const workPieces = [
    {
      id: 1,
      title: 'Abstraks',
      url: '/portfolio/abstraks',
      coverImage: 'https://s3-us-west-1.amazonaws.com/100beans.com/work/abstraks/logo--green.svg',
    },
  ];

  const wrapper = mount(
    <MemoryRouter>
      <HomeContent workPieces={workPieces} />
    </MemoryRouter>,
  );

  it('renders without crashing', () => {
    shallow(<HomeContent />);
  });

  it('renders children correctly with the component WorkPieces', () => {
    expect(wrapper.find('.home__row').children()).toHaveLength(workPieces.length);
    expect(
      wrapper
        .find('.home__row')
        .children()
        .find('WorkPieces'),
    ).toHaveLength(workPieces.length);
  });
});
