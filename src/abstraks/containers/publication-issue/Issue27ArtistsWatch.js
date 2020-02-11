import React, { Component } from 'react';

import ArtistsWatch from '../../components/ArtistsWatch';

// This contains all the data for the modal
// navigation for Issue 27 - artists watch section
export default class Issue27ArtistsWatch extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'All I Wanna Do Is',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/allIWannaDoIs-RobertBrown.jpg',
          url: 'http://brwnbear.com/',
          artists: 'Robert Brown',
        },
        {
          id: 2,
          title: 'Mallow Street',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/mallowStreet-BestEver.jpg',
          url: 'http://cargocollective.com/churchofbestever',
          artists: 'Best Ever',
        },
        {
          id: 3,
          title: 'The Counting House',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/theCountingHouse-RandalThurston.jpg',
          url: 'http://www.randalthurston.com/',
          artists: 'Randal Thurston',
        },
        {
          id: 4,
          title: 'Ashes To Ashes',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/ashesToAshes-digitalDoes.jpg',
          url: 'http://digitaldoes.com/',
          artists: 'Digital Does',
        },
        {
          id: 5,
          title: 'Emily Embers',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/emilyEmbers-JessPunk.jpg',
          url: 'https://www.instagram.com/jesspunk/',
          artists: 'Jess Punk',
        },
        {
          id: 6,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/roa-Untitled.jpg',
          url: 'https://roaweb.tumblr.com/',
          artists: 'Roa',
        },
        {
          id: 7,
          title: 'Untitled',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/merkThose-Untitled.jpg',
          url: 'https://www.merkthose.com/',
          artists: 'Merk Those',
        },
        {
          id: 8,
          title: 'The Other Side Of The Game',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/theOtherSideOfTheGame-Sainer.jpg',
          url: 'https://www.instagram.com/sainer_etam/',
          artists: 'Sainer',
        },
        {
          id: 9,
          title: 'The Voyager',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/theVoyager-NicholasBohac.jpg',
          url: 'http://www.nicholasbohac.com/',
          artists: 'Nicholas Bohac',
        },
        {
          id: 10,
          title: 'Exposed Layers (Circle)',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/exposedLayersI-TroyCoulterman.jpg',
          url: 'https://www.troycoulterman.com/',
          artists: 'Troy Coulterman',
        },
        {
          id: 11,
          title: 'Searching For Season',
          coverImage:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/artists_to_watch/searchForSeason-Nosego.jpg',
          url: 'https://www.nosego.com/',
          artists: 'Nosego',
        },
      ],
    };
  }

  render() {
    return (
      <div className="issue27__artists-watch">
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
