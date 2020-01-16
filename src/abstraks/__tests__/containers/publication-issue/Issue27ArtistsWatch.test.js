import React from 'react';
import { mount, shallow } from 'enzyme';
import Issue27ArtistsWatch from '../../../containers/publication-issue/Issue27ArtistsWatch';
import { MemoryRouter } from 'react-router-dom';

describe('Issue27ArtistsWatch', () => {
  const data = [
    { id: 1, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 2, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 3, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 4, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 5, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 6, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 7, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 8, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 9, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 10, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
    { id: 11, title: 'title', url: 'urlPath', coverImage: 'imagePath', artists: 'artistsName' },
  ];

  const wrapper = mount(<Issue27ArtistsWatch data={data} />);

  it('renders children correctly', () => {
    expect(wrapper.find('.issue27__artists-watch').children()).toHaveLength(data.length);
    expect(
      wrapper
        .find('.issue27__artists-watch')
        .children()
        .find('ArtistsWatch'),
    ).toHaveLength(data.length);
  });

  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Issue27ArtistsWatch />
      </MemoryRouter>,
    );
  });
});
