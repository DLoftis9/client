import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentPreview from '../components/ContentPreview';
import IssuePreview from '../components/IssuePreview';

export default class PublicationContent extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      dataApp: [
        {
          id: 1,
          title: 'Issue 26',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/february-2015.gif',
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
          title: 'Issue 27',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/october-2015.jpg',
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
          title: 'Issue 28',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/march-2016.jpg',
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
          title: 'Issue 29',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/november-2016.jpg',
          url: '/Publication/issue29p1',
          artists: ['Chanimation Brothers, ', 'Emilie Beadle, ', 'Regina Valluzzi'],
        },
      ],
      data: [
        {
          id: 1,
          title: 'Issue 1',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/march-2011.png',
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
          title: 'Issue 2',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/april-2011.png',
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
          title: 'Issue 3',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/may-2011.png',
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
          title: 'Issue 4',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/june-2011.png',
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
          title: 'Issue 5',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/july-2011.png',
          url: 'https://issuu.com/abstraks/docs/july2_2011',
          artists: ['Aimee Shattuck, ', 'Casey Ashlock, ', 'Ivan Fernandez, ', 'Kristen Pilsifer'],
        },
        {
          id: 6,
          title: 'Issue 6',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/august-2011.png',
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
          title: 'Issue 7',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/september-2011.png',
          url: 'https://issuu.com/abstraks/docs/september_2011_',
          artists: ['Christina Watka, ', 'Sam Furst, ', 'Micah R. O. Litant, ', 'Ari Hauben'],
        },
        {
          id: 8,
          title: 'Issue 8',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/october-2011.png',
          url: 'https://issuu.com/abstraks/docs/october_2011',
          artists: ['Amanda Atkins, ', 'Chris Schuch, ', 'Kayla Mohammadi, ', 'Ultimate'],
        },
        {
          id: 9,
          title: 'Issue 9',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/november-2011.png',
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
          title: 'Issue 10',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/december-2011.png',
          url: 'https://issuu.com/abstraks/docs/december_2011',
          artists: ['The Distillery Gallery, ', 'Steve Rand, ', 'Nick Ward'],
        },
        {
          id: 11,
          title: 'Issue 11',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/january-2012.png',
          url: 'https://issuu.com/abstraks/docs/jan_2012',
          artists: ['Artisan’s Asylum, ', 'Rachelle Loiselle, ', 'Madoka Fukai'],
        },
        {
          id: 12,
          title: 'Issue 12',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/february-2012.png',
          url: 'https://issuu.com/abstraks/docs/feb_issue_2012',
          artists: ['MRBA, ', 'Matthew Lazure, ', 'Felipe Ortiz'],
        },
        {
          id: 13,
          title: 'Issue 13',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/march-2012.png',
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
          title: 'Issue 14',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/april-2012.png',
          url: 'https://issuu.com/abstraks/docs/april_2012',
          artists: ['John Borchard, ', 'Josh Wisdumb, ', 'Chifuku Kuwahara'],
        },
        {
          id: 15,
          title: 'Issue 15',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/may-2012.png',
          url: 'https://issuu.com/abstraks/docs/may_2012',
          artists: [
            'The Boston Comic Convention 2012, ',
            'Deborah Davidson, ',
            'Inspiration x Glovebox',
          ],
        },
        {
          id: 16,
          title: 'Issue 16',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/june-2012.png',
          url: 'https://issuu.com/abstraks/docs/june_web_2012',
          artists: ['Obie Simonis, ', 'Susan Strauss, ', 'Museum Of Bad Art'],
        },
        {
          id: 17,
          title: 'Issue 17',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/july-2012.png',
          url: 'https://issuu.com/abstraks/docs/july2012',
          artists: ['Kevin Hebb, ', 'Kathy Chapman, ', 'Nicole Burnor, ', 'Dustin Covan'],
        },
        {
          id: 18,
          title: 'Issue 18',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/august-2012.png',
          url: 'https://issuu.com/abstraks/docs/2012_aug',
          artists: ['Ashley Freeland, ', 'Debra Olin'],
        },
        {
          id: 19,
          title: 'Issue 19',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/september-2012.png',
          url: 'https://issuu.com/abstraks/docs/2012_sep',
          artists: ['Brian Hemming, ', "Josh 'Chico' Torres, ", 'Dan Bythewood'],
        },
        {
          id: 20,
          title: 'Issue 20',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/january-2013.png',
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
          title: 'Issue 21',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/june-2013.png',
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
          title: 'Issue 22',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/november-2013.png',
          url: 'https://issuu.com/abstraks/docs/2013_oct',
          artists: ['David Crespo, ', 'Lowri Wyn WIlliams, ', 'Lauren Passenti, ', 'Cagen Luse'],
        },
        {
          id: 23,
          title: 'Issue 23',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/march-2014.png',
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
          title: 'Issue 24',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/june-2014.png',
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
          title: 'Issue 25',
          coverImage: 'https://d173eg0xl75rn9.cloudfront.net/publication/covers/november-2014.png',
          url: 'https://issuu.com/abstraks/docs/25-2014_nov',
          artists: ['Erin Zaffis, ', 'Josh Morrissette, ', 'Ultimate, ', 'Princess Mia'],
        },
      ],
    };
  }

  render() {
    return (
      <div className="publication__container">
        <div className="header">
          <Header />
        </div>
        <main className="publication__content">
          <div className="publication__content_container container">
            <h2 className="container__title">Publication</h2>
          </div>

          <div className="publication__issues">
            <div className="publication__issueContainer container">
              <div className="publication__issueRow row">
                <div className="issuePreviewRow">
                  {this.state.dataApp
                    .slice(0)
                    .reverse()
                    .map(options => {
                      return (
                        <IssuePreview
                          key={options.id}
                          title={options.title}
                          url={options.url}
                          coverImage={options.coverImage}
                          artists={options.artists}
                        />
                      );
                    })}
                </div>
                <div className="contentPreviewRow">
                  {this.state.data
                    .slice(0)
                    .reverse()
                    .map(options => {
                      return (
                        <ContentPreview
                          key={options.id}
                          title={options.title}
                          url={options.url}
                          coverImage={options.coverImage}
                          artists={options.artists}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
