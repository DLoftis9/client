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
  viewer: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p19',
  next: '/Publication/Issue27p21',
  viewer: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/sweeTree/viewer.jpg',
  titleDescription: 'Viewer',
  pageNumber: 38,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p20 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              Donned with a black leather, patch, and stud covered cape and the superpower of art,
              he fights for justice. His socially and politically motivated artwork defines the
              aggression and letdown of generations disenfranchised by corporate greed and political
              corruption. At the same time he displays the hope and positivity required to survive
              that aggression. He fights evil with a booming voice and in-your-face opinions that
              one can’t really help but agree with.
            </p>

            <p className="page_paragraph">
              Have you ever met Dave Tree? He’s been around the block. Most notably known for
              fronting the Boston punk/rock/groove band TREE as well as being the go-to guy for all
              your screen-printing needs in Boston. He also was the front man for Drugwar and
              Superpower. He ran the House of Ill, an indie art gallery in the heart of Allston. His
              latest venture is a screen-printing shop, mini venue, and art gallery that shows some
              of the most underrated work in town.
            </p>

            <p className="page_paragraph">
              Dave is a man of resources, as he’s been on the scene for a long, long time, he’s made
              hundreds of connections that allow him to
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              operate, virtually with no money. “I use my connections all the time.” He works on
              favors. “Influence on people is more powerful than money can be,” boasting that he
              only needs to use money when he has to. Tree is the line between passionate and
              insane. Insane in the most sane, logical, Batmanish kind of way.
            </p>
            <p className="page_paragraph">
              But this feature is not about Dave. No. It’s about his headquarters. The Davecave, the
              fortress of attitude: SweeTree Ink. Sure Dave uses his HQ to run his screen printing
              business, but it’s more than just the dank basement where he spends most days
              spreading colorful goop, where we’re now speaking together.
            </p>
            <p className="page_paragraph">
              Above ground is an independently run gallery, venue and shop that features work from
              New England’s growing indie art scene and embodies the non-mega-capitalistic and
              non-hypocritical nature of his own lifestyle. Sure, it’s a small space, but the
              overwhelming display of work is vast and diverse. Artists from all backgrounds,
              creatives, musicians, comedians, and really any field. If you want to collaborate or
              show or
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.viewer}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
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

Issue27p20.propTypes = propTypes;
Issue27p20.defaultProps = defaultProps;

export default Issue27p20;
