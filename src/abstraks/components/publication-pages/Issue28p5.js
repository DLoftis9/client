import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  andTheDevil: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p4',
  next: '/Publication/Issue28p6',
  andTheDevil:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_AND__THE__DEVIL__A__Tribute__To__Durer_Etching_2015.jpg',
  titleDescription1: 'And The Devil - Etching, 2015',
  pageNumber: 8,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p5 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="page_intro__row row">
          <PublicationHome />
          <div className="page_column-6">
            <h3 className="page_intro__header">The Devil In You</h3>
          </div>
        </div>

        <div className="issue-page__row row">
          <div className="page_column-3">
            <p className="page_paragraph">
              Michelle Dugan is the devil’s biggest fan. They share the same interests: death,
              snakes, and horns. If the devil had a band, he would probably commission Michelle to
              do the cover, no doubt, a very prestigious honor. Michelle’s work isn’t likely to be
              everyone’s thing. Satan is an acquired taste. For Michelle, it’s a lifestyle. She
              lovingly crafts her muse again and again, composing prints and illustrations dedicated
              to all things illicit. Demonic hybrids with spiking horns and slithering snakes rule
              this empty desert. They’ve made a home among the caves and cliffs in some forgotten
              kingdom that no one visits, copied from the pages of a book that no one reads. If
              there were a story for these illustrations to tell, the heroes might somehow cross
              paths and unite under a common cause, a crusade against humanity perhaps.
            </p>

            <p className="page_paragraph">
              These kings of the underworld aren’t waging wars or casting spells. They gaze and trot
              their way through an infinite prison. Something’s keeping them from the company of
              others. It’s not a welcoming scene with all the skulls and spikes everywhere. Maybe
              that’s how they like things, hostile and scathing.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              It’s more spacious that way. There’s no one around to tell you how a person should be.
              It’s possible that the scariest thing about these ghouls is their appearance.
              Misguided and misjudged, Michelle’s creations get to be masters of their own domain.
              Wherever Satan’s keeping them, he seems to be enjoying a vast amount of real estate.
            </p>

            <p className="page_paragraph">
              When you see the artist’s work, you might be tempted to write it off. You can imagine
              people’s faces when they see demons on the wall of a Boston gallery. Just another
              “emo” girl with an appetite for danger. But these images aren’t whipped together at
              the Hot Topic Headquarters in Industry, LA; they’re finely sketched and brought to
              life with hours upon hours of painstaking work. You can see the love in the details.
              The work exudes patience, planning and precision. Geometric shapes serve as windows
              into the myths of generations past. Her style gives the subject some authority, as if
              we should have heard about these guys at bible camp. They seem as real and as
              significant as the wounded soldiers and archbishops of the Renaissance.
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.andTheDevil}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>

            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.company}
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

Issue28p5.propTypes = propTypes;
Issue28p5.defaultProps = defaultProps;

export default Issue28p5;
