import React from 'react';
import { mount, shallow } from 'enzyme';
import Publication from '../../containers/Publication';
import { MemoryRouter } from 'react-router-dom';

describe('Publication', () => {
  const dataIssuePreview = [
    {
      id: 1,
      title: 'February 2015',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/february-2015.gif',
      url: '/Publication/issue26p1',
      artists: [
        'Owen Linders, ',
        'Richard Heckert, ',
        'Rick Berry, ',
        'Taner Tumkaya, ',
        'Raul Gonzalez III',
      ],
    },
    {
      id: 2,
      title: 'October 2015',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/october-2015.jpg',
      url: '/Publication/issue27p1',
      artists: [
        'Jacob Leidolf, ',
        'Anne Johnstone, ',
        'Have You Ever Met Dave Tree?, ',
        'John Guthrie, ',
        'Artists To Watch',
      ],
    },
    {
      id: 3,
      title: 'March 2016',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/march-2016.jpg',
      url: '/Publication/issue28p1',
      artists: [
        'Michelle Dugan, ',
        'Merk Those, ',
        "Camilla d'Errico, ",
        'Allison Bamcat, ',
        'Artists To Watch',
      ],
    },
    {
      id: 4,
      title: 'November 2016',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/november-2016.jpg',
      url: '/Publication/issue29p1',
      artists: ['Chanimation Brothers, ', 'Emilie Beadle, ', 'Regina Valluzzi'],
    },
  ];

  const dataContentPreview = [
    {
      id: 1,
      title: 'March 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/march-2011.png',
      url: 'https://issuu.com/abstraks/docs/www.abstraks.com',
      artists: [
        'Nate Kruback, ',
        'Derek Cilla, ',
        'Pete Cosmos, ',
        'Taj Campman, ',
        'Rob Drew, ',
        'Hancock 309, ',
        'Yes.Oui.Si Space',
      ],
    },
    {
      id: 2,
      title: 'April 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/april-2011.png',
      url: 'https://issuu.com/abstraks/docs/april-2011',
      artists: [
        'Chelsea DeSilva, ',
        'Mike Helz, ',
        '!ND!V!DUALS, ',
        'Alice Upton, ',
        "Josh 'Chico' Torres, ",
        'Hayward Meyers, ',
        'Orchard Skate Shop, ',
        'Glovebox, ',
        'Defcon',
      ],
    },
    {
      id: 3,
      title: 'May 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/may-2011.png',
      url: 'https://issuu.com/abstraks/docs/may_2011',
      artists: [
        'Buck Squibb, ',
        'Adam Brochstein, ',
        'Sean Brady, ',
        'Sam George, ',
        'Geo, ',
        'Kulturez, ',
        'Boston Cyberarts Festival ',
      ],
    },
    {
      id: 4,
      title: 'June 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/june-2011.png',
      url: 'https://issuu.com/abstraks/docs/june_2011_issue',
      artists: [
        'Autumn Ahn, ',
        'Matthew Altieri, ',
        'goldenstash, ',
        'Dave Tree, ',
        'Kati Mennett, ',
        'Rachel Prouty, ',
        'Lot F Gallery',
      ],
    },
    {
      id: 5,
      title: 'July 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/july-2011.png',
      url: 'https://issuu.com/abstraks/docs/july2_2011',
      artists: ['Aimee Shattuck, ', 'Casey Ashlock, ', 'Ivan Fernandez, ', 'Kristen Pilsifer'],
    },
    {
      id: 6,
      title: 'August 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/august-2011.png',
      url: 'https://issuu.com/abstraks/docs/august2_2011',
      artists: [
        'Adam Miller, ',
        'Ian Sanity, ',
        'Adam O’Day, ',
        'Raodee Rekloos, ',
        'Sarah Potter',
      ],
    },
    {
      id: 7,
      title: 'September 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/september-2011.png',
      url: 'https://issuu.com/abstraks/docs/september_2011_',
      artists: ['Christina Watka, ', 'Sam Furst, ', 'Micah R. O. Litant, ', 'Ari Hauben'],
    },
    {
      id: 8,
      title: 'October 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/october-2011.png',
      url: 'https://issuu.com/abstraks/docs/october_2011',
      artists: ['Amanda Atkins, ', 'Chris Schuch, ', 'Kayla Mohammadi, ', 'Ultimate'],
    },
    {
      id: 9,
      title: 'November 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/november-2011.png',
      url: 'https://issuu.com/abstraks/docs/november_2011',
      artists: [
        'Kelly Burgess, ',
        'Division Leap, ',
        'Sean Flood, ',
        'Jake Waldron, ',
        'Percy Fortini-Wright',
      ],
    },
    {
      id: 10,
      title: 'December 2011',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/december-2011.png',
      url: 'https://issuu.com/abstraks/docs/december_2011',
      artists: ['The Distillery Gallery, ', 'Steve Rand, ', 'Nick Ward'],
    },
    {
      id: 11,
      title: 'January 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/january-2012.png',
      url: 'https://issuu.com/abstraks/docs/jan_2012',
      artists: ['Artisan’s Asylum, ', 'Rachelle Loiselle, ', 'Madoka Fukai'],
    },
    {
      id: 12,
      title: 'February 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/february-2012.png',
      url: 'https://issuu.com/abstraks/docs/feb_issue_2012',
      artists: ['MRBA, ', 'Matthew Lazure, ', 'Felipe Ortiz'],
    },
    {
      id: 13,
      title: 'March 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/march-2012.png',
      url: 'https://issuu.com/abstraks/docs/mar_2012_web',
      artists: [
        'Mark Luiggi, ',
        'Artists For Humanity, ',
        'Marian Dioguardi, ',
        'Resa Blatman, ',
        'Tim Fish',
      ],
    },
    {
      id: 14,
      title: 'April 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/april-2012.png',
      url: 'https://issuu.com/abstraks/docs/april_2012',
      artists: ['John Borchard, ', 'Josh Wisdumb, ', 'Chifuku Kuwahara'],
    },
    {
      id: 15,
      title: 'May 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/may-2012.png',
      url: 'https://issuu.com/abstraks/docs/may_2012',
      artists: [
        'The Boston Comic Convention 2012, ',
        'Deborah Davidson, ',
        'Inspiration x Glovebox',
      ],
    },
    {
      id: 16,
      title: 'June 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/june-2012.png',
      url: 'https://issuu.com/abstraks/docs/june_web_2012',
      artists: ['Obie Simonis, ', 'Susan Strauss, ', 'Museum Of Bad Art'],
    },
    {
      id: 17,
      title: 'July 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/july-2012.png',
      url: 'https://issuu.com/abstraks/docs/july2012',
      artists: ['Kevin Hebb, ', 'Kathy Chapman, ', 'Nicole Burnor, ', 'Dustin Covan'],
    },
    {
      id: 18,
      title: 'August 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/august-2012.png',
      url: 'https://issuu.com/abstraks/docs/2012_aug',
      artists: ['Ashley Freeland, ', 'Debra Olin'],
    },
    {
      id: 19,
      title: 'September 2012',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/september-2012.png',
      url: 'https://issuu.com/abstraks/docs/2012_sep',
      artists: ['Brian Hemming, ', "Josh 'Chico' Torres, ", 'Dan Bythewood'],
    },
    {
      id: 20,
      title: 'January 2013',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/january-2013.png',
      url: 'https://issuu.com/abstraks/docs/2013_jan',
      artists: [
        'Joshua Oliveira, ',
        'Phyllis Ewen, ',
        'Landon Richmond, ',
        'Southern New England Artist Community, ',
        'Larry Kwong, ',
        'Minutia, ',
        'Orchard Skate Shop, ',
        'Gorilla Snow Design',
      ],
    },
    {
      id: 21,
      title: 'June 2013',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/june-2013.png',
      url: 'https://issuu.com/abstraks/docs/2013_june_2e10b08d93930e',
      artists: [
        'Jao Deauna, ',
        'Maggie Carberry, ',
        'Fallen Manga Studios, ',
        'Adam Miller, ',
        'Johnny Tang, ',
        'Hayward Meyers, ',
        'Joe Pee, ',
        'Nicole Graham',
      ],
    },
    {
      id: 22,
      title: 'November 2013',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/november-2013.png',
      url: 'https://issuu.com/abstraks/docs/2013_oct',
      artists: ['David Crespo, ', 'Lowri Wyn WIlliams, ', 'Lauren Passenti, ', 'Cagen Luse'],
    },
    {
      id: 23,
      title: 'March 2014',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/march-2014.png',
      url: 'https://issuu.com/abstraks/docs/2014_mar-web',
      artists: [
        'Yamada Hidetoshi, ',
        'Michael Paul Smith, ',
        'AVOne, ',
        'Max Madden, ',
        'Is Art School Worth It?, ',
        'Parlor Gallery, ',
        'Minutia, ',
        'Orchard Skate Shop, ',
        'Kulturez, ',
        'Ai Weiwei, ',
        'Brian Gaberman',
      ],
    },
    {
      id: 24,
      title: 'June 2014',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/june-2014.png',
      url: 'https://issuu.com/abstraks/docs/2014_june',
      artists: [
        'Lucilda Dassardo Cooper, ',
        'Courtney Erin McKenna, ',
        'Abstraks Mobile App, ',
        'Gallery 55',
      ],
    },
    {
      id: 25,
      title: 'November 2014',
      coverImage:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/covers/november-2014.png',
      url: 'https://issuu.com/abstraks/docs/25-2014_nov',
      artists: ['Erin Zaffis, ', 'Josh Morrissette, ', 'Ultimate, ', 'Princess Mia'],
    },
  ];

  const wrapper = mount(
    <MemoryRouter>
      <Publication dataIssuePreview={dataIssuePreview} dataContentPreview={dataContentPreview} />
    </MemoryRouter>,
  );

  it('renders children correctly with the component IssuePreview', () => {
    expect(wrapper.find('.issuePreviewRow').children()).toHaveLength(dataIssuePreview.length);
    expect(
      wrapper
        .find('.issuePreviewRow')
        .children()
        .find('IssuePreview'),
    ).toHaveLength(dataIssuePreview.length);
  });

  it('renders children correctly with the component ContentPreview', () => {
    expect(wrapper.find('.contentPreviewRow').children()).toHaveLength(dataContentPreview.length);
    expect(
      wrapper
        .find('.contentPreviewRow')
        .children()
        .find('ContentPreview'),
    ).toHaveLength(dataContentPreview.length);
  });
});
