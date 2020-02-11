import React, { Component } from 'react';

import ArtistsWatch from '../../components/ArtistsWatch';

// This contains all the data for the modal
// navigation for Issue 28 - artists watch section
export default class Issue28ArtistsWatch extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'We Call It Rage',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/we__Call__It__Rage-Machine__56.png',
          url: 'https://www.instagram.com/machine56/',
          artists: 'Machine56',
        },
        {
          id: 2,
          title: 'Another Time',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/anotherTime-N.C.-Winters.jpg',
          url: 'http://ncwinters.com/',
          artists: 'N.C. Winters',
        },
        {
          id: 3,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/untitled-Gian-Galang.jpg',
          url: 'http://giangalang.tumblr.com/',
          artists: 'Gian Galang',
        },
        {
          id: 4,
          title: 'Visages',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/visages-Victorien-Aubineau.jpg',
          url: 'http://digitaldoes.com/',
          artists: 'Victorien Aubineau',
        },
        {
          id: 5,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/untitled-Badypnose.png',
          url: 'https://www.instagram.com/badypnose/',
          artists: 'Badypnose',
        },
        {
          id: 6,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/untitled-Kenta__Torii.png',
          url: 'http://www.kentatorii.com/',
          artists: 'Kenta Torii',
        },
        {
          id: 7,
          title: 'Mars Spy',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/mars__Spy-Gabo__Romero.png',
          url: 'http://www.gaboleps.com/',
          artists: 'Gabo Romero',
        },
        {
          id: 8,
          title: 'Ryoko',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/ryoko-Asiey__Barbie.png',
          url: 'http://asieybarbie.com/',
          artists: 'Asiey Barbie',
        },
        {
          id: 9,
          title: 'Haru',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/haru-James-Jean.png',
          url: 'http://www.jamesjean.com/',
          artists: 'James Jean',
        },
        {
          id: 10,
          title: 'Coryphanca Hippurus',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/coryphanea-Hippurus-100TAUR.jpg',
          url: 'http://100taur.fr/',
          artists: '100TAUR',
        },
        {
          id: 11,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/untitled-Buff__Monster.png',
          url: 'http://buffmonster.com/',
          artists: 'Buff Monster',
        },
        {
          id: 12,
          title: 'Pink & Green II',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/artists_to_watch/pink__Green__II-Ekaterina__Elena__Popovy.jpg',
          url: 'http://www.popovy-dolls.com/',
          artists: 'Ekaterina & Elena Popovy',
        },
      ],
    };
  }

  render() {
    return (
      <div className="issue28__artists-watch">
        {this.state.data.map(options => {
          return (
            <ArtistsWatch
              key={options.id}
              title={options.title}
              url={options.url}
              coverImage={options.coverImage}
              artists={options.artists}
            />
          );
        })}
      </div>
    );
  }
}
