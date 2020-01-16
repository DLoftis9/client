import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  pageNumber1: PropTypes.number.isRequired,
  pageNumber2: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,

  linkURL1: PropTypes.string.isRequired,
  linkURL2: PropTypes.string.isRequired,
  linkURL3: PropTypes.string.isRequired,
  linkURL4: PropTypes.string.isRequired,
  linkURL5: PropTypes.string.isRequired,

  linkText1: PropTypes.string.isRequired,
  linkText2: PropTypes.string.isRequired,
  linkText3: PropTypes.string.isRequired,
  linkText4: PropTypes.string.isRequired,
  linkText5: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p9',
  next: '/Publication/Issue27p11',
  pageNumber1: 18,
  pageNumber2: 19,
  company: 'Abstraks',

  linkURL1: 'http://politicalpirates.com/penandsword/',
  linkURL2: 'http://grassrootsgrind.com/group/',
  linkURL3: 'http://grassrootsgrind.com/blog',
  linkURL4: 'https://instagram.com/ps_jake/',
  linkURL5: 'http://www.cityofboston.gov/arts/visual/openstudios.asp',

  linkText1: 'www.politicalpirates.com',
  linkText2: 'www.grassrootsgrind.com/group',
  linkText3: 'grassrootsgrind.com/blog',
  linkText4: '@PS_Jake',
  linkText5: 'www.roxburyopenstudios.org',

  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p10 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <h3 className="page_paragraph__author">
              I saw you also studied printmaking. Do you still enjoy printmaking?
            </h3>

            <p className="page_paragraph">
              I love it. Without access to a press and hoods I have changed my methods to more lino
              and woodcuts that are easier to pull off at home…I think I love print so much in part
              because it directly connects to a history of political art making and is still a
              tremendous tool for sharing ideas with very basic tools and technology.
            </p>

            <h3 className="page_paragraph__author">
              Who are some of your favorite local artists? Who should we be looking out for?
            </h3>

            <p className="page_paragraph">
              I take a lot of inspiration from the ALA / AWOL generation of graffiti writers from
              Boston and have been blessed to know many as friends and mentors like Rob Stull, best
              known for his comic and illustration work who organized events like ComNGraff where I
              met a lot of the talent in the city.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Events like that or places where they can happen like Kulturez (my good friend Myan
              Tamang’s establishment), Lot F, Artists for Humanity, The MakeShift Gallery, Lucy
              Parsons Center, Spontaneous Celebrations, BDGA, Out of the Blue Gallery. Inner Sanctum
              Studios etc are all great places to find great art in this city.
            </p>

            <p className="page_paragraph">
              Artists to look out for? Kwest, Deme5, Problak, Marka27, Soem, Biz20, Tense, Percy
              Wright, Mynd, Merc, Synapse, Auks, Adam O’Day are just a few of the cats killing it on
              and off the walls.
            </p>

            <p className="page_paragraph">
              Tell us about your web and graphic design firm, Pen & Sword Political Pirates.
            </p>

            <p className="page_paragraph">
              I started{' '}
              <a href={props.linkURL1} className="anchor" target="_blank" rel="noopener noreferrer">
                {props.linkText1}
              </a>{' '}
              Pen & Sword to position and acknowledge the art and design work I was doing, as the
              tool for activism that it was. It’s an honor to work with people who promote positive
              and powerful messages.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Pen & Sword is the umbrella we do that under. From our events to our design clients to
              projects and pieces we produce ourselves…PS is just a flag to represent art with an
              agenda.
            </p>

            <h3 className="page_paragraph__author">
              What about Grassroots Grind? Saw it on your website…what’s that?
            </h3>

            <p className="page_paragraph">
              Grassroots Grind started as just a name for our server but has since become home to an
              informal list of our collective of associates,{' '}
              <a href={props.linkURL2} className="anchor" target="_blank" rel="noopener noreferrer">
                {props.linkText2}
              </a>{' '}
              the grassroots grind group—a bunch of cool creative people who do cool creative stuff
              together and a{' '}
              <a href={props.linkURL3} className="anchor" target="_blank" rel="noopener noreferrer">
                {props.linkText3}
              </a>{' '}
              blog highlighting music/content that we [find] interesting.
            </p>

            <h3 className="page_paragraph__author">
              Can people get involved in Pen & Sword or Grassroots Grind?
            </h3>

            <p className="page_paragraph">
              Both were conceived as open and developing structures that have grown and changed with
              the people they represent. Hit us up. Find out more.
            </p>
          </div>

          <div className="page_column-3">
            <h3 className="page_paragraph__author">
              Do you have any shows for your art coming up or any other interesting events you
              suggest Abstraks readers check out?
            </h3>

            <p className="page_paragraph">
              I should be showing something at Roxbury Open Studios (details forthcoming) but
              otherwise people can look at the sites for more information.
            </p>

            <p className="page_paragraph">
              Readers can also see more at jacobleidolf.com. You can also follow him on Twitter and
              Instagram{' '}
              <a href={props.linkURL4} className="anchor" target="_blank" rel="noopener noreferrer">
                {props.linkText4}
              </a>
              . The 17th Annual Roxbury Open Studios run from October 1-4, 2015. For more
              information, visit{' '}
              <a href={props.linkURL5} className="anchor" target="_blank" rel="noopener noreferrer">
                {props.linkText5}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber1}</strong> {props.company}
            </p>
          </div>

          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">
              {props.company} <strong>{props.pageNumber2}</strong>
            </p>
          </div>
        </div>
      </article>

      <PageNav
        prev={props.prev}
        next={props.next}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
      />
    </div>
  </div>
);

Issue27p10.propTypes = propTypes;
Issue27p10.defaultProps = defaultProps;

export default Issue27p10;
